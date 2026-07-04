"use client";

import Image from "next/image";
import imageMegha from "../assets/megha.png";
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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex w-full items-center px-5 pb-4 pt-8 sm:px-8 sm:py-14 lg:min-h-[85vh] lg:px-12 lg:py-0"
    >
      <div className="mx-auto grid w-full max-w-content grid-cols-1 items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left: text content */}
        <div className="flex flex-col gap-5 lg:gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <div className="relative h-12 w-12 shrink-0 lg:hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                  />
                </svg>
              </motion.div>
              <div className="relative h-full w-full overflow-hidden rounded-full border border-hairline bg-surface">
                <Image
                  src={imageMegha}
                  alt="Portrait of Megha, graphic designer"
                  fill
                  priority
                  sizes="48px"
                  className="object-cover grayscale contrast-[1.08] brightness-[0.95]"
                />
              </div>
              <span className="absolute bottom-0 right-0 flex h-3 w-3 items-center justify-center rounded-full border-2 border-bg bg-[var(--color-accent)]" />
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-chip px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-[13vw] font-medium leading-[0.95] tracking-tighter text-ink sm:text-[9vw] lg:text-[6.2vw] xl:text-[5.5rem]"
          >
            {profile.heroHeading}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-lg text-base leading-relaxed text-stone lg:text-lg"
          >
            {profile.heroSubtext}
          </motion.p>
        </div>

        {/* Right: portrait, desktop only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative hidden w-full lg:flex lg:items-center lg:justify-center"
        >
          <div className="relative flex h-[340px] w-[280px] items-center justify-center xl:h-[380px] xl:w-[310px]">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-10 rounded-[40%] bg-[var(--color-accent)]/[0.09] blur-2xl"
            />
            <motion.div
              animate={{ scale: [1, 0.85, 1], rotate: [0, -16, 0] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -inset-6 rounded-[45%] bg-[var(--color-accent)]/[0.06] blur-xl"
            />

            <motion.svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -inset-5 h-[calc(100%+40px)] w-[calc(100%+40px)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <rect
                x="3"
                y="3"
                width="94"
                height="94"
                rx="20"
                fill="none"
                stroke="var(--color-accent)"
                strokeOpacity="0.3"
                strokeWidth="0.6"
                strokeDasharray="3 4"
              />
            </motion.svg>

            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
              <Image
                src={imageMegha}
                alt="Portrait of Megha, graphic designer"
                fill
                priority
                sizes="310px"
                className="object-cover grayscale contrast-[1.08] brightness-[0.95]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 border-l border-t border-white/25" />
              <div className="pointer-events-none absolute right-3 top-3 h-3.5 w-3.5 border-r border-t border-white/25" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-ink/90 backdrop-blur-sm">
                  Megha · Designer
                </span>
                <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent)] backdrop-blur-sm">
                  2026
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-stone/60">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-stone/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}