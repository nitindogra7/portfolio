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
      className="relative w-full px-5 py-14 sm:px-8 sm:py-20 lg:border-t lg:border-hairline lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 lg:gap-16">
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

        {/* Steps — numbered nodes on a connecting thread, since order is real information here */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="flex flex-col gap-5"
            >
              {/* Node + connecting line row */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface font-mono text-sm text-[var(--color-accent)] shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_8px_16px_-12px_rgba(0,0,0,0.15)]">
                  {step.number}
                </span>
                <div
                  aria-hidden="true"
                  className={`h-px flex-1 bg-hairline ${
                    i === process.length - 1 ? "lg:hidden" : ""
                  }`}
                />
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_16px_32px_-24px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[var(--color-accent)]/30">
                <h3 className="font-display text-2xl font-medium leading-tight text-ink lg:text-[1.6rem]">
                  {step.title}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-stone lg:text-[0.95rem]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}