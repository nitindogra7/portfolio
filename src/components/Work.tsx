"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 pb-10 sm:pb-12 lg:pb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-stone/60">
            Recent work
          </span>

          <h2 className="max-w-xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Selected projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}