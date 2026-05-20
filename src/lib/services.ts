export type ServiceOffering = {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "new-build",
    number: "01",
    title: "New Build Services",
    description:
      "Full residential new builds with licensed builders. Structural framing, interior and exterior finishes, and detail-focused craftsmanship completed to NSW standards.",
    highlights: ["Licensed builders", "Structural framing", "Interior & exterior finishes"],
    image: "/projects/roseville/02.png",
  },
  {
    id: "remodelling",
    number: "02",
    title: "Complete Home Remodelling",
    description:
      "Transform your entire home with a fresh perspective and meticulous execution that improves comfort, flow, and long-term value.",
    highlights: ["Whole-home planning", "Minimal disruption", "Coordinated trades"],
    image: "/projects/sydney-complete-home-remodelling.png",
  },
  {
    id: "renovations",
    number: "03",
    title: "Renovations & Extensions",
    description:
      "Expand or refine your living space with renovations and extensions designed to match your home's existing character inside and out.",
    highlights: ["Extensions", "Indoor carpentry", "Structural integration"],
    image: "/projects/lindfield-house-renovation.png",
  },
  {
    id: "kitchen-bath",
    number: "04",
    title: "Kitchen & Bathroom Remodelling",
    description:
      "Premium kitchens and bathrooms built with quality materials, precise installation, and layouts made for daily living.",
    highlights: ["Custom joinery", "Waterproofing", "Stone & tile work"],
    image: "/projects/bnc2.png",
  },
  {
    id: "carpentry",
    number: "05",
    title: "Custom Carpentry & Joinery",
    description:
      "Bespoke cabinetry, staircases, and woodwork tailored to your home. Every joint and finish reflects hands-on carpentry expertise.",
    highlights: ["Built-in cabinetry", "Staircases", "Heritage detailing"],
    image: "/projects/bondi-stairs.png",
  },
  {
    id: "outdoor",
    number: "06",
    title: "Outdoor & Landscaping Carpentry",
    description:
      "Decks, pergolas, gates, and outdoor structures that extend your home into the garden with durable, weather-ready construction.",
    highlights: ["Decks & pergolas", "Outdoor kitchens", "Gates & screening"],
    image: "/projects/sydney-landscaping-outdoor-carpentry.png",
  },
  {
    id: "maintenance",
    number: "07",
    title: "Maintenance & Repairs",
    description:
      "Reliable ongoing carpentry maintenance and repair to keep your home looking sharp and functioning properly year after year.",
    highlights: ["Responsive repairs", "Wood restoration", "Preventative upkeep"],
    image: "/projects/kincumber/01.png",
  },
];

export const serviceCredentials = [
  { label: "NSW Licensed Builder", value: "Fully certified" },
  { label: "Carpentry Licence", value: "Dedicated trade licence" },
  { label: "Fully Insured", value: "Residential & commercial" },
  { label: "48-Hour Quotes", value: "Itemised, no surprises" },
];

export type ApproachStep = {
  num: string;
  title: string;
  description: string;
};

export const approachSteps: ApproachStep[] = [
  {
    num: "01",
    title: "Free Consultation",
    description:
      "We meet on site to understand your vision, timeline, and budget. No obligation, no pressure: just an honest conversation about what is possible.",
  },
  {
    num: "02",
    title: "Detailed Quote",
    description:
      "You receive a clear, itemised quote within 48 hours. No hidden costs and no surprises at handover.",
  },
  {
    num: "03",
    title: "Build & Update",
    description:
      "We keep you informed at every milestone. You know what is happening and when it is happening.",
  },
  {
    num: "04",
    title: "Handover & Support",
    description:
      "We walk through every finish together. Our team remains available long after the keys are handed over.",
  },
];

export const serviceMarqueeItems = [
  "New Builds",
  "Home Renovations",
  "Extensions",
  "Kitchen Remodelling",
  "Bathroom Renovations",
  "Custom Joinery",
  "Outdoor Decks",
  "Granny Flats",
  "Structural Carpentry",
  "Maintenance & Repairs",
];
