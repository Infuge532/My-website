import { AnimatedShaderHero } from "@/components/ui/animated-shader-hero";

export function Hero() {
  return (
    <AnimatedShaderHero
      trustBadge={{
        icon: "✨",
        text: "Serving small businesses in Overland Park & Kansas City",
      }}
      headline={{
        line1: "Affordable Web Design",
        line2: "for Small Businesses",
      }}
      subtitle="Professional websites for small businesses in Overland Park, KS and the Kansas City area. One-time pricing, 1–2 week turnaround — you own everything."
      buttons={{
        primary: {
          text: "Get a Free Quote",
          href: "#contact",
        },
        secondary: {
          text: "See How It Works",
          href: "#how-it-works",
        },
      }}
    />
  );
}
