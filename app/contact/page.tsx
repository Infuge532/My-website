import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BuiltForSmallBiz. Fill out our form for a free quote on your small business website. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
