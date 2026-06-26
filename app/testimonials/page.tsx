import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TestimonialSlider } from "@/components/testimonial-slider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what small business owners in Overland Park and Kansas City are saying about BuiltForSmallBiz. Real reviews from real clients.",
};

const reviews = [
  {
    name: "Christina R",
    business: "Interior Designer",
    rating: 5,
    text: "I used Eli to help me update my website which was quite dated before, he did a wonderful job! He listened to all of my needs and made sure I was happy before completing the job! I would recommend and will be using him again in the future! Very good value for the service he gave as well :)",
    image: "/reviews/christina-r.jpg",
    url: "https://yourstrulyinteriordesign.com",
  },
];

const stats = [
  { value: "50+", label: "Small businesses helped" },
  { value: "5.0", label: "Average rating" },
  { value: "100%", label: "Satisfaction rate" },
  { value: "1–2 weeks", label: "Average turnaround" },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Testimonials
            </p>
            <h1 className="text-4xl font-bold md:text-5xl">
              What our <span className="text-gradient">clients say</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Real feedback from small business owners we&rsquo;ve worked with
              in Overland Park and Kansas City.
            </p>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 text-center"
                >
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-brand/20 blur-xl" />
                  <div className="relative">
                    <div className="text-3xl font-black text-gradient md:text-4xl">
                      {value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

          <TestimonialSlider reviews={reviews} />
        </section>

        <section className="relative py-24">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold">
              Ready to join them?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Get a professional website for your small business. Send us a
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
      </main>
      <Footer />
    </>
  );
}
