"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 pb-14"
        >
          <span className="text-sm text-stone">Recent Work</span>

          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Selected projects
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-1">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="w-full sm:w-[calc(50%-2px)] lg:w-[calc(33.333%-3px)]"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}