export const siteConfig = {
  name: "BN & Co Construction",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://bnandco.com",
  description:
    "BN & Co Construction — licensed Sydney builder specialising in new builds, home renovations, extensions, and custom carpentry. Free quote within 48 hours.",
  phone: "0478404553",
  phoneDisplay: "0478 404 553",
  email: "blake@bnandco.com",
  instagram: "https://www.instagram.com/bn_co_construction/",
  locale: "en_AU",
  address: {
    locality: "Sydney",
    region: "NSW",
    country: "AU",
  },
} as const;

export const siteRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/projects", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];
