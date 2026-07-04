"use client";

import { motion } from "framer-motion";
import { process } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative w-full border-t border-hairline px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-14">
        {/* Header block — mirrors Hero's badge + heading + subtext rhythm */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-chip px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              How I Work
            </span>
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="font-display text-[10vw] font-medium leading-[0.95] tracking-tighter text-ink sm:text-[7vw] lg:text-[4.2vw] xl:text-[3.75rem]"
          >
            A simple, clear process
          </motion.h2>
        </div>

        {/* Steps grid — same border-hairline + font-mono numbering as Hero's accents */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="relative flex flex-col gap-4 border-t border-hairline pt-6"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-[var(--color-accent)]/25" />

              <span className="rounded-full border border-hairline bg-chip px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] w-fit">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-medium leading-tight text-ink lg:text-[1.85rem]">
                {step.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-stone lg:text-base">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}