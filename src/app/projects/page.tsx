import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | BN & Co Construction",
  description:
    "Browse residential new builds, renovations, extensions, and custom carpentry completed by BN & Co Construction across Sydney.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              Portfolio
            </p>
            <h1
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              All Projects
            </h1>
            <p
              className="mb-14 max-w-xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              New builds, renovations, and bespoke carpentry across Sydney — each
              finished to the same standard we bring to every home.
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
              style={{ backgroundColor: "var(--border)" }}
            >
              {allProjects.map((project, i) => (
                <ProjectCard
                  key={`${project.name}-${project.img}`}
                  project={{ ...project, size: "standard" }}
                  index={i}
                  variant="grid"
                />
              ))}
            </div>

            <div className="mt-14 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#quote"
                className="w-full sm:w-auto px-8 py-4 text-center text-xs uppercase tracking-widest font-medium transition-all duration-200 active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--bg-primary)",
                  fontFamily: "var(--font-dm-sans)",
                  letterSpacing: "0.12em",
                }}
              >
                Request a Free Quote
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 text-center text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
                style={{
                  border: "0.5px solid var(--border)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                  letterSpacing: "0.12em",
                }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
