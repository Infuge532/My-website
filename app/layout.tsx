import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap", // prevents invisible text flash during font load
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearsite.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ClearSite — Affordable Website Design for Small Businesses",
    template: "%s | ClearSite",
  },
  description:
    "Professional, affordable websites for small businesses. No servers to manage, no hidden fees, and no technical headaches. Get a beautiful website live in 2–4 weeks.",
  keywords: [
    "small business website design",
    "affordable web design",
    "website design for small business",
    "professional website",
    "web development",
    "no server hosting",
    "small business web developer",
  ],
  authors: [{ name: "ClearSite" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ClearSite",
    title: "ClearSite — Affordable Website Design for Small Businesses",
    description:
      "Professional, affordable websites for small businesses. No servers to manage, no hidden fees. Live in 2–4 weeks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearSite — Affordable Website Design for Small Businesses",
    description:
      "Professional, affordable websites for small businesses. No servers to manage, no hidden fees. Live in 2–4 weeks.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
