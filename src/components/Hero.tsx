"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/bnc1.png"
          alt="Roseville Chase new build by BN & Co Construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,13,11,0.88) 0%, rgba(14,13,11,0.72) 42%, rgba(14,13,11,0.45) 70%, rgba(14,13,11,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-[680px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-flex items-center px-3 py-1.5 mb-5 sm:mb-6"
            style={{
              border: "0.5px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Licensed Builder · Sydney, NSW
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="font-light leading-none mb-5 sm:mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "var(--text-primary)",
              fontWeight: 300,
            }}
          >
            Crafted to{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>last.</em>
            <br />
            Built to inspire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mb-8 hero-subtext"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "var(--text-hero-body)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Sydney&apos;s trusted residential builder. New builds, renovations,
            extensions, and custom carpentry. Over a decade of hands-on
            craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
          >
            <a
              href="/contact"
              className="nav-cta w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-medium text-center"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-dm-sans)",
                letterSpacing: "0.12em",
              }}
            >
              Request a Free Quote
            </a>
            <a
              href="tel:0478404553"
              className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest font-medium text-center transition-[color,border-color,transform] duration-300 active:scale-[0.98] hover:border-[var(--gold-light)] hover:text-[var(--gold-light)]"
              style={{
                border: "0.5px solid rgba(240,236,228,0.4)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-dm-sans)",
                letterSpacing: "0.12em",
              }}
            >
              Call 0478 404 553
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
