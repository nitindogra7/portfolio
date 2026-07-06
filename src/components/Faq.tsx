"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative w-full px-5 py-14 sm:px-8 sm:py-20 lg:border-t lg:border-hairline lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 lg:gap-14">
        {/* Header block — matches Hero/Process/Services/Testimonials rhythm */}
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
              FAQ
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
            Common questions
          </motion.h2>
        </div>

        {/* Accordion — cards on all breakpoints */}
        <div className="flex flex-col gap-3 sm:gap-3 lg:gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.q}
                custom={index + 2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border border-hairline bg-surface transition-colors duration-300 hover:border-[var(--color-accent)]/25"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="focus-ring group flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6 lg:px-8 lg:py-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-sans text-sm font-medium leading-snug transition-colors duration-300 sm:text-xl ${
                      isOpen ? "text-[var(--color-accent)]" : "text-ink"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.08]"
                        : "border-hairline bg-chip group-hover:border-[var(--color-accent)]/30"
                    }`}
                    aria-hidden="true"
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`font-mono text-base transition-colors duration-300 ${
                        isOpen ? "text-[var(--color-accent)]" : "text-ink"
                      }`}
                    >
                      +
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl px-5 pb-5 text-sm leading-relaxed text-stone sm:px-6 lg:px-8 lg:pb-6 lg:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}