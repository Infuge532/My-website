import type { Metadata } from "next";
import {
  Globe,
  ShieldCheck,
  Smartphone,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design services for small businesses in Overland Park & Kansas City. Site redesigns, custom builds, mobile-first design, and zero infrastructure hassle.",
};

const services = [
  {
    icon: Paintbrush,
    title: "Site Redesign",
    desc: "Got an outdated site that's hurting your credibility? We'll refresh your look and modernize the experience.",
    details:
      "We take your existing content and rebuild it with a clean, modern design that matches your brand. Mobile-friendly, fast-loading, and optimized for search engines.",
    href: "/services/website-redesign-overland-park",
  },
  {
    icon: Globe,
    title: "Custom Design",
    desc: "Custom sites are built from scratch to match your brand. No cookie-cutter templates — just a site that feels like you.",
    details:
      "From layout to color palette, every element is crafted to represent your business. We work with you through the entire design process to make sure it's exactly right.",
    href: "/services/new-business-website-kansas-city",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Your site looks and works perfectly on every device — phones, tablets, and desktops — right out of the box.",
    details:
      "Over 60% of web traffic comes from mobile devices. We design for phones first, then scale up — so your site looks great no matter how your customers find you.",
    href: null,
  },
  {
    icon: ShieldCheck,
    title: "Zero Infrastructure",
    desc: "We handle hosting, domains, SSL, and deployments. You'll never need to touch a server or deal with technical setup.",
    details:
      "No servers to manage, no software to update, no security patches to worry about. We take care of all the technical details so you can focus on running your business.",
    href: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            What we do
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Modern websites built for{" "}
            <span className="text-gradient">business growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From design to deployment, we help small businesses get online — so
            you can stay focused on what you do best.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-12">
            {services.map(({ icon: Icon, title, desc, details, href }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-brand/40"
              >
                <div className="absolute inset-0 rounded-2xl bg-brand/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-xl font-bold">{title}</h2>
                    <p className="mb-2 text-muted-foreground">{desc}</p>
                    <p className="text-sm text-muted-foreground/80">
                      {details}
                    </p>
                  </div>
                  {href && (
                    <Button asChild variant="outline" size="sm">
                      <a href={href}>
                        Learn more <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No problem — tell us about your business and we&rsquo;ll recommend
            the right approach. No commitment, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-brand/30">
              <a href="/contact">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/pricing">See Pricing</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
