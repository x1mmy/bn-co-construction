import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          <div>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
            >
              BN <span style={{ color: "var(--gold)" }}>&amp;</span> Co
              Construction
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              Crafted to last. Built to inspire.
              <br />
              Proudly serving Sydney since 2014.
            </p>
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
              }}
            >
              Social
            </p>
            <a
              href="https://www.instagram.com/bn_co_construction/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link inline-flex items-center gap-3 text-[13px] font-light"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-dm-sans)",
              }}
              aria-label="Follow BN & Co Construction on Instagram"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60 shrink-0"
                aria-hidden
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              @bn_co_construction
            </a>
          </div>

          <div>
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
              }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link text-[13px] font-light"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <p
              className="uppercase mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: "var(--text-muted)",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:0478404553"
                className="footer-link flex items-center gap-3 text-[13px] font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 shrink-0"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37a2 2 0 0 1 1.995-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                0478 404 553
              </a>
              <a
                href="mailto:blake@bnandco.com"
                className="footer-link flex items-center gap-3 text-[13px] font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 shrink-0"
                  aria-hidden
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                blake@bnandco.com
              </a>
              <div
                className="flex items-center gap-3 text-[13px] font-light"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 shrink-0"
                  aria-hidden
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Sydney, NSW
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        style={{ borderTop: "0.5px solid var(--border)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "12px",
            color: "var(--text-muted)",
          }}
        >
          &copy; {year} BN &amp; Co Construction. All rights reserved.
        </p>
        <span
          className="px-3 py-1"
          style={{
            border: "0.5px solid var(--border)",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            color: "var(--text-muted)",
          }}
        >
          NSW Carpentry Licence
        </span>
      </div>
    </footer>
  );
}
