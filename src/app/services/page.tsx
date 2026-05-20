import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesCatalog from "@/components/ServicesCatalog";
import OurApproach from "@/components/OurApproach";

export const metadata: Metadata = {
  title: "Services | BN & Co Construction",
  description:
    "Licensed Sydney builder offering new builds, renovations, extensions, kitchen and bathroom remodelling, custom carpentry, outdoor work, and maintenance. Free quote within 48 hours.",
};

export default function ServicesPage() {
  return (
    <>
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
