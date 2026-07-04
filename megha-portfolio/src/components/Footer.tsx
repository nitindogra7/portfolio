"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-content flex-col items-start gap-8 px-6 py-20 lg:px-12 lg:py-32">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm text-stone"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          Available for work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl font-display text-4xl font-medium leading-tight text-ink lg:text-6xl"
        >
          Let&apos;s make something worth noticing.
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.03 }}
          href={`mailto:${profile.email}`}
          className="focus-ring rounded-full bg-chip px-8 py-4 text-sm text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Start a Conversation
        </motion.a>

        <div className="mt-12 flex w-full flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-6 text-sm text-stone">
            <a href={profile.social.behance} className="focus-ring hover:text-ink">
              Behance
            </a>
            <a href={profile.social.instagram} className="focus-ring hover:text-ink">
              Instagram
            </a>
            <a href={profile.social.linkedin} className="focus-ring hover:text-ink">
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
