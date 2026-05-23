"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    value: "150+",
    label: "Projects Completed",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "NSW Licensed",
    label: "Fully Insured",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "48 hrs",
    label: "Free Quote Turnaround",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
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
                className="mb-3"
                style={{ color: "var(--gold)", opacity: 0.85 }}
              >
                {stat.icon}
              </span>
              <span
                className="text-2xl sm:text-3xl uppercase"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
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
