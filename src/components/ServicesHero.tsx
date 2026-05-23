"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceCredentials, serviceMarqueeItems } from "@/lib/services";

export default function ServicesHero() {
  const marquee = [...serviceMarqueeItems, ...serviceMarqueeItems];

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 100%, rgba(196,168,122,0.12) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="uppercase mb-5"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              Licensed Sydney Builder
            </p>
            <h1
              className="mb-6 leading-[0.95] uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Every trade your home needs,{" "}
              <span style={{ color: "var(--gold)" }}>one licensed crew.</span>
            </h1>
            <p
              className="mb-10 max-w-xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              From ground-up new builds to joinery, outdoor structures, and
              maintenance — BN & Co Construction handles the full scope on site
              under one licensed, insured operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] font-medium transition-[background-color,transform] duration-200 active:scale-[0.98] hover:bg-[var(--gold-light)]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--bg-primary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Request a Free Quote
              </Link>
              <a
                href="#our-approach"
                className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] transition-[border-color,color,transform] duration-200 active:scale-[0.98] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                style={{
                  border: "0.5px solid var(--border)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                How We Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-2 gap-px"
            style={{ backgroundColor: "var(--border)" }}
          >
            {serviceCredentials.map((item) => (
              <div
                key={item.label}
                className="p-5 sm:p-6"
                style={{ backgroundColor: "var(--bg-surface)" }}
              >
                <p
                  className="uppercase mb-2"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    color: "var(--gold)",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service name marquee */}
      <div
        className="border-t border-[var(--border)] py-4 overflow-hidden"
        style={{ backgroundColor: "var(--bg-surface)" }}
      >
        <div className="service-name-marquee flex gap-10 whitespace-nowrap">
          {marquee.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xs uppercase tracking-[0.2em] shrink-0"
              style={{
                fontFamily: "var(--font-dm-sans)",
                color: "var(--text-muted)",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
