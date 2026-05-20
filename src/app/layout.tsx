import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "BN & Co Construction | Sydney Residential Builder & Renovation Specialist",
  description:
    "BN & Co Construction — licensed Sydney builder specialising in new builds, home renovations, extensions, and custom carpentry. Free quote within 48 hours.",
  keywords:
    "Sydney builder, home renovation Sydney, new build Sydney, kitchen renovation Sydney, home extension Sydney, carpentry Sydney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-[100dvh]">{children}</body>
    </html>
  );
}
