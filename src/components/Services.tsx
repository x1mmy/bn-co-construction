"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    name: "New Build Services",
    desc: "Full residential new builds with licensed builders. Structural framing, interior and exterior finishes — completed to the highest NSW standards.",
  },
  {
    num: "02",
    name: "Complete Home Renovations",
    desc: "Transform your existing home from the inside out — structural updates, finishes, and trades coordinated on site.",
  },
  {
    num: "03",
    name: "Home Extensions & Indoor Carpentry",
    desc: "Expand your space seamlessly. Our extensions blend structurally and aesthetically with your home's existing character.",
  },
  {
    num: "04",
    name: "Kitchen & Bathroom Remodelling",
    desc: "Premium materials, expert craftsmanship, functional spaces. Kitchens and bathrooms built to last a generation.",
  },
  {
    num: "05",
    name: "Custom Carpentry & Joinery",
    desc: "Bespoke woodwork tailored to your home. Cabinetry, joinery, and custom pieces that reflect superior quality in every joint.",
  },
  {
    num: "06",
    name: "Maintenance & Repairs",
    desc: "Reliable ongoing carpentry maintenance and repair. We keep your home looking and functioning at its best.",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-tile p-8 transition-colors duration-200 cursor-pointer"
      style={{
        backgroundColor: hovered ? "var(--bg-elevated)" : "transparent",
        border: `0.5px solid var(--border)`,
      }}
    >
      <span
        className="block mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.5rem",
          color: "rgba(196,168,122,0.22)",
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {service.num}
      </span>
      <p
        className="mb-3"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "16px",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        {service.name}
      </p>
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "14px",
          fontWeight: 300,
          color: "var(--text-muted)",
          lineHeight: 1.7,
        }}
      >
        {service.desc}
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-surface-textured"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
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
            What We Build
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 400,
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            From slab and framing to fit-out and handover — one licensed crew on
            your job from start to finish.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: `0.5px solid var(--border)` }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3 text-center text-xs uppercase tracking-[0.12em] transition-all active:scale-[0.97] hover:border-[var(--gold)] hover:text-[var(--gold)]"
            style={{
              border: "0.5px solid var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
