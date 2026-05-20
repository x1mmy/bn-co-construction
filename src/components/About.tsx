"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Dedicated Carpentry Licence",
    desc: "Fully licensed and insured in NSW",
  },
  {
    title: "10+ Years Experience",
    desc: "Residential and commercial builds across Sydney",
  },
  {
    title: "On-Time Delivery",
    desc: "We keep you informed at every stage",
  },
  {
    title: "Post-Build Support",
    desc: "Available long after the keys are handed over",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-video md:aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                alt="Roseville Chase new build by BN & Co Construction"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute bottom-4 left-4 px-3 py-2"
                style={{
                  backgroundColor: "rgba(20,19,16,0.9)",
                  border: "0.5px solid var(--border)",
                }}
              >
                <span
                  className="uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12px",
                    color: "var(--gold)",
                    letterSpacing: "0.12em",
                  }}
                >
                  Roseville Chase — New Build 2024
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--gold)",
              }}
            >
              About Us
            </p>

            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              Built on craftsmanship,
              <br />
              delivered with care
            </h2>

            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              At BN &amp; Co Construction, we specialise in residential carpentry
              and construction across the Sydney area. With a dedicated carpentry
              licence and over 10 years of hands-on experience, we bring your
              vision to life.
            </p>
            <p
              className="mb-10"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              We work closely with every client from first consult through to
              final handover. No subcontracting the vision. No cutting corners on
              the finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="pl-4"
                  style={{ borderLeft: "1.5px solid var(--gold)" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
