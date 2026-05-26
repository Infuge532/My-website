import { DollarSign, Key, Zap } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "No surprises. You'll know the full cost before we write a single line of code. No monthly retainers, no hidden fees.",
  },
  {
    icon: Key,
    title: "You Own Everything",
    desc: "Your domain, your content, your site. We hand you the keys at the end of every project — no lock-in, ever.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most projects go live within 1–2 weeks. We move quickly and keep you in the loop every step of the way.",
  },
];

const stats = [
  { value: "50+", label: "Small businesses helped" },
  { value: "1-2 weeks", label: "Average turnaround" },
  { value: "$0", label: "Infrastructure cost to you" },
  { value: "100%", label: "Satisfaction guaranteed" },
];

export function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/6 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: text + features */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Why choose us
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Web development built{" "}
              <span className="text-gradient">for small businesses</span>
            </h2>
            <p className="mb-10 text-muted-foreground">
              Most agencies are built for enterprise clients. We designed our
              entire process specifically for small businesses that need real
              results without an enterprise price tag.
            </p>

            <div className="space-y-7">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                    <Icon className="h-5 w-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 text-center"
              >
                {/* subtle corner glow */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-brand/20 blur-xl" />
                <div className="relative">
                  <div className="text-4xl font-black text-gradient">{value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
