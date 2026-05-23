const steps = [
  {
    number: "01",
    title: "Tell us about your business",
    desc: "Fill out our short project brief. Tell us who you are, what you do, and what you need. No tech jargon required — we speak plain English.",
  },
  {
    number: "02",
    title: "We design & build together",
    desc: "We share designs and prototypes at every stage. You approve before we build anything, so there are never any surprises.",
  },
  {
    number: "03",
    title: "We launch, you grow",
    desc: "We handle deployment, DNS, SEO basics, and the full handoff. Your site goes live and your customers can finally find you.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            The process
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Simple from start to finish
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We've streamlined every step so you always know where things stand —
            and you're never left guessing.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map(({ number, title, desc }, i) => (
            <div key={number} className="relative">
              {/* Connector line between steps (desktop) */}
              {i < steps.length - 1 && (
                <div className="absolute left-full top-8 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-brand/30 to-transparent md:block" />
              )}

              <div className="mb-4 text-7xl font-black leading-none select-none text-gradient opacity-60">
                {number}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
