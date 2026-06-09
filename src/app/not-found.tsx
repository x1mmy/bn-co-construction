import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 text-center w-full">
          <p
            className="uppercase mb-4"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--gold)",
            }}
          >
            404
          </p>
          <h1
            className="mb-5 uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
            }}
          >
            Page not found
          </h1>
          <p
            className="mb-8 max-w-md mx-auto"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.8,
            }}
          >
            The page you are looking for does not exist or may have moved.
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 text-xs uppercase tracking-[0.12em] font-medium"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--bg-primary)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
