"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  additionalProjects,
  additionalProjectsIntro,
} from "@/lib/portfolio";

export default function AdditionalProjects() {
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
            {additionalProjectsIntro.title}
          </h2>
          <div className="space-y-6">
            {additionalProjectsIntro.paragraphs.map((paragraph) => (
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

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {additionalProjects.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.35) }}
              className="group relative aspect-square overflow-hidden"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.label && (
                <div
                  className="project-label-scrim absolute inset-x-0 bottom-0 px-3 pb-3 pt-10 sm:px-4 sm:pb-4 sm:pt-12"
                  aria-hidden
                >
                  <p
                    className="project-label-text text-[11px] sm:text-xs uppercase tracking-[0.12em] font-medium leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
