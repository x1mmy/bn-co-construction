import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CallBlakeCta from "@/components/CallBlakeCta";
import Footer from "@/components/Footer";
import { homeMetadata } from "@/lib/seo";

const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Process = dynamic(() => import("@/components/Process"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const QuoteForm = dynamic(() => import("@/components/QuoteForm"));

export const metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CallBlakeCta />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
