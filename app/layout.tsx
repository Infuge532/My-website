import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://builtforsmallbiz.com";

export const metadata: Metadata = {
  title: "BuiltForSmallBiz — Affordable Website Design for Small Businesses",
  description: "Affordable, professional websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, no monthly fees — you own everything.",
  keywords: [
    "web design Overland Park KS",
    "web design Overland Park Kansas",
    "small business website design Overland Park",
    "affordable web design",
    "website design for small business",
    "small business web developer",
    "professional website",
    "web development",
  ],
  authors: [{ name: "BuiltForSmallBiz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BuiltForSmallBiz",
    title: "BuiltForSmallBiz — Affordable Website Design for Small Businesses",
    description: "Affordable, professional websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, no monthly fees — you own everything.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuiltForSmallBiz — Affordable Website Design for Small Businesses",
    description: "Affordable, professional websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, no monthly fees — you own everything.",
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
