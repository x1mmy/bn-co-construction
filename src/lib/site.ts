export const siteConfig = {
  name: "BN & Co Construction",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.bncoconstruction.com",
  description:
    "BN & Co Construction — licensed Sydney builder specialising in new builds, home renovations, extensions, and custom carpentry. Free quote within 48 hours.",
  phone: "0478404553",
  phoneDisplay: "0478 404 553",
  email: "blake@bnandco.com",
  instagram: "https://www.instagram.com/bn_co_construction/",
  locale: "en_AU",
  language: "en-AU",
  abn: "90 642 488 195",
  abnDigits: "90642488195",
  foundingYear: 2014,
  lastContentUpdate: "2026-06-09",
  address: {
    locality: "Sydney",
    region: "NSW",
    country: "AU",
  },
  keywords: [
    "Sydney builder",
    "licensed builder Sydney",
    "home renovation Sydney",
    "new build Sydney",
    "kitchen renovation Sydney",
    "bathroom renovation Sydney",
    "home extension Sydney",
    "granny flat builder Sydney",
    "carpentry Sydney",
    "residential builder NSW",
    "BN & Co Construction",
  ],
} as const;

export const siteRoutes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
    images: ["/bnc1.webp"],
  },
  {
    path: "/services",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: ["/bnc1.webp"],
  },
  {
    path: "/projects",
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: ["/projects/roseville-chase-new-build.png", "/bnc1.webp"],
  },
  {
    path: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: ["/bnc1.webp"],
  },
] as const;
