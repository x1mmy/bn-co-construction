"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeaturedProject as FeaturedProjectType } from "@/lib/portfolio";

type FeaturedProjectProps = {
  project: FeaturedProjectType;
  galleryCols?: "roseville" | "kincumber" | "baulkham-hills";
};

export default function FeaturedProject({
  project,
  galleryCols = "roseville",
}: FeaturedProjectProps) {
  const gridClass =
    galleryCols === "kincumber"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
      : galleryCols === "baulkham-hills"
      ? "grid grid-cols-2 sm:grid-cols-3 gap-px"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px";

  return (
    <section
      className="py-16 md:py-24 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <h2
            className="mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h2>
          <div className="space-y-6">
            {project.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className={gridClass} style={{ backgroundColor: "var(--border)" }}>
          {project.gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
              className="relative aspect-square overflow-hidden"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <Image
                src={src}
                alt={`${project.title} — photo ${i + 1}`}
                fill
                sizes={
                  galleryCols === "kincumber"
                    ? "(max-width: 640px) 100vw, 25vw"
                    : galleryCols === "baulkham-hills"
                    ? "(max-width: 640px) 50vw, 33vw"
                    : "(max-width: 640px) 50vw, 16vw"
                }
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
