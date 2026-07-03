import { Globe, ShieldCheck, Smartphone, Paintbrush } from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    icon: Paintbrush,
    title: "Site Redesign",
    desc: "Got an outdated site that's hurting your credibility? We'll refresh your look and modernize the experience.",
  },
  {
    icon: Globe,
    title: "Custom Design",
    desc: "Custom sites are built from scratch to match your brand. No cookie-cutter templates — just a site that feels like you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Your site looks and works perfectly on every device — phones, tablets, and desktops — right out of the box.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Infrastructure",
    desc: "We handle hosting, domains, SSL, and deployments. You'll never need to touch a server or deal with technical setup.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              What we do
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Modern websites built for business growth
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              From design to deployment, we help small businesses get
              online — so you can stay focused on what you do best.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group relative h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:bg-card/80 hover:-translate-y-1">
                {/* Hover glow */}
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
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
