import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact | BN & Co Construction",
  description:
    "Request a free quote from BN & Co Construction. Licensed Sydney builder — response within 24 hours, detailed quote within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <QuoteForm
          sectionId="contact"
          pitchTag="Contact Us"
          pitchHeading={
            <>
              Let&apos;s discuss
              <br />
              your project
            </>
          }
          showTopBorder={false}
        />
      </main>
      <Footer />
    </>
  );
}
