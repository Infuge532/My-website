const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearsite.dev";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ClearSite",
      description:
        "Affordable, professional website design and development for small businesses.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "ClearSite",
      url: siteUrl,
      email: "hello@clearsite.dev",
      description:
        "We build affordable, professional websites for small businesses. No servers to manage, no hidden fees, live in 2–4 weeks.",
      priceRange: "$$",
      serviceType: "Web Design and Development",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Starter Website",
            description:
              "Single-page website with contact form, mobile-responsive design, basic SEO, and 1 year of hosting.",
            price: "599",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Business Website",
            description:
              "Up to 5 pages with Google Analytics, blog-ready setup, 1 year of priority support and hosting.",
            price: "1299",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Growth Website",
            description:
              "Up to 15 pages with booking or e-commerce integration, priority support, and monthly maintenance.",
            price: "2499",
            priceCurrency: "USD",
          },
        ],
      },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
