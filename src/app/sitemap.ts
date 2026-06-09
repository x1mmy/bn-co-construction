import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastContentUpdate);

  return siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images.map((image) => `${siteConfig.url}${image}`),
  }));
}
