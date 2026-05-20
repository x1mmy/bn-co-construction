export type Project = {
  size: "large" | "standard";
  type: string;
  name: string;
  img: string;
};

/** Homepage projects preview — links to full portfolio */
export const featuredProjects: Project[] = [
  {
    size: "large",
    type: "New Build",
    name: "The Roseville Residence",
    img: "/projects/roseville/02.png",
  },
  {
    size: "standard",
    type: "Granny Flat",
    name: "The Kincumber Residence",
    img: "/projects/kincumber/01.png",
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

export const projects = featuredProjects;
