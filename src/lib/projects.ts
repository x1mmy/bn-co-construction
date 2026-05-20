export type Project = {
  size: "large" | "standard";
  type: string;
  name: string;
  img: string;
};

export const featuredProjects: Project[] = [
  {
    size: "large",
    type: "New Build",
    name: "Roseville Chase — New Build",
    img: "/projects/roseville-chase-new-build.png",
  },
  {
    size: "standard",
    type: "New Build & Extension",
    name: "Kincumber — New Build and Home Extension",
    img: "/projects/kincumber-new-build-home-extension.png",
  },
  {
    size: "standard",
    type: "Bathroom Remodelling",
    name: "Sydney — Bathroom Remodelling",
    img: "/projects/sydney-bathroom-remodelling.png",
  },
  {
    size: "standard",
    type: "House Renovation",
    name: "Lindfield — House Renovation",
    img: "/projects/lindfield-house-renovation.png",
  },
  {
    size: "standard",
    type: "Custom Carpentry",
    name: "Bondi — Stairs",
    img: "/projects/bondi-stairs.png",
  },
];

export const allProjects: Project[] = [
  ...featuredProjects.map((p) => ({ ...p, size: "standard" as const })),
  {
    size: "standard",
    type: "New Build & Extension",
    name: "Kincumber — New Build and Home Extension",
    img: "/projects/kincumber-new-build-home-extension-2.png",
  },
  {
    size: "standard",
    type: "Granny Flat",
    name: "Kincumber — New Build and Home Extension",
    img: "/projects/kincumber-granny-flat.png",
  },
  {
    size: "standard",
    type: "Bathroom Renovation",
    name: "Sydney — Bathroom Renovation",
    img: "/projects/sydney-bathroom-renovation.png",
  },
  {
    size: "standard",
    type: "Bathroom Renovation",
    name: "Sydney — Bathroom Renovation",
    img: "/projects/sydney-bathroom-renovation-2.png",
  },
  {
    size: "standard",
    type: "Complete Home Remodelling",
    name: "Sydney — Complete Home Remodelling",
    img: "/projects/sydney-complete-home-remodelling.png",
  },
  {
    size: "standard",
    type: "Landscaping & Outdoor Carpentry",
    name: "Sydney — Landscaping and Outdoor Carpentry",
    img: "/projects/sydney-landscaping-outdoor-carpentry.png",
  },
  {
    size: "standard",
    type: "Kitchen & Living",
    name: "bnc2",
    img: "/projects/bnc2.png",
  },
  {
    size: "standard",
    type: "Entry & Interior",
    name: "bnc3",
    img: "/projects/bnc3.png",
  },
];

export const projects = featuredProjects;
