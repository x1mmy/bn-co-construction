import { siteConfig } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: `+61-${siteConfig.phone.replace(/^0/, "")}`,
  email: siteConfig.email,
  image: `${siteConfig.url}/bnc1.webp`,
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
};

export default function JsonLd() {
  return (
    <script type="application/ld+json" suppressHydrationWarning>
      {JSON.stringify(localBusinessSchema)}
    </script>
  );
}
