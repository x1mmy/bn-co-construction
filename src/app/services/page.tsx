import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesPageGrid from "@/components/ServicesPageGrid";

export const metadata: Metadata = {
  title: "Services | BN & Co Construction",
  description:
    "New builds, home renovations, extensions, kitchen and bathroom remodelling, custom carpentry, and outdoor work across Sydney. Licensed builder, free quote within 48 hours.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section
          className="py-16 md:py-20 border-b"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              What We Build
            </p>
            <h1
              className="mb-5 leading-tight max-w-2xl"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Construction services across Sydney
            </h1>
            <p
              className="max-w-xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              From new builds to bespoke carpentry, every service is delivered
              with the same hands-on care and licensed standards.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
            <ServicesPageGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
