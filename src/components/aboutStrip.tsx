"use client";

import { motion } from "framer-motion";
import { skills, experience } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export default function AboutStrip() {
  return (
    <section
      id="about-strip"
      className="mx-auto w-full max-w-content px-5 py-12 sm:px-8 lg:px-12 lg:py-16 md:mb-20 pb-20"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Skills — quiet, left column */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col gap-4"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-stone/60">
            Skills
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-hairline bg-chip px-2.5 py-1 text-[11px] text-stone transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience — consistent cards at every breakpoint */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col"
        >
          <span className="mb-3 font-mono text-[10px] uppercase tracking-wider text-stone/60">
            Experience
          </span>
          <div className="flex flex-col gap-2.5">
            {experience.map((item, i) => (
              <div
                key={item.role + item.place}
                className="group grid grid-cols-[1.5rem_1fr_auto] items-baseline gap-x-3 gap-y-1 rounded-xl border border-hairline bg-surface px-4 py-3.5 transition-colors duration-200 hover:border-[var(--color-accent)]/30 sm:grid-cols-[1.5rem_1fr_1fr_auto]"
              >
                <span className="font-mono text-[10px] text-stone/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="truncate text-xs font-medium text-ink sm:text-sm">
                  {item.role}
                </p>
                <p className="truncate text-xs text-stone sm:text-sm">
                  {item.place}
                </p>
                <span className="col-span-3 whitespace-nowrap font-mono text-[10px] tabular-nums text-stone/60 sm:col-span-1 sm:text-right">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}