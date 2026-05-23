"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant?: "featured" | "grid";
};

export default function ProjectCard({
  project,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const isLarge = project.size === "large" && variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className={`relative overflow-hidden cursor-pointer ${
        isLarge ? "col-span-1 md:col-span-2" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full h-full ${
          isLarge
            ? "aspect-[4/3] md:aspect-[16/9]"
            : "aspect-[4/3] md:aspect-square"
        }`}
      >
        <Image
          src={project.img}
          alt={project.name}
          fill
          sizes={
            isLarge
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
          className="object-cover transition-transform duration-300"
          style={{ transform: hovered ? "scale(1.02)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
            opacity: hovered ? 1 : 0.85,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p
            className="uppercase mb-1"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "var(--gold)",
            }}
          >
            {project.type}
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {project.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
