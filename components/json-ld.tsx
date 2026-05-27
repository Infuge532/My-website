const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://builtforsmallbiz.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "BuiltForSmallBiz",
      description:
        "Affordable, professional website design and development for small businesses.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "BuiltForSmallBiz",
      url: siteUrl,
      email: "eli@builtforsmallbiz.com",
      description:
        "We build affordable, professional websites for small businesses. No servers to manage, no hidden fees, live in 2–4 weeks.",
      priceRange: "$$",
      serviceType: "Web Design and Development",
      areaServed: [
        {
          "@type": "City",
          name: "Overland Park",
          containedInPlace: { "@type": "State", name: "Kansas" },
        },
        {
          "@type": "City",
          name: "Kansas City",
          containedInPlace: { "@type": "State", name: "Missouri" },
        },
        {
          "@type": "City",
          name: "Kansas City",
          containedInPlace: { "@type": "State", name: "Kansas" },
        },
        {
          "@type": "City",
          name: "Olathe",
          containedInPlace: { "@type": "State", name: "Kansas" },
        },
        {
          "@type": "City",
          name: "Leawood",
          containedInPlace: { "@type": "State", name: "Kansas" },
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Complete Redesign",
            description:
              "Full visual redesign up to 5 pages, mobile-responsive update, contact form, basic on-page SEO, and SSL certificate.",
            price: "499",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "New Website",
            description:
              "Up to 10 pages with mobile-responsive design, contact form, basic on-page SEO, 1 year of hosting, and SSL certificate.",
            price: "899",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Premium Website",
            description:
              "Up to 15 pages with blog, booking or scheduling, gallery, newsletter integration, advanced SEO, Google Analytics, 1 year of hosting, and SSL certificate.",
            price: "1399",
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
