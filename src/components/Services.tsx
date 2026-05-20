"use client";

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
    desc: "Transform your existing home from the inside out. Fresh perspective, meticulous execution, measurable results.",
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
      className="p-8 transition-colors duration-200"
      style={{
        backgroundColor: hovered ? "var(--bg-elevated)" : "transparent",
        border: `0.5px solid var(--border)`,
        cursor: "default",
      }}
    >
      <span
        className="block mb-4"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "2.5rem",
          color: "rgba(196,168,122,0.12)",
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
          fontWeight: 500,
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
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--bg-surface)" }}
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
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 300,
              color: "var(--text-muted)",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            From concept to completion, every service is delivered with the same
            attention to detail.
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
      </div>
    </section>
  );
}
