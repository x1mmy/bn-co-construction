"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    body: "We meet on site to understand your vision, timeline, and budget. No obligation, no pressure — just an honest conversation.",
  },
  {
    num: "02",
    title: "Detailed Quote",
    body: "You receive a clear, itemised quote within 48 hours. No hidden costs and no surprises at handover.",
  },
  {
    num: "03",
    title: "Build & Update",
    body: "We keep you informed at every milestone. You know what's happening, when it's happening.",
  },
  {
    num: "04",
    title: "Handover & Support",
    body: "We walk through every finish together. And we're still available long after the keys are handed over.",
  },
];

function ProcessStep({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="process-step group relative p-6 sm:p-8 cursor-default transition-[transform,background-color] duration-300"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Hover accent line */}
      <span
        className="process-step-accent absolute top-0 left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ backgroundColor: "var(--gold)" }}
        aria-hidden
      />

      <motion.span
        className="process-step-num block mb-4 sm:mb-6 text-5xl sm:text-7xl transition-opacity duration-300"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "var(--gold)",
          opacity: 0.1,
          lineHeight: 1,
        }}
      >
        {step.num}
      </motion.span>

      <p
        className="process-step-title mb-3 transition-colors duration-300"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "15px",
          fontWeight: 500,
          color: "var(--text-primary)",
        }}
      >
        {step.title}
      </p>
      <p
        className="transition-colors duration-300"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "13px",
          fontWeight: 300,
          color: "var(--text-muted)",
          lineHeight: 1.7,
        }}
      >
        {step.body}
      </p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 md:mb-16"
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
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            Our Process
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{
            backgroundColor: "var(--border)",
            border: "0.5px solid var(--border)",
          }}
        >
          {steps.map((step, i) => (
            <ProcessStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
