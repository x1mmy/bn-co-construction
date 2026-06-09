import type { Metadata } from "next";
import { siteConfig } from "./site";

type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

const defaultOgImage: OgImage = {
  url: "/bnc1.webp",
  width: 1024,
  height: 682,
  alt: "Roseville Chase new build by BN & Co Construction",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: OgImage;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImage,
}: PageMetadataOptions): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;
  const isHome = path === "/";
  const socialTitle = isHome ? title : `${title} | ${siteConfig.name}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: pageUrl,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const homeMetadata = createPageMetadata({
  title:
    "BN & Co Construction | Sydney Residential Builder & Renovation Specialist",
  description: siteConfig.description,
  path: "/",
});
