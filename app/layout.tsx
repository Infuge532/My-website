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
    default: "Affordable Web Design for Small Businesses in Overland Park, KS | BuiltForSmallBiz",
    template: "%s | BuiltForSmallBiz",
  },
  description:
    "Professional, affordable websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, you own everything.",
  keywords: [
    "affordable web design Overland Park",
    "small business website Overland Park KS",
    "cheap website design Kansas City",
    "web design for small business KC",
    "website redesign Kansas City",
    "small business web developer",
    "professional website",
    "no server hosting",
  ],
  authors: [{ name: "BuiltForSmallBiz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BuiltForSmallBiz",
    title: "Affordable Web Design for Small Businesses in Overland Park, KS | BuiltForSmallBiz",
    description:
      "Professional, affordable websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, you own everything.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Web Design for Small Businesses in Overland Park, KS | BuiltForSmallBiz",
    description:
      "Professional, affordable websites for small businesses in Overland Park & Kansas City. One-time pricing, 1–2 week turnaround, you own everything.",
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
