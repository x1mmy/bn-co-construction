"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "BN & Co turned our outdated home into something we're genuinely proud of. Their professionalism and attention to detail exceeded everything we expected.",
    author: "The Parks Family",
    context: "Complete Home Renovation — Roseville",
  },
  {
    quote:
      "We couldn't believe how quickly they transformed our bathroom. The process was seamless, and they kept us in the loop at every single stage. Outstanding work.",
    author: "Alex M.",
    context: "Bathroom Remodel — North Shore",
  },
  {
    quote:
      "The team did an incredible job on our extension. They seamlessly blended the new spaces with our existing home. The carpentry is impeccable — we'd use them again without question.",
    author: "Chris S.",
    context: "Home Extension — Lane Cove",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32">
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
            Client Stories
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--text-primary)",
            }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="p-8 flex flex-col"
              style={{
                backgroundColor: "var(--bg-surface)",
                border: `0.5px solid var(--border)`,
              }}
            >
              {/* Opening quote */}
              <span
                className="block mb-4 leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "4rem",
                  color: "var(--gold)",
                  lineHeight: 0.8,
                }}
              >
                &ldquo;
              </span>
              <p
                className="flex-1 mb-6"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  lineHeight: 1.8,
                }}
              >
                {t.quote}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--gold)",
                  }}
                >
                  {t.author}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                  }}
                >
                  {t.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
