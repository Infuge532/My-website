import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Website Redesign in Overland Park, KS",
  description:
    "Give your outdated website a modern redesign. Professional website redesign for small businesses in Overland Park and Kansas City. One-time pricing, fast turnaround.",
  keywords: [
    "website redesign Overland Park",
    "website redesign Kansas City",
    "small business website redesign",
    "modern website design Overland Park KS",
  ],
};

const benefits = [
  "Modern, mobile-responsive design that looks great on every device",
  "Faster page load speeds for better user experience and SEO",
  "Clean, professional layout that builds trust with visitors",
  "Basic on-page SEO so search engines can find you",
  "SSL certificate and secure hosting included",
  "You own everything — your domain, your content, your site",
];

export default function WebsiteRedesignOverlandPark() {
  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Website Redesign
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Website Redesign for Small Businesses in{" "}
            <span className="text-gradient">Overland Park, KS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your website is often the first thing customers see. If it looks
            outdated, loads slowly, or doesn&rsquo;t work on phones, you&rsquo;re
            losing business. We redesign small business websites in Overland Park
            and Kansas City to look modern, load fast, and convert visitors into
            customers.
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">
                Why redesign your website?
              </h2>
              <p className="mt-4 text-muted-foreground">
                A website that was built five years ago doesn&rsquo;t meet
                today&rsquo;s standards. Visitors in Overland Park and the
                greater Kansas City area expect fast, clean, mobile-friendly
                sites. An outdated design signals an outdated business — even
                if that&rsquo;s far from the truth.
              </p>
              <p className="mt-4 text-muted-foreground">
                We take your existing content and rebuild your site from scratch
                with a modern design, responsive layout, and proper SEO
                foundations — all for a one-time fee with no monthly retainers.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/20 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <p className="text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Ready to modernize your website?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Complete redesigns start at $500 with no monthly fees. Tell us about
            your business and we&rsquo;ll send you a free, no-pressure quote
            within one business day.
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
