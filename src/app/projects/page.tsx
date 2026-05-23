import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FeaturedProject from "@/components/FeaturedProject";
import AdditionalProjects from "@/components/AdditionalProjects";
import {
  kincumberResidence,
  rosevilleResidence,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured new builds and renovations including The Roseville Residence and The Kincumber Residence, plus additional carpentry and remodelling work across Sydney.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="py-16 md:py-20">
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
              Our Work
            </p>
            <h1
              className="mb-5 leading-tight max-w-2xl uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Builds across Sydney
            </h1>
            <p
              className="max-w-xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              Featured new builds, granny flats, and renovations — structural work,
              fit-out, and handover by one licensed crew from start to finish.
            </p>
          </div>
        </section>

        <FeaturedProject project={rosevilleResidence} galleryCols="roseville" />
        <FeaturedProject project={kincumberResidence} galleryCols="kincumber" />
        <AdditionalProjects />

        <section
          className="py-16 md:py-20 border-t"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--bg-surface)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] font-medium transition-all active:scale-[0.98] hover:bg-[var(--gold-light)]"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Request a Free Quote
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] transition-all active:scale-[0.98] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              style={{
                border: "0.5px solid var(--border)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              View Our Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
