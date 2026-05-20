"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  approachItems,
  serviceGridRowOne,
  serviceGridRowTwo,
  serviceGridRowTwoStacked,
  type ServiceItem,
} from "@/lib/services";

const cellBg = { backgroundColor: "var(--bg-surface)" };
const gridLine = { backgroundColor: "var(--border)" };

function ServiceCell({
  item,
  index,
  className = "",
}: {
  item: ServiceItem;
  index: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className={`p-6 sm:p-8 md:p-10 flex flex-col justify-center min-h-[220px] sm:min-h-[260px] ${className}`}
      style={cellBg}
    >
      <h3
        className="mb-4 leading-snug"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 400,
          color: "var(--text-primary)",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "14px",
          fontWeight: 300,
          color: "var(--text-muted)",
          lineHeight: 1.75,
        }}
      >
        {item.description}
      </p>
    </motion.article>
  );
}

function TitleCell({
  title,
  index,
  variant = "services",
}: {
  title: string;
  index: number;
  variant?: "services" | "approach";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className="p-8 sm:p-10 md:p-12 flex items-center justify-center min-h-[220px] sm:min-h-[260px]"
      style={{
        backgroundColor:
          variant === "services" ? "var(--accent-taupe)" : "var(--bg-surface)",
      }}
    >
      <h2
        className="leading-none text-center md:text-left w-full"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default function ServicesPageGrid() {
  return (
    <div className="space-y-0">
      {/* Our Services — row 1 */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
        style={gridLine}
      >
        <TitleCell title="Our Services" index={0} />
        {serviceGridRowOne.map((item, i) => (
          <ServiceCell key={item.title} item={item} index={i + 1} />
        ))}
      </div>

      {/* Our Services — row 2 */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
        style={gridLine}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative min-h-[280px] md:min-h-[320px] lg:min-h-full"
          style={cellBg}
        >
          <Image
            src="/projects/bnc2.png"
            alt="Kitchen remodelling by BN & Co Construction"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover"
          />
        </motion.div>
        {serviceGridRowTwo.map((item, i) => (
          <ServiceCell key={item.title} item={item} index={i + 1} />
        ))}
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col min-h-[280px] sm:min-h-[320px]"
          style={cellBg}
        >
          {serviceGridRowTwoStacked.map((item, i) => (
            <div
              key={item.title}
              className="flex-1 p-6 sm:p-8 flex flex-col justify-center"
              style={{
                borderBottom:
                  i === 0 ? "0.5px solid var(--border)" : undefined,
              }}
            >
              <h3
                className="mb-3 leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </motion.article>
      </div>

      {/* Our Approach */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mt-px"
        style={gridLine}
      >
        <TitleCell title="Our Approach" index={0} variant="approach" />
        {approachItems.map((item, i) => (
          <ServiceCell key={item.title} item={item} index={i + 1} />
        ))}
      </div>

      {/* CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mt-px p-10 sm:p-14 md:p-16 flex flex-col items-center text-center gap-6"
        style={{
          ...cellBg,
          borderTop: "0.5px solid var(--border)",
        }}
      >
        <h2
          className="leading-tight max-w-xl"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 400,
            color: "var(--text-primary)",
          }}
        >
          Ready to start your project?
        </h2>
        <p
          className="max-w-md"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "15px",
            fontWeight: 300,
            color: "var(--text-muted)",
            lineHeight: 1.7,
          }}
        >
          Tell us what you need. We respond within 24 hours with a free,
          no-obligation site visit and a detailed quote within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] font-medium transition-all active:scale-[0.98] hover:bg-[var(--gold-light)]"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:0478404553"
            className="w-full sm:w-auto px-10 py-4 text-center text-xs uppercase tracking-[0.12em] font-medium transition-all active:scale-[0.98] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Call 0478 404 553
          </a>
        </div>
      </motion.div>
    </div>
  );
}
