"use client";

import { useState, useCallback, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";

interface Review {
  name: string;
  business: string;
  rating: number;
  text: string;
  image: string;
  url?: string;
  metrics?: string[];
}

function hostFromUrl(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function WebsiteImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex min-h-48 h-full w-full items-center justify-center bg-muted/30">
        <div className="text-center px-6">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
            <svg
              className="h-6 w-6 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.97.633-3.794 1.708-5.282"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Website Preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-end overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function TestimonialSlider({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));
  }, [reviews.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1));
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const review = reviews[current];

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-white/[0.03] shadow-2xl shadow-brand/5">
        <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

        <div className="grid md:grid-cols-[3fr_2fr] items-center">
          {/* Website in a browser frame */}
          <div className="relative border-b border-brand/10 bg-white/[0.02] p-4 md:border-b-0 md:border-r md:p-6">
            {(() => {
              const host = hostFromUrl(review.url);
              const frame = (
                <div className="overflow-hidden rounded-lg border border-border/40 bg-background/40 transition-all duration-300 group-hover/frame:border-brand/40">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2.5 border-b border-border/40 bg-white/[0.03] px-3 py-2">
                    <span className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
                      <span className="h-2 w-2 rounded-full bg-muted-foreground/25" />
                    </span>
                    {host && (
                      <span className="flex items-center gap-1.5 rounded bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                        <Lock className="h-2.5 w-2.5 text-emerald-400" />
                        {host}
                      </span>
                    )}
                    {review.url && (
                      <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground/50" />
                    )}
                  </div>
                  <WebsiteImage
                    src={review.image}
                    alt={`Website built for ${review.business}`}
                  />
                </div>
              );
              return review.url ? (
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/frame block"
                >
                  {frame}
                </a>
              ) : (
                frame
              );
            })()}
          </div>

          {/* Testimonial content */}
          <div className="flex flex-col justify-center p-6 md:p-8">
            <Quote className="mb-4 h-8 w-8 text-brand/20" />

            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brand text-brand"
                />
              ))}
            </div>

            <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              &ldquo;{review.text}&rdquo;
            </p>

            {review.metrics && review.metrics.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {review.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-brand/15 px-2.5 py-1 text-xs font-medium text-brand ring-1 ring-brand/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}

            <div className="mb-6">
              <p className="text-base font-semibold">{review.name}</p>
              <p className="text-sm text-muted-foreground">
                {review.business}
              </p>
            </div>

            {reviews.length > 1 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 transition-all hover:border-brand/40 hover:bg-brand/10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 transition-all hover:border-brand/40 hover:bg-brand/10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="flex gap-2 ml-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-8 bg-brand"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <span className="ml-auto text-sm text-muted-foreground">
                  {current + 1} / {reviews.length}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
