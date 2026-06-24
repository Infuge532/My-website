"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Jane Smith",
    business: "Smith's Bakery",
    rating: 5,
    text: "Eli built us an amazing website that perfectly captures our bakery's vibe. We've seen a huge increase in online orders since launching!",
    image: "/reviews/smiths-bakery.png",
  },
  {
    name: "Marcus Johnson",
    business: "Johnson Landscaping",
    rating: 5,
    text: "Professional, fast, and easy to work with. Our new site looks incredible and we're getting way more calls from it.",
    image: "/reviews/johnson-landscaping.png",
  },
  {
    name: "Sarah Chen",
    business: "Bloom Flower Studio",
    rating: 5,
    text: "I had no idea what I wanted and Eli walked me through the whole process. The site turned out better than I could have imagined.",
    image: "/reviews/bloom-flower-studio.png",
  },
];

function ReviewImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Reviews
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Real feedback from small business owners we&rsquo;ve worked with.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-brand/40"
            >
              {review.image && (
                <ReviewImage
                  src={review.image}
                  alt={`Website built for ${review.business}`}
                />
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand text-brand"
                    />
                  ))}
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
    </section>
  );
}
