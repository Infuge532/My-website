import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Reviews } from "@/components/reviews";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Reviews />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
