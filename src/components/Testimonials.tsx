"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";

function TestimonialCard({
  quote,
  author,
  context,
}: (typeof testimonials)[0]) {
  return (
    <article
      className="testimonial-card flex-shrink-0 w-[min(100%,300px)] sm:w-[340px] md:w-[360px] p-8 flex flex-col min-h-[280px]"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "0.5px solid var(--border)",
      }}
    >
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
        {quote}
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
          {author}
        </p>
        <p
          className="mt-1"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          {context}
        </p>
      </div>
    </article>
  );
}

function TestimonialsCarousel() {
  const [paused, setPaused] = useState(false);
  const loop = [...testimonials, ...testimonials];

  return (
    <div
      className={`testimonial-marquee ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
      aria-label="Client testimonials carousel"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28"
        style={{
          background:
            "linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="testimonial-marquee-track flex gap-6 pl-4 sm:pl-6">
        {loop.map((t, i) => (
          <TestimonialCard
            key={`${t.author}-${t.context}-${i}`}
            quote={t.quote}
            author={t.author}
            context={t.context}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
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
      </div>

      {prefersReducedMotion ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      ) : (
        <TestimonialsCarousel />
      )}
    </section>
  );
}
