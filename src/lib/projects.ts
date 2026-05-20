export type Project = {
  size: "large" | "standard";
  type: string;
  name: string;
  img: string;
};

export const projects: Project[] = [
  {
    size: "large",
    type: "New Build",
    name: "Roseville Chase Residence",
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
  },
  {
    size: "standard",
    type: "Kitchen Renovation",
    name: "Kincumber Kitchen",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    size: "standard",
    type: "Bathroom Remodel",
    name: "North Shore Master Bath",
    img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    size: "standard",
    type: "Home Extension",
    name: "Lane Cove Extension",
    img: "https://images.unsplash.com/photo-1600573472556-e636c2acda88?w=800&q=80",
  },
  {
    size: "standard",
    type: "Custom Carpentry",
    name: "Mosman Staircase",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];
