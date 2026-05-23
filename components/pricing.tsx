import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Complete Redesign",
    price: "$500",
    desc: "Give your existing website a fresh, modern look.",
    features: [
      "Full visual redesign",
      "Up to 10 pages",
      "Mobile-responsive update",
      "Improved page speed",
      "Basic on-page SEO",
      "SSL certificate",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "New Website",
    price: "$599",
    desc: "A clean online presence for businesses just getting started.",
    features: [
      "Up to 10 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic on-page SEO",
      "1 year of hosting included",
      "SSL certificate",
    ],
    cta: "Get started",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Pricing
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No monthly retainers. No surprise bills. Pay once, own your site
            forever.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border border-brand/50 bg-card glow-brand scale-105"
                    : "border border-border/50 bg-card hover:border-border"
                }`}
              >
                {plan.highlighted && (
                  <>
                    {/* Gradient top border */}
                    <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-brand to-transparent" />
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-gradient-to-r from-brand to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-brand/30">
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className={`text-4xl font-black ${plan.highlighted ? "text-gradient" : ""}`}>
                      {plan.price}
                    </span>
                    <span className="mb-1 text-sm text-muted-foreground">one-time</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-8 w-full ${plan.highlighted ? "shadow-lg shadow-brand/30" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </div>
            ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need something custom?{" "}
          <a href="#contact" className="font-medium text-brand hover:underline">
            Let&rsquo;s talk &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
