"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 pb-14"
        >
          <span className="text-sm text-stone">Services</span>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            What I can help with
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span className="font-mono text-xs text-stone">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="w-full max-w-[220px] font-display text-2xl font-medium text-ink">
                {service.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-stone">
                {service.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
