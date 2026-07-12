import { TestimonialSlider } from "@/components/testimonial-slider";
import { Reveal } from "@/components/reveal";

const reviews = [
  {
    name: "Christina R",
    business: "Interior Designer",
    rating: 5,
    text: "I used Eli to help me update my website which was quite dated before, he did a wonderful job! He listened to all of my needs and made sure I was happy before completing the job! I would recommend and will be using him again in the future! Very good value for the service he gave as well :)",
    image: "/reviews/christina-r.jpg",
    url: "https://yourstrulyinteriordesign.com",
    metrics: ["5★ review", "Complete redesign", "She owns everything"],
  },
  {
    name: "Erica M.",
    business: "BluHawk HOA — Board President",
    rating: 5,
    text: "Eli built our community website from the ground up and the results have been incredible. Residents actually use it now — the news section, event calendar, and document portal are all super easy to navigate. He was communicative, fast, and delivered exactly what we envisioned. Couldn't recommend him more highly.",
    image: "/reviews/Screen Shot 2026-07-11 at 1.47.55 PM.png",
    url: "https://bluhawkhoa.org",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Case studies
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Real sites, real owners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Real feedback from small business owners we&rsquo;ve worked with —
            and the sites they now own.
          </p>
        </div>
        </Reveal>
      </div>

      <Reveal variant="zoom" delay={100}>
        <TestimonialSlider reviews={reviews} />
      </Reveal>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
