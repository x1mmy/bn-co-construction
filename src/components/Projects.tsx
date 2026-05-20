"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <p
            className="uppercase mb-4"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--gold)",
            }}
          >
            Recent Work
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            Our Projects
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 300,
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Every project tells a story. Here are some of the homes we&apos;ve
            built, transformed, and brought to life.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px mb-10"
          style={{ backgroundColor: "var(--border)" }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} variant="featured" />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-3 text-center text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.97] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-dm-sans)",
              letterSpacing: "0.12em",
            }}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
