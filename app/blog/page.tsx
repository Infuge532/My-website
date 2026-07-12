import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and advice on website design for small businesses.",
};

const posts = [
  {
    slug: "how-much-does-a-website-cost-kansas-city",
    title: "How Much Does a Website Cost for a Small Business?",
    excerpt:
      "A transparent breakdown of what small businesses should expect to pay for a professional website in 2025.",
    date: "June 24, 2025",
  },
  {
    slug: "does-my-small-business-need-a-website-overland-park",
    title:
      "Does My Small Business Really Need a Website?",
    excerpt:
      "If you're a small business owner wondering whether a website is worth the investment, here's the honest answer.",
    date: "June 24, 2025",
  },
];

export default function BlogIndex() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Blog
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Tips & Guides for Small Business Owners
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Practical advice on websites, SEO, and getting your small
            business found online.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-brand/40 hover:bg-card/80"
            >
              <div className="relative">
                <p className="mb-2 text-xs text-muted-foreground">
                  {post.date}
                </p>
                <h2 className="text-xl font-bold group-hover:text-brand transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand">
                  Read more{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
