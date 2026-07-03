import { TrendingDown, Clock, Banknote } from "lucide-react";
import { Reveal } from "@/components/reveal";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Your current site is costing you customers",
    desc: "An outdated site — or no site at all — sends people straight to your competitors. First impressions happen online now, whether you're there or not.",
  },
  {
    icon: Clock,
    title: "DIY builders eat your evenings",
    desc: "You didn't start a business to wrestle with drag-and-drop editors at midnight. Every hour spent fighting templates is an hour not spent on your actual work.",
  },
  {
    icon: Banknote,
    title: "Agencies quote $10k and six weeks",
    desc: "Most agencies are priced for enterprise clients. A five-page site shouldn't cost as much as a used car or take half a season to ship.",
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Sound familiar?
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Getting online shouldn&rsquo;t be this hard
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              If you&rsquo;re running a small business, you&rsquo;ve probably hit
              at least one of these walls.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="group relative h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-xl bg-brand/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="zoom" delay={200}>
          <p className="mt-14 text-center text-lg">
            There&rsquo;s a middle path:{" "}
            <span className="font-semibold text-gradient">
              professional design at small-business pricing
            </span>{" "}
            — done in weeks, not months.
          </p>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
