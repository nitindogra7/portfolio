"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import type { Project } from "@/data/content";

export default function ProjectCard({
  project,
  cover,
}: {
  project: Project;
  cover: StaticImageData;
}) {
  return (
    <motion.a
      href="#work"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="focus-ring group block w-full overflow-hidden"
      aria-label={`View case study: ${project.title}`}
    >
      <div className="relative h-[420px] w-full overflow-hidden">
        <Image
          src={cover}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </motion.a>
  );
}