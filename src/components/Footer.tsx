"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:border-t lg:border-hairline lg:px-12 lg:py-28">
      {/* Ambient glow behind the CTA — draws the eye without shouting */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[var(--color-accent)]/[0.10] blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-content flex-col items-start gap-7 lg:gap-9">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-chip px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            Available for work
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-stone/50">
            Usually replies within a day
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl font-display text-[11vw] font-medium leading-[0.95] tracking-tighter text-ink sm:text-[8vw] lg:text-[5vw] xl:text-[4.5rem]"
        >
          Let&apos;s make something worth noticing.
        </motion.h2>

        <motion.p
          custom={1.5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-md text-base leading-relaxed text-stone"
        >
          Have a project in mind? Tell me what you&apos;re building — I&apos;ll get back to you with next steps, no obligation.
        </motion.p>

        {/* Primary CTA — magnetic hover, glow on hover, arrow travels */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="focus-ring group relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-full bg-[var(--color-accent)] px-8 py-4 font-mono text-[11px] uppercase tracking-wider text-bg shadow-[0_8px_30px_-8px_var(--color-accent)] transition-colors duration-300 hover:bg-ink"
          >
            <span className="relative z-10">Start a Conversation</span>
            <motion.span
              className="relative z-10 inline-block"
              aria-hidden="true"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Secondary, lower-friction option */}
          <a
            href={profile.social.linkedin}
            className="focus-ring group inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-stone transition-colors duration-300 hover:border-[var(--color-accent)]/40 hover:text-ink"
          >
            Or message on LinkedIn
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Bottom bar — same border-hairline divider rhythm as section headers */}
        <div className="mt-6 flex w-full flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-wider text-stone">
            <a href={profile.social.behance} className="focus-ring transition-colors hover:text-[var(--color-accent)]">
              Behance
            </a>
            <a href={profile.social.instagram} className="focus-ring transition-colors hover:text-[var(--color-accent)]">
              Instagram
            </a>
            <a href={profile.social.linkedin} className="focus-ring transition-colors hover:text-[var(--color-accent)]">
              LinkedIn
            </a>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring text-sm text-stone transition-colors hover:text-[var(--color-accent)]"
          >
            {profile.email} · © {new Date().getFullYear()} {profile.name}
          </a>
        </div>
      </div>
    </footer>
  );
}