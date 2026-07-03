"use client";

import { Reveal } from "@/components/reveal";
import { ProcessDemo, useProcessDemo } from "@/components/process-demo";

const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    desc: "Fill out our short project brief. Tell us who you are, what you do, and what you need. No tech jargon required — we speak plain English.",
    stage: 0,
  },
  {
    number: "02",
    title: "We design & build together",
    desc: "Our rapid prototyping process means you see progress from day one. Review, give feedback, and watch changes happen live — so the final product is exactly what you envisioned.",
    stage: 1,
  },
  {
    number: "03",
    title: "We launch, you grow",
    desc: "We handle deployment, DNS, SEO basics, and the full handoff. Your site goes live and your customers can finally find you.",
    stage: 3,
  },
];

export function HowItWorks() {
  const demo = useProcessDemo();

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              The process
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Watch your website come to life
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From wireframe to launch in three simple steps — you see progress at
              every stage, and you&rsquo;re never left guessing.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map(({ number, title, desc, stage: stepStage }, i) => {
              const active = demo.activeStep === i;
              return (
                <Reveal key={number} variant="left" delay={i * 130}>
                  <button
                    onClick={() => demo.goTo(stepStage)}
                    aria-current={active ? "step" : undefined}
                    className={`w-full rounded-xl border p-5 text-left transition-all duration-300 ${
                      active
                        ? "border-brand/50 bg-brand/10"
                        : "border-border/40 opacity-60 hover:opacity-100 hover:border-border"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span
                        className={`text-4xl font-black leading-none select-none text-gradient transition-opacity duration-300 ${
                          active ? "" : "opacity-50"
                        }`}
                      >
                        {number}
                      </span>
                      <div>
                        <h3 className="mb-1.5 font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Live build demo */}
          <Reveal variant="right" delay={150}>
            <ProcessDemo demo={demo} />
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
