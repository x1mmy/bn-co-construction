"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { approachSteps } from "@/lib/services";

export default function OurApproach() {
  return (
    <section
      id="our-approach"
      className="py-20 md:py-28 border-t border-[var(--border)]"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 md:mb-20 max-w-2xl"
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
            How We Work
          </p>
          <h2
            className="mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            How we run your job
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 400,
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            A straight path from first site visit to handover. You always know
            what&apos;s happening on site, what it costs, and who to call.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px relative"
          style={{
            backgroundColor: "var(--border)",
            border: "0.5px solid var(--border)",
          }}
        >
          <div
            className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-px pointer-events-none"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden
          />

          {approachSteps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="approach-step group relative p-8 sm:p-10 transition-[transform,background-color] duration-300"
              style={{ backgroundColor: "var(--bg-surface)" }}
            >
              <span
                className="approach-step-num block mb-6 text-6xl sm:text-7xl leading-none transition-opacity duration-300"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--gold)",
                  opacity: 0.22,
                }}
              >
                {step.num}
              </span>
              <h3
                className="approach-step-title mb-4 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                }}
              >
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 border border-[var(--border)]"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <p
            className="max-w-lg text-center sm:text-left"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.75,
            }}
          >
            Ready to start? Tell us about your project and receive a detailed,
            itemised quote within 48 hours.
          </p>
          <Link
            href="/contact"
            className="shrink-0 w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] font-medium transition-[background-color,transform] duration-200 active:scale-[0.98] hover:bg-[var(--gold-light)]"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Get Your Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
