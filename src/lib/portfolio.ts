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
    "Full new build in Roseville — double brick and concrete slab construction, structural framing through to lock-up and complete interior fit-out by BN & Co Construction.",
    "Scope included open-plan living opening to a north-facing garden, louvred terrace and pool area, kitchen with butler's pantry, primary suite, and heated-floor bathrooms — all delivered under one licensed build team.",
    "Built with double glazing, zoned air conditioning, solar, and premium exterior detailing including copper lighting and automated garage — completed to NSW residential standards with clear milestones from slab to handover.",
  ],
  gallery: [
    "/projects/roseville/02.png",
    "/projects/roseville/03.png",
    "/projects/roseville/04.png",
    "/projects/roseville/05.png",
  ],
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

export const baulkhamHillsResidence: FeaturedProject = {
  id: "baulkham-hills",
  title: "22 James St, Baulkham Hills",
  paragraphs: [
    "A covered alfresco entertaining deck and pergola build for a Baulkham Hills townhouse, extending the home's north-facing outdoor living space with a fully framed skylight roof structure.",
    "Scope included structural steel pergola framing, four skylight roof windows for natural light, and a hardwood entertaining deck connecting directly to the home's living areas — finished with integrated lighting and ceiling fan provisions.",
  ],
  gallery: [
    "/projects/baulkham-hills/01.png",
    "/projects/baulkham-hills/02.png",
    "/projects/baulkham-hills/03.png",
    "/projects/baulkham-hills/04.png",
    "/projects/baulkham-hills/05.png",
    "/projects/baulkham-hills/06.png",
  ],
};

export const additionalProjectsIntro = {
  title: "Additional Projects",
  paragraphs: [
    "Beyond featured new builds, we complete home renovations, extensions, kitchen and bathroom fit-outs, custom joinery, decking, pergolas, and ongoing maintenance across Sydney.",
    "Every job is run on site by licensed trades — clear quotes, regular updates, and workmanship you can inspect at each stage before handover.",
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
