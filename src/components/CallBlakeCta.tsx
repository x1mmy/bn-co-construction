"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const BLAKE_PHONE = "0478404553";
const BLAKE_PHONE_DISPLAY = "0478 404 553";

export default function CallBlakeCta() {
  return (
    <section
      className="py-16 md:py-20 border-t border-b"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12"
        >
          <div className="max-w-xl">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              Speak Directly
            </p>
            <h2
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Prefer to talk it through with Blake?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.75,
              }}
            >
              Call for a quick chat about your project scope, timing, and whether
              we are the right fit. No obligation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${BLAKE_PHONE}`}
              className="nav-cta inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.12em] font-medium text-center"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.995-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {BLAKE_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.12em] font-medium text-center transition-[color,border-color,transform] duration-300 active:scale-[0.98] hover:border-[var(--gold)] hover:text-[var(--gold-light)]"
              style={{
                border: "0.5px solid var(--border)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
