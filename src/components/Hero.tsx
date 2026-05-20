import Image from "next/image";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/bnc1.webp"
          alt="Roseville Chase new build by BN & Co Construction"
          fill
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,13,11,0.88) 0%, rgba(14,13,11,0.72) 42%, rgba(14,13,11,0.45) 70%, rgba(14,13,11,0.35) 100%)",
          }}
        />
      </div>

      <HeroContent />
    </section>
  );
}
