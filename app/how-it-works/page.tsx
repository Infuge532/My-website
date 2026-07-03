import type { Metadata } from "next";
import { ArrowRight, MessageSquare, Paintbrush, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProcessShowcase } from "@/components/process-demo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Our simple 3-step process for building your small business website. Tell us about your business, we design & build together, then we launch.",
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us about your business",
    desc: "Fill out our short project brief. Tell us who you are, what you do, and what you need. No tech jargon required — we speak plain English.",
    details: [
      "Share your business name, industry, and goals",
      "Tell us about your target audience",
      "Send us any inspiration or examples you like",
      "We'll reply within one business day with a plan",
    ],
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "We design & build together",
    desc: "Our rapid prototyping process means you see progress from day one. Review, give feedback, and watch changes happen live — so the final product is exactly what you envisioned.",
    details: [
      "You'll see a first draft within days, not weeks",
      "Give feedback and see changes in real time",
      "We handle all the technical details",
      "Unlimited revisions until you're happy",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "We launch, you grow",
    desc: "We handle deployment, DNS, SEO basics, and the full handoff. Your site goes live and your customers can finally find you.",
    details: [
      "We set up hosting, SSL, and your domain",
      "Basic SEO so Google can find you",
      "We walk you through how to make updates",
      "You own everything — no lock-in",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              The process
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">
              Simple from <span className="text-gradient">start to finish</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We&rsquo;ve streamlined every step so you always know where things
              stand — and you&rsquo;re never left guessing.
            </p>
          </div>

          {/* Wireframe-to-launch build animation */}
          <div className="relative mx-auto mt-16 max-w-3xl px-6">
            <Reveal variant="zoom">
              <ProcessShowcase />
            </Reveal>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-16">
              {steps.map(({ number, icon: Icon, title, desc, details }) => (
                <div key={number} className="relative">
                  <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                    <div className="text-8xl font-black leading-none select-none text-gradient opacity-60">
                      {number}
                    </div>
                    <div>
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                        <Icon className="h-5 w-5 text-brand" />
                      </div>
                      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
                      <p className="mb-6 text-muted-foreground">{desc}</p>
                      <ul className="space-y-3">
                        {details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              The first step is easy — just tell us about your business. We'll
              handle the rest.
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
