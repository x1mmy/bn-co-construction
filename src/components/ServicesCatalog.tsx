"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { serviceOfferings } from "@/lib/services";

export default function ServicesCatalog() {
  const lastIndex = serviceOfferings.length - 1;

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <div className="max-w-2xl">
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              What We Build
            </p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              A complete suite of residential construction
            </h2>
          </div>
          <p
            className="max-w-sm md:text-right"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "14px",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.75,
            }}
          >
            Seven core disciplines. One team accountable for quality from
            first frame to final fix.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "var(--border)" }}
        >
          {serviceOfferings.map((service, i) => {
            const isFeatured = i === lastIndex;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: (i % 3) * 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`service-tile group relative overflow-hidden transition-[transform,background-color] duration-300 ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-3 flex flex-col lg:flex-row lg:min-h-0"
                    : "flex flex-col"
                }`}
                style={{ backgroundColor: "var(--bg-surface)" }}
              >
                <div
                  className={`relative overflow-hidden shrink-0 ${
                    isFeatured
                      ? "h-48 sm:h-52 lg:h-auto lg:w-[42%] lg:min-h-[280px]"
                      : "h-44 sm:h-48"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 1024px) 100vw, 42vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(20,19,16,0.85) 0%, rgba(20,19,16,0.2) 55%, transparent 100%)",
                    }}
                  />
                  <span
                    className="absolute top-4 left-4 text-5xl md:text-6xl leading-none transition-opacity duration-300 group-hover:opacity-25"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      color: "var(--gold)",
                      opacity: 0.15,
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <div
                  className={`flex flex-col p-6 sm:p-8 ${
                    isFeatured ? "lg:flex-1 lg:justify-center" : ""
                  }`}
                >
                  <h3
                    className="mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--gold-light)]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
                      fontWeight: 400,
                      color: "var(--text-primary)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-5"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-[0.1em]"
                        style={{
                          border: "0.5px solid var(--border)",
                          fontFamily: "var(--font-dm-sans)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
