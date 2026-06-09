import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const sitemapUrl = `${siteConfig.url}/sitemap.xml`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/projects/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: sitemapUrl,
    host: siteConfig.url,
  };
}
