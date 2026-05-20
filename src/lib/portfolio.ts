export type FeaturedProject = {
  id: string;
  title: string;
  paragraphs: string[];
  gallery: string[];
};

export type AdditionalProjectImage = {
  src: string;
  alt: string;
  label?: string;
};

export const rosevilleResidence: FeaturedProject = {
  id: "roseville",
  title: "The Roseville Residence",
  paragraphs: [
    "Crafted with precision and expertise by BN & Co Construction, the Roseville Residence is a testament to superior craftsmanship and thoughtful design. This stunning new build seamlessly blends modern elegance with functionality, featuring striking interiors curated with meticulous attention to detail.",
    "A capacious open-plan living zone effortlessly connects to a sun-drenched north-facing garden, while a louvred terrace and pool create a private entertainer's oasis. Luxurious finishes define the home, from the Turkish limestone kitchen with an induction cooktop and butler's pantry to the deluxe primary suite and gorgeous heated-floor bathrooms.",
    "Built to the highest standards, the residence boasts recycled double brick and solid concrete slab construction, complemented by double glazing, zoned air conditioning, and a solar system for energy efficiency. Premium touches, including copper exterior lighting, an integrated BBQ and bar fridge, and an automated double garage, elevate the home's sophistication.",
    "BN & Co Construction has meticulously brought this vision to life, delivering an exceptional home that balances aesthetic beauty with lasting quality.",
  ],
  gallery: Array.from(
    { length: 15 },
    (_, i) => `/projects/roseville/${String(i + 1).padStart(2, "0")}.png`
  ),
};

export const kincumberResidence: FeaturedProject = {
  id: "kincumber",
  title: "The Kincumber Residence",
  paragraphs: [
    "A fully custom-designed and built Granny Flat, featuring a complete kitchen, bathroom, living room, and bedroom. Our team constructed the entire structure from the ground up and meticulously fitted out every detail, showcasing our dedication to creating functional, stylish, and personalized living spaces from start to finish.",
  ],
  gallery: [
    "/projects/kincumber/01.png",
    "/projects/kincumber/02.png",
    "/projects/kincumber/03.png",
    "/projects/kincumber/04.png",
  ],
};

export const additionalProjectsIntro = {
  title: "Additional Projects",
  paragraphs: [
    "Our team brings extensive expertise across a range of projects, having completed numerous ventures in complete home remodeling and renovations, home extensions, and custom indoor carpentry.",
    "With a specialty in kitchen and bathroom remodeling, as well as custom cabinetry and joinery, we focus on creating spaces that are both functional and stylish. Our capabilities also extend outdoors, offering beautifully crafted decking, pergolas, and landscaping structures, along with reliable general maintenance, repairs, and woodwork restoration to keep homes looking their best.",
  ],
};

export const additionalProjects: AdditionalProjectImage[] = [
  {
    src: "/projects/lindfield-house-renovation.png",
    alt: "Lindfield house renovation with deck",
    label: "Lindfield — House Renovation",
  },
  {
    src: "/projects/sydney-bathroom-remodelling.png",
    alt: "Sydney bathroom remodelling",
    label: "Sydney — Bathroom Remodelling",
  },
  {
    src: "/projects/sydney-complete-home-remodelling.png",
    alt: "Sydney complete home remodelling",
    label: "Sydney — Complete Home Remodelling",
  },
  {
    src: "/projects/bondi-stairs.png",
    alt: "Bondi staircase carpentry",
    label: "Bondi — Stairs",
  },
  {
    src: "/projects/sydney-bathroom-renovation.png",
    alt: "Sydney bathroom renovation",
    label: "Sydney — Bathroom Renovation",
  },
  {
    src: "/projects/sydney-landscaping-outdoor-carpentry.png",
    alt: "Sydney landscaping and outdoor carpentry",
    label: "Sydney — Landscaping and Outdoor Carpentry",
  },
  {
    src: "/projects/kincumber-new-build-home-extension-2.png",
    alt: "Kincumber interior living space",
  },
  {
    src: "/projects/sydney-bathroom-renovation-2.png",
    alt: "Sydney bathroom renovation detail",
  },
  {
    src: "/projects/bnc2.png",
    alt: "Kitchen and living remodelling",
  },
  {
    src: "/projects/bnc3.png",
    alt: "Entry and interior carpentry",
  },
];
