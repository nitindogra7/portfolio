"use client";

import Image from "next/image";
import imageMegha from "../assets/megha.png";
import { motion } from "framer-motion";
import { profile, skills, experience } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-content grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:py-16"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-4xl font-medium tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.heroHeading}
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-md text-base leading-relaxed text-stone lg:text-lg"
        >
          {profile.heroSubtext}
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-wrap gap-2 border-t border-hairline pt-5"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-chip px-3 py-2 text-sm text-ink"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col divide-y divide-hairline border-t border-hairline"
        >
          {experience.map((item) => (
            <div
              key={item.role + item.place}
              className="grid grid-cols-3 items-center gap-3 py-4"
            >
              <p className="text-sm text-ink">{item.role}</p>
              <p className="text-sm text-stone">{item.place}</p>
              <span className="text-right text-sm text-stone">
                {item.period}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image - Visible on Mobile & Desktop, Hidden on Tablets */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface md:hidden lg:block lg:h-[520px]"
      >
        <Image
          src={imageMegha}
          alt="Portrait of Megha, graphic designer"
          fill
          priority
          sizes="(max-width: 767px) 100vw, (min-width: 1024px) 45vw"
          className="object-cover grayscale"
        />
      </motion.div>
    </section>
  );
}