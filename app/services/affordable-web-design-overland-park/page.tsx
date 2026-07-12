import type { Metadata } from "next";
import { Check, ArrowRight, DollarSign, Key, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Affordable Web Design for Small Businesses",
  description:
    "Affordable website design for small businesses. No monthly fees, no hidden costs — just a professional website starting at $499. You own everything.",
  keywords: [
    "affordable web design",
    "cheap website design small business",
    "budget web design",
    "low cost website small business",
  ],
};

const reasons = [
  {
    icon: DollarSign,
    title: "No monthly fees",
    desc: "Pay once and own your website forever. No retainers, no recurring charges, no surprise bills. What you see is what you pay.",
  },
  {
    icon: Zap,
    title: "1–2 week turnaround",
    desc: "Most competitors take 4–8 weeks. We move fast and keep you in the loop at every step, so your site is live and working for you sooner.",
  },
  {
    icon: Key,
    title: "You own your site",
    desc: "Your domain, your code, your content. We hand you the keys when we're done. No lock-in contracts, no vendor dependency.",
  },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our websites start at $499 for a complete redesign and $599 for a brand new site. That's a one-time cost — no monthly fees. Most agencies charge $3,000–$10,000 for the same quality of work.",
  },
  {
    q: "Do I have to pay monthly for hosting?",
    a: "No. Your first year of hosting is included in the price. After that, hosting costs are minimal and we'll help you find the best option — or we can continue hosting for a small annual fee.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most projects are live within 1–2 weeks. Larger sites with more pages or custom features may take a bit longer, but we'll give you a clear timeline before we start.",
  },
  {
    q: "Can I update my website myself after it's built?",
    a: "Yes. We build sites that are easy to maintain, and we'll walk you through how to make basic updates. If you'd rather have us handle changes, we're always a message away.",
  },
];

export default function AffordableWebDesignOverlandPark() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Affordable Web Design
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Affordable Web Design for{" "}
            <span className="text-gradient">Small Businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            You shouldn&rsquo;t have to spend thousands to get a professional
            website. We build clean, modern websites for small businesses —
            starting at $499 with no monthly fees.
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

      <section className="relative py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold">
              Why small businesses choose us
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We built our entire process for small businesses that need
              real results without the agency price tag.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:bg-card/80"
              >
                <div className="absolute inset-0 rounded-xl bg-brand/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
          <h2 className="text-3xl font-bold">
            Get a professional website without the big price tag
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Websites start at $499 — one-time, no hidden fees. Send us a
            message and we&rsquo;ll reply with a free quote within one business
            day.
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
    </>
  );
}
