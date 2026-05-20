"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Completed" },
  { value: "NSW Licensed", label: "Fully Insured" },
  { value: "48 hrs", label: "Free Quote Turnaround" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "0.5px solid var(--border)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="py-8 sm:py-10 px-4 sm:px-6 flex flex-col items-center text-center"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <span
                className="text-2xl sm:text-4xl"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 400,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="mt-2 uppercase"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
