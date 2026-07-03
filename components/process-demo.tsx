"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Clock, Droplets, Lock, RotateCcw, Wrench } from "lucide-react";

export const stages = [
  {
    label: "Wireframe",
    caption: "Your project brief becomes a wireframe — every page and section mapped out.",
  },
  {
    label: "Design",
    caption: "The design pass — color, shape, and brand style transform the skeleton.",
  },
  {
    label: "Content",
    caption: "Real content drops in while you review and give feedback in real time.",
  },
  {
    label: "Launch",
    caption: "Launch day — your real domain goes live, with SSL, SEO, and mobile all green.",
  },
];

// Which process step each visual stage belongs to (design + content are both step 2)
const STAGE_TO_STEP = [0, 1, 1, 2];
const STAGE_MS = 2600;

export type ProcessDemoState = ReturnType<typeof useProcessDemo>;

export function useProcessDemo() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);

  // Start the build animation the first time the demo scrolls into view
  useEffect(() => {
    const el = demoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setStage(3);
        } else {
          setPlaying(true);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (stage >= stages.length - 1) {
      setPlaying(false);
      return;
    }
    const timer = setTimeout(() => setStage(stage + 1), STAGE_MS);
    return () => clearTimeout(timer);
  }, [playing, stage]);

  const goTo = (s: number) => {
    setPlaying(false);
    setStage(s);
  };

  const replay = () => {
    setStage(0);
    setPlaying(true);
  };

  return { stage, demoRef, goTo, replay, activeStep: STAGE_TO_STEP[stage] };
}

export function ProcessDemo({ demo }: { demo: ProcessDemoState }) {
  const { stage, demoRef, goTo, replay } = demo;

  return (
    <div ref={demoRef} className="process-demo" data-stage={stage + 1}>
      <div className="pd-frame overflow-hidden rounded-xl border border-border/50 bg-card">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-border/40 px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
          </span>
          <span className="pd-url flex flex-1 items-center rounded-md bg-background/60 px-3 py-1 text-[11px] text-muted-foreground">
            <span className="pd-url-draft truncate">preview.builtforsmallbiz.dev</span>
            <span className="pd-url-live flex items-center gap-1.5 text-foreground/90">
              <Lock className="h-3 w-3 text-emerald-400" />
              acmeplumbing.com
            </span>
          </span>
          <span className="pd-live pd-live-badge flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        </div>

        {/* Mini nav */}
        <div className="flex items-center justify-between border-b border-border/40 px-5 py-3">
          <span className="flex items-center gap-1.5">
            <span className="pd-d h-2 w-2 rounded-xs bg-brand" />
            <span className="pd-sw h-4 min-w-24">
              <span className="pd-ph h-2.5 w-20" />
              <span className="pd-real text-xs font-semibold">Acme Plumbing</span>
            </span>
          </span>
          <span className="pd-sw pd-sw-end h-4 min-w-36">
            <span className="pd-ph pd-s1 h-2 w-32" />
            <span className="pd-s2 absolute right-0 top-1/2 flex -translate-y-1/2 gap-2">
              <span className="h-2 w-9 rounded-[3px] bg-brand/50" />
              <span className="h-2 w-9 rounded-[3px] bg-brand/50" />
              <span className="h-2 w-9 rounded-[3px] bg-brand/50" />
            </span>
            <span className="pd-real text-[11px] tracking-wide text-muted-foreground">
              Services&ensp;&middot;&ensp;About&ensp;&middot;&ensp;Contact
            </span>
          </span>
        </div>

        {/* Mini hero */}
        <div className="relative flex flex-col items-center gap-2.5 px-6 pb-6 pt-8">
          <div className="pd-d pointer-events-none absolute -top-8 left-1/2 h-28 w-64 -translate-x-1/2 rounded-full bg-brand/15 blur-2xl" />
          <span className="pd-sw pd-sw-ctr h-6 w-full">
            <span className="pd-ph h-3.5 w-56" />
            <span className="pd-real text-lg font-bold">Plumbing done right,</span>
          </span>
          <span className="pd-sw pd-sw-ctr h-6 w-full">
            <span className="pd-ph h-3.5 w-40" />
            <span className="pd-real text-lg font-bold text-gradient">the first time</span>
          </span>
          <span className="pd-sw pd-sw-ctr h-4 w-full">
            <span className="pd-ph h-2 w-72 max-w-full" />
            <span className="pd-real text-[11px] text-muted-foreground">
              Licensed &amp; insured &middot; Serving the metro area since 1998
            </span>
          </span>
          <span className="pd-cta relative mt-3 flex h-8 w-32 items-center justify-center">
            <span className="pd-sw pd-sw-ctr h-3 w-full">
              <span className="pd-ph h-1.5 w-14" />
              <span className="pd-real text-[11px] font-semibold text-white">
                Book a service
              </span>
            </span>
          </span>
        </div>

        {/* Mini cards */}
        <div className="grid grid-cols-3 gap-3 px-5 pb-5">
          {[
            { icon: Wrench, title: "Repairs", desc: "Fast fixes, done right" },
            { icon: Droplets, title: "Installations", desc: "Fixtures & water heaters" },
            { icon: Clock, title: "Emergency", desc: "24/7 — we pick up" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="pd-crd p-3">
              <div className="pd-blk relative mb-2.5 flex h-9 items-center justify-center">
                <span className="pd-x" aria-hidden="true" />
                <Icon className="pd-d h-4 w-4 text-brand" />
              </div>
              <span className="pd-sw h-3.5">
                <span className="pd-ph h-2 w-14" />
                <span className="pd-real text-[11px] font-semibold">{title}</span>
              </span>
              <span className="pd-sw mt-1 h-3">
                <span className="pd-ph h-1.5 w-20 max-w-full" />
                <span className="pd-real truncate text-[10px] text-muted-foreground">
                  {desc}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Launch checklist */}
        <div className="pd-launchbar flex items-center justify-center gap-4 px-4 text-[10px] font-medium text-emerald-300/90">
          {["SSL secured", "SEO ready", "Mobile responsive"].map((item) => (
            <span key={item} className="flex items-center gap-1">
              <Check className="h-3 w-3 text-emerald-400" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Caption + stage controls */}
      <p aria-live="polite" className="mt-5 min-h-10 text-center text-sm text-muted-foreground">
        {stages[stage].caption}
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        {stages.map(({ label }, i) => (
          <button
            key={label}
            onClick={() => goTo(i)}
            className={`rounded-full px-3 py-1 text-xs font-medium ring-1 transition-all duration-300 ${
              stage === i
                ? "bg-brand/15 text-brand ring-brand/30"
                : "text-muted-foreground ring-border/50 hover:text-foreground hover:ring-border"
            }`}
          >
            {i + 1} · {label}
          </button>
        ))}
        <button
          onClick={replay}
          aria-label="Replay the build animation"
          className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground ring-1 ring-border/50 transition-all hover:text-foreground hover:ring-border"
        >
          <RotateCcw className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/** Self-contained demo for pages that don't need step syncing. */
export function ProcessShowcase() {
  const demo = useProcessDemo();
  return <ProcessDemo demo={demo} />;
}
