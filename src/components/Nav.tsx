"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(20,19,16,0.97)"
          : "rgba(20,19,16,0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between h-14 sm:h-16">
        <Link
          href="/"
          className="text-lg sm:text-xl font-light tracking-wide"
          style={{
            color: "var(--text-primary)",
            fontFamily: "var(--font-cormorant)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          BN <span style={{ color: "var(--gold)" }}>&amp;</span> Co Construction
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-light uppercase tracking-[0.12em] transition-colors duration-200 hover:text-[var(--text-primary)]"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-200 active:scale-[0.97] hover:bg-[var(--gold-light)]"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Get a Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--text-primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--text-primary)",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden md:hidden"
            style={{
              backgroundColor: "rgba(20,19,16,0.98)",
              borderBottom: "0.5px solid var(--border)",
            }}
          >
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.12em] py-1"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-3.5 text-center text-xs uppercase tracking-[0.12em] font-medium active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--bg-primary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
