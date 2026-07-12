import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
    default: "Affordable Web Design for Small Businesses | BuiltForSmallBiz",
    template: "%s | BuiltForSmallBiz",
  },
  description:
    "Professional, affordable websites for small businesses. One-time pricing, 1–2 week turnaround, you own everything.",
  keywords: [
    "affordable web design",
    "small business website",
    "cheap website design",
    "web design for small business",
    "website redesign",
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
    title: "Affordable Web Design for Small Businesses | BuiltForSmallBiz",
    description:
      "Professional, affordable websites for small businesses. One-time pricing, 1–2 week turnaround, you own everything.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Web Design for Small Businesses | BuiltForSmallBiz",
    description:
      "Professional, affordable websites for small businesses. One-time pricing, 1–2 week turnaround, you own everything.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7BYW3G7VD1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7BYW3G7VD1');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BuiltForSmallBiz",
              url: siteUrl,
              description:
                "Professional, affordable websites for small businesses. No servers to manage, no hidden fees.",
              serviceType: "Web Design",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
