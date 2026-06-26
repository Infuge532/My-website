import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest pricing for small business websites in Overland Park & Kansas City. One-time payment, no monthly fees — you own everything.",
};

const plans = [
  {
    name: "Complete Redesign",
    price: "$499",
    originalPrice: "$649",
    savings: "Save $150",
    desc: "Give your existing website a fresh, modern look.",
    features: [
      "Full visual redesign",
      "Up to 5 pages",
      "Mobile-responsive update",
      "Contact form",
      "Basic on-page SEO",
      "SSL certificate",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "New Website",
    price: "$899",
    originalPrice: "$1,249",
    savings: "Save $350",
    desc: "A clean static online presence for businesses just getting started.",
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
  {
    name: "Premium Website",
    price: "$1,399",
    originalPrice: "$1,749",
    savings: "Save $350",
    desc: "A powerful, feature-rich website built to grow with your business.",
    features: [
      "Up to 15 pages",
      "Blog / news section",
      "Booking or appointment scheduling",
      "Photo or video gallery",
      "Newsletter signup integration",
      "Advanced on-page SEO",
      "Google Analytics integration",
      "1 year of hosting included",
      "SSL certificate",
    ],
    cta: "Get started",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Are there any monthly fees?",
    a: "No. You pay once and own your website forever. The only recurring cost is your domain name (~$12/year) and hosting after the first year, which we can help you set up affordably.",
  },
  {
    q: "What's included in the price?",
    a: "Everything you need to go live: design, development, mobile responsiveness, a contact form, basic SEO, SSL, and deployment. No hidden add-ons.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. If your business grows and you need more pages or features, we can build on top of what you already have at a fair price.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — we can split the cost into two payments for any plan. Half upfront, half on delivery.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Pricing
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">
              Simple, <span className="text-gradient">honest pricing</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              No monthly retainers. No surprise bills. Pay once, own your site
              forever.
            </p>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6">
            <div className="grid gap-8 md:grid-cols-3 items-stretch">
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
                    <div className="mt-4 flex items-end gap-2">
                      <span
                        className={`text-4xl font-black ${plan.highlighted ? "text-gradient" : ""}`}
                      >
                        {plan.price}
                      </span>
                      <span className="mb-1 text-sm text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="mb-1 text-sm text-muted-foreground">
                        one-time
                      </span>
                    </div>
                    <span className="mt-1 inline-block rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-semibold text-brand ring-1 ring-brand/20">
                      {plan.savings}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.desc}
                    </p>
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
                    <a href="/contact">{plan.cta}</a>
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Need something custom?{" "}
              <a
                href="/contact"
                className="font-medium text-brand hover:underline"
              >
                Let&rsquo;s talk &rarr;
              </a>
            </p>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="rounded-xl border border-border/50 bg-card p-6"
                >
                  <h3 className="font-semibold">{q}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Send us a message and we&rsquo;ll reply with a free quote within
              one business day. No commitment required.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="shadow-lg shadow-brand/30">
                <a href="/contact">
                  Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
