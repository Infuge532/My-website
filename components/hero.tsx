import { AnimatedShaderHero } from "@/components/ui/animated-shader-hero";

export function Hero() {
  return (
    <AnimatedShaderHero
      trustBadge={{
        icon: "✨",
        text: "Websites made simple for small businesses",
      }}
      headline={{
        line1: "Launch Your Business",
        line2: "Into Orbit",
      }}
      subtitle="Affordable, professional websites for small businesses. We handle everything — no servers, no headaches, no hidden fees."
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
