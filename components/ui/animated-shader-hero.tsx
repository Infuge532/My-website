"use client";

import React, { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface ButtonDef {
  text: string;
  href?: string;
  onClick?: () => void;
}

interface HeroProps {
  trustBadge?: { text: string; icon?: string };
  headline: { line1: string; line2: string };
  subtitle: string;
  buttons?: { primary?: ButtonDef; secondary?: ButtonDef };
  scrollCueHref?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// WebGL shader background hook
// ---------------------------------------------------------------------------
const defaultShaderSource = `#version 300 es
/*
 * Cosmic nebula shader — adapted from Matthias Hurrle (@atzedent)
 * Recolored to indigo/violet palette.
 */
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
uniform vec2 move;
uniform vec2 touch;
uniform int pointerCount;
uniform vec2 pointers;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN,st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.5,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  for(float i=1.;i<12.;i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    /* shift light streaks toward blue-purple by weighting R and B channels */
    col+=.00125/d*(cos(sin(i)*vec3(1.5,0.5,3.0))+1.);
    float b=noise(i+p+bg*1.731);
    col+=.002*b/length(max(p,vec2(b*p.x*.02,p.y)));
    /* indigo nebula cloud tint instead of warm orange */
    col=mix(col,vec3(bg*.08,bg*.04,bg*.25),d);
  }
  O=vec4(col,1);
}`;

function useShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    // ---- compile helpers ----
    function compile(shader: WebGLShader, src: string) {
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
    }

    const vertSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    // ---- build program ----
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    compile(vs, vertSrc);
    compile(fs, defaultShaderSource);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
      gl.STATIC_DRAW,
    );

    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");
    const uMove = gl.getUniformLocation(program, "move");
    const uTouch = gl.getUniformLocation(program, "touch");
    const uPointerCount = gl.getUniformLocation(program, "pointerCount");
    const uPointers = gl.getUniformLocation(program, "pointers");

    // ---- pointer tracking ----
    let mouseX = 0, mouseY = 0;
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("mousemove", onMove);

    // ---- resize ----
    function resize() {
      if (!canvas) return;
      const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    // ---- render loop ----
    let raf: number;
    function loop(now: number) {
      gl!.clearColor(0, 0, 0, 1);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.useProgram(program);
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform1f(uTime, now * 1e-3);
      gl!.uniform2f(uMove, mouseX, mouseY);
      gl!.uniform2f(uTouch, mouseX, mouseY);
      gl!.uniform1i(uPointerCount, 0);
      gl!.uniform2fv(uPointers, [0, 0]);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return canvasRef;
}

// ---------------------------------------------------------------------------
// Hero component
// ---------------------------------------------------------------------------
function Btn({ def, primary: isPrimary }: { def: ButtonDef; primary?: boolean }) {
  const base =
    "inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-pointer";
  const primary =
    "bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50";
  const secondary =
    "bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white/90 backdrop-blur-sm";

  if (def.href) {
    return (
      <a href={def.href} className={`${base} ${isPrimary ? primary : secondary}`}>
        {def.text}
      </a>
    );
  }
  return (
    <button onClick={def.onClick} className={`${base} ${isPrimary ? primary : secondary}`}>
      {def.text}
    </button>
  );
}

export function AnimatedShaderHero({
  trustBadge,
  headline,
  subtitle,
  buttons,
  scrollCueHref,
  className = "",
}: HeroProps) {
  const canvasRef = useShaderBackground();

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-black ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{ background: "black" }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
        {/* Trust badge */}
        {trustBadge && (
          <div className="mb-8 shader-fade-down">
            <div className="flex items-center gap-2 px-6 py-3 bg-indigo-500/10 backdrop-blur-md border border-indigo-300/30 rounded-full text-sm">
              {trustBadge.icon && (
                <span className="text-indigo-300">{trustBadge.icon}</span>
              )}
              <span className="text-indigo-100">{trustBadge.text}</span>
            </div>
          </div>
        )}

        {/* Headline */}
        <div className="text-center space-y-2 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold shader-fade-up shader-delay-200">
            <span className="block bg-gradient-to-r from-indigo-200 via-violet-300 to-purple-200 bg-clip-text text-transparent">
              {headline.line1}
            </span>
            <span className="block bg-gradient-to-r from-violet-300 via-indigo-400 to-blue-300 bg-clip-text text-transparent shader-delay-400">
              {headline.line2}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-center text-lg md:text-xl text-white/70 font-light leading-relaxed shader-fade-up shader-delay-600">
          {subtitle}
        </p>

        {/* Buttons */}
        {buttons && (
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center shader-fade-up shader-delay-800">
            {buttons.primary && <Btn def={buttons.primary} primary />}
            {buttons.secondary && <Btn def={buttons.secondary} />}
          </div>
        )}
      </div>

      {/* Scroll cue */}
      {scrollCueHref && (
        <a
          href={scrollCueHref}
          aria-label="Scroll down to learn more"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white/90 shader-fade-up shader-delay-800"
        >
          <ChevronDown className="h-7 w-7 animate-cue" />
        </a>
      )}
    </div>
  );
}
