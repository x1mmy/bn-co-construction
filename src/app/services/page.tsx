import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesCatalog from "@/components/ServicesCatalog";
import OurApproach from "@/components/OurApproach";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Building Services",
  description:
    "Licensed Sydney builder offering new builds, renovations, extensions, kitchen and bathroom remodelling, custom carpentry, outdoor work, and maintenance. Free quote within 48 hours.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <Nav />
      <main className="pt-16">
        <ServicesHero />
        <ServicesCatalog />
        <OurApproach />
      </main>
      <Footer />
    </>
  );
}
