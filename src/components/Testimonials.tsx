"use client";

import { motion } from "framer-motion";
import { testimonials, stats } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="say" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 pb-14"
        >
          <span className="text-sm text-stone">Client Reviews</span>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            What clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between gap-8 rounded-2xl border border-hairline bg-surface p-7"
            >
              <blockquote className="text-base leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-sm text-stone">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-hairline pt-14 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-medium text-ink lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-stone">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
