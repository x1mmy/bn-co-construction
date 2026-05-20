"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
} from "framer-motion";

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

function TestimonialCard({
  quote,
  author,
  context,
}: (typeof testimonials)[0]) {
  return (
    <article
      className="flex-shrink-0 w-[min(100%,320px)] sm:w-[360px] md:w-[380px] p-8 flex flex-col min-h-[280px]"
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
  const controls = useAnimationControls();
  const loop = [...testimonials, ...testimonials];

  useEffect(() => {
    if (paused) {
      controls.stop();
      return;
    }
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 38,
          ease: "linear",
        },
      },
    });
  }, [paused, controls]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      {/* Edge fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
        style={{
          background:
            "linear-gradient(to right, var(--bg-primary) 0%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
        style={{
          background:
            "linear-gradient(to left, var(--bg-primary) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <motion.div
        className="flex gap-6 w-max px-4 sm:px-6"
        animate={controls}
        initial={{ x: "0%" }}
        aria-live="off"
        aria-label="Client testimonials carousel"
      >
        {loop.map((t, i) => (
          <TestimonialCard
            key={`${t.author}-${i}`}
            quote={t.quote}
            author={t.author}
            context={t.context}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 overflow-hidden">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
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
