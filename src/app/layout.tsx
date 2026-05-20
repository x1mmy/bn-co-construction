import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141310",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "BN & Co Construction | Sydney Residential Builder & Renovation Specialist",
    template: "%s | BN & Co Construction",
  },
  description: siteConfig.description,
  keywords: [
    "Sydney builder",
    "home renovation Sydney",
    "new build Sydney",
    "kitchen renovation Sydney",
    "home extension Sydney",
    "carpentry Sydney",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "BN & Co Construction | Sydney Residential Builder & Renovation Specialist",
    description: siteConfig.description,
    images: [
      {
        url: "/bnc1.webp",
        width: 1024,
        height: 682,
        alt: "Roseville Chase new build by BN & Co Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BN & Co Construction | Sydney Residential Builder & Renovation Specialist",
    description: siteConfig.description,
    images: ["/bnc1.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-[100dvh]">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
