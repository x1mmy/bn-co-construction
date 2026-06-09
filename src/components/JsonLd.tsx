import { siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: { "@id": organizationId },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": organizationId,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: `+61-${siteConfig.phone.replace(/^0/, "")}`,
      email: siteConfig.email,
      image: `${siteConfig.url}/bnc1.webp`,
      logo: `${siteConfig.url}/favicon.svg`,
      taxID: siteConfig.abnDigits,
      foundingDate: String(siteConfig.foundingYear),
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      areaServed: {
        "@type": "City",
        name: "Sydney",
      },
      sameAs: [siteConfig.instagram],
      priceRange: "$$",
      knowsAbout: [
        "New home construction",
        "Home renovations",
        "Home extensions",
        "Kitchen renovations",
        "Bathroom renovations",
        "Custom carpentry",
        "Granny flats",
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(structuredData)}
    </script>
  );
}
