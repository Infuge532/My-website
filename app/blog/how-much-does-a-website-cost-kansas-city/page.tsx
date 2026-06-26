import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost for a Small Business in Kansas City?",
  description:
    "A transparent breakdown of website costs for small businesses in Kansas City and Overland Park, KS. Learn what you should expect to pay and what to watch out for.",
  keywords: [
    "website cost small business Kansas City",
    "how much does a website cost",
    "small business website price Overland Park",
    "affordable website Kansas City",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Website Cost for a Small Business in Kansas City?",
  description:
    "A transparent breakdown of website costs for small businesses in Kansas City and Overland Park, KS.",
  datePublished: "2025-06-24",
  author: {
    "@type": "LocalBusiness",
    name: "BuiltForSmallBiz",
    areaServed: [
      { "@type": "City", name: "Kansas City, MO" },
      { "@type": "City", name: "Kansas City, KS" },
      { "@type": "City", name: "Overland Park, KS" },
      { "@type": "City", name: "Olathe, KS" },
      { "@type": "City", name: "Lenexa, KS" },
      { "@type": "City", name: "Shawnee, KS" },
      { "@type": "City", name: "Leawood, KS" },
      { "@type": "City", name: "Prairie Village, KS" },
      { "@type": "City", name: "Merriam, KS" },
      { "@type": "City", name: "Mission, KS" },
      { "@type": "City", name: "Gardner, KS" },
      { "@type": "City", name: "Spring Hill, KS" },
      { "@type": "City", name: "De Soto, KS" },
      { "@type": "City", name: "Bonner Springs, KS" },
      { "@type": "City", name: "Independence, MO" },
      { "@type": "City", name: "Lee's Summit, MO" },
      { "@type": "City", name: "Blue Springs, MO" },
      { "@type": "City", name: "Liberty, MO" },
      { "@type": "City", name: "Gladstone, MO" },
      { "@type": "City", name: "Raytown, MO" },
      { "@type": "City", name: "Grandview, MO" },
      { "@type": "City", name: "Belton, MO" },
      { "@type": "City", name: "Raymore, MO" },
      { "@type": "City", name: "North Kansas City, MO" },
      { "@type": "City", name: "Parkville, MO" },
    ],
  },
};

export default function WebsiteCostKansasCity() {
  return (
    <article className="relative py-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-2xl px-6">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
            Blog
          </p>
          <h1 className="text-3xl font-bold md:text-4xl leading-tight">
            How Much Does a Website Cost for a Small Business?
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            June 24, 2025 &middot; 5 min read
          </p>
        </header>

        <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
          <p>
            If you&rsquo;re a small business owner, one of the first
            questions you&rsquo;ll ask when thinking
            about a website is: <strong className="text-foreground">how much is this going to cost me?</strong>
          </p>
          <p>
            The honest answer is that it depends — but not in the vague,
            dodge-the-question way most agencies mean it. Here&rsquo;s a real
            breakdown of what small businesses are actually
            paying for websites in 2025, and what you should watch out for.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            The typical price ranges
          </h2>
          <p>
            For a small business website, you&rsquo;ll generally
            see three tiers:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold text-foreground">
                DIY builders (Wix, Squarespace): $0–$300/year
              </h3>
              <p className="mt-2 text-sm">
                Cheap upfront, but you&rsquo;re doing all the work yourself.
                The designs tend to look generic, you&rsquo;re limited by
                templates, and you don&rsquo;t truly own your site — the
                platform does. If you stop paying, your site disappears.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Freelancers and small studios: $500–$3,000
              </h3>
              <p className="mt-2 text-sm">
                This is where most small businesses land. You get a custom
                design, someone who actually listens to your needs, and a site
                that&rsquo;s built to represent your brand. The range depends on
                the number of pages and complexity.
              </p>
            </div>
            <div className="rounded-xl border border-border/50 bg-card p-5">
              <h3 className="font-semibold text-foreground">
                Agencies: $5,000–$25,000+
              </h3>
              <p className="mt-2 text-sm">
                Big agencies charge premium rates. You&rsquo;re
                paying for account managers, project managers, and a team of
                specialists. Great for large companies, but way more than most
                small businesses need.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            What actually drives the cost?
          </h2>
          <p>
            A few factors determine where your project falls in those ranges:
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">Number of pages.</strong>{" "}
                A simple 1–5 page site costs less than a 15-page site with
                multiple service pages, a blog, and a portfolio.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">Custom features.</strong>{" "}
                Booking systems, e-commerce, client portals — anything beyond
                a standard informational site adds cost.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">Content creation.</strong>{" "}
                If you need someone to write your copy or take professional
                photos, that&rsquo;s extra. If you have your content ready,
                you save money.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">Ongoing costs.</strong>{" "}
                Some providers charge monthly fees for hosting, maintenance,
                or &ldquo;website rental.&rdquo; Others charge a one-time fee
                and hand you the keys. Make sure you know which model
                you&rsquo;re signing up for.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            The hidden costs to watch out for
          </h2>
          <p>
            This is where a lot of small business owners get burned.
            A website that costs &ldquo;$99/month&rdquo; sounds cheap — until
            you realize you&rsquo;re paying $1,200 a year and don&rsquo;t own
            anything. After three years, you&rsquo;ve spent $3,600 and if you
            cancel, your site is gone.
          </p>
          <p>Watch out for:</p>
          <ul className="space-y-2 list-none">
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>Monthly &ldquo;website rental&rdquo; fees that never end</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>Contracts that lock you in for 12–24 months</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>Providers who own your domain name (not you)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>Extra charges every time you need a small text update</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            What we charge at BuiltForSmallBiz
          </h2>
          <p>
            We built our pricing specifically for small businesses.
            Here&rsquo;s the simple version:
          </p>
          <ul className="space-y-2 list-none">
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">Complete redesign:</strong>{" "}
                $500 one-time
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-brand font-bold shrink-0">&bull;</span>
              <span>
                <strong className="text-foreground">New website:</strong>{" "}
                $599 one-time
              </span>
            </li>
          </ul>
          <p>
            No monthly fees. No contracts. You own your domain, your content,
            and your code. First year of hosting is included. Most projects are
            live within 1–2 weeks.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Bottom line
          </h2>
          <p>
            You don&rsquo;t need to spend thousands to get a professional
            website for your small business. What matters is that
            you work with someone transparent about pricing, who builds
            something you actually own, and who doesn&rsquo;t disappear after
            launch.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-brand/30 bg-card p-8 text-center">
          <h2 className="text-2xl font-bold">
            Want a free quote for your business?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Tell us about your project and we&rsquo;ll reply within one
            business day — no pressure, no obligation.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="shadow-lg shadow-brand/30">
              <a href="/contact">
                Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
