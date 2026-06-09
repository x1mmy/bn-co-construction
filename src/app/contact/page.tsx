import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a free quote from BN & Co Construction. Licensed Sydney builder — response within 24 hours, detailed quote within 48 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
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
