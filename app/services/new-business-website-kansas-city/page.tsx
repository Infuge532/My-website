import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "New Business Website in Kansas City",
  description:
    "Need a website for your new small business? Professional, affordable website design for small businesses in Kansas City and Overland Park, KS. One-time pricing, live in 1–2 weeks.",
  keywords: [
    "new business website Kansas City",
    "small business website Overland Park KS",
    "cheap website design Kansas City",
    "small business web design Kansas City",
  ],
};

const steps = [
  {
    num: "01",
    title: "Tell us about your business",
    desc: "Fill out our quick form or send us an email. We'll learn about your business, your goals, and what you need from your website.",
  },
  {
    num: "02",
    title: "We design and build your site",
    desc: "We create a custom design based on your brand and build it from scratch — no templates. You'll see a preview before anything goes live.",
  },
  {
    num: "03",
    title: "Review, launch, and own it",
    desc: "Once you're happy, we launch your site. You own your domain, your content, and your code. No lock-in, no monthly fees.",
  },
];

const features = [
  "Custom design tailored to your brand and industry",
  "Mobile-responsive — looks perfect on phones, tablets, and desktops",
  "Contact form so customers can reach you directly",
  "Basic on-page SEO to help Google find your business",
  "SSL certificate for security and trust",
  "1 year of hosting included at no extra cost",
];

export default function NewBusinessWebsiteKansasCity() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            New Business Website
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Professional Websites for Small Businesses in{" "}
            <span className="text-gradient">Kansas City</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Starting a business in Kansas City or Overland Park? You need a
            website that makes a strong first impression — without breaking your
            budget. We build affordable, professional websites for new small
            businesses, live in 1–2 weeks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-brand/30">
              <a href="/#contact">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/#pricing">See Pricing</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Getting your business online shouldn&rsquo;t be complicated. Our
              process is simple and transparent from start to finish.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-xl border border-border/50 bg-card p-6"
              >
                <div className="mb-4 text-3xl font-black text-gradient">
                  {step.num}
                </div>
                <h3 className="mb-2 font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">
                What&rsquo;s included with every new website
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every site we build for Kansas City and Overland Park businesses
                comes with everything you need to make a great impression
                online — no hidden fees, no surprise charges.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/20 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Let&rsquo;s build your website
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            New websites start at $599 — one-time, no monthly fees. Tell us
            about your business and we&rsquo;ll have a free quote ready within
            one business day.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="shadow-lg shadow-brand/30">
              <a href="/#contact">
                Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
