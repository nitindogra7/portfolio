"use client";

import { motion } from "framer-motion";
import { testimonials, stats } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="say"
      className="relative w-full border-t border-hairline px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-content flex-col gap-10 lg:gap-14">
        {/* Header block — matches Hero/Process/Services badge + heading rhythm */}
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
              Client Reviews
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
            What clients say
          </motion.h2>
        </div>

        {/* Testimonial cards — layered depth, quote mark motif, initial avatars */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-hairline bg-surface p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_20px_40px_-28px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-[var(--color-accent)]/30"
            >
              {/* Ambient accent glow, revealed on hover */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-accent)]/0 blur-2xl transition-colors duration-500 group-hover:bg-[var(--color-accent)]/[0.08]" />

              {/* Oversized quote glyph as the card's signature mark */}
              <svg
                viewBox="0 0 32 24"
                className="h-8 w-9 shrink-0 text-[var(--color-accent)]/25"
                fill="currentColor"
              >
                <path d="M9.6 0C4.3 2.9 0 8.6 0 14.9 0 20 3.3 24 8.1 24c3.9 0 6.9-3 6.9-6.9 0-3.6-2.6-6.3-6-6.3-.7 0-1.3.1-1.6.2C8 7.4 10.9 3.9 14.8 1.7L9.6 0Zm17.3 0C21.6 2.9 17.3 8.6 17.3 14.9c0 5.1 3.3 9.1 8.1 9.1 3.9 0 6.9-3 6.9-6.9 0-3.6-2.6-6.3-6-6.3-.7 0-1.3.1-1.6.2.4-3.6 3.3-7.1 7.2-9.3L26.9 0Z" />
              </svg>

              <blockquote className="flex-1 text-[0.975rem] leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-hairline pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-chip font-display text-sm font-medium text-[var(--color-accent)]">
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{t.name}</p>
                  <p className="truncate text-sm text-stone">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Stats row — same border-hairline divider + font-display scale as headings */}
        <div className="grid grid-cols-1 gap-10 border-t border-hairline pt-14 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i + 2 + testimonials.length}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
            >
              <p className="font-display text-4xl font-medium tracking-tighter text-ink lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-stone">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}