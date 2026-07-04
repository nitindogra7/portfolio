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
    <footer className="relative w-full border-t border-hairline px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-content flex-col items-start gap-6 lg:gap-8">
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
            Available for work
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

        <motion.a
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href={`mailto:${profile.email}`}
          className="focus-ring group relative mt-2 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full bg-[var(--color-accent)] px-8 py-4 font-mono text-[10px] uppercase tracking-wider text-bg transition-colors duration-300 hover:bg-ink"
        >
          Start a Conversation
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </motion.a>

        {/* Bottom bar — same border-hairline divider rhythm as section headers */}
        <div className="mt-10 flex w-full flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
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
          <p className="text-sm text-stone">
            {profile.email} · © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}