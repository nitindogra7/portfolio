"use client";

import { motion } from "framer-motion";
import { process } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 pb-14"
        >
          <span className="text-sm text-stone">How I Work</span>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            A simple, clear process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-4 border-t border-hairline pt-6"
            >
              <span className="font-mono text-sm text-stone">{step.number}</span>
              <h3 className="font-display text-2xl font-medium text-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-stone">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
