import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "BN & Co",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#141310",
    theme_color: "#141310",
    lang: siteConfig.language,
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
