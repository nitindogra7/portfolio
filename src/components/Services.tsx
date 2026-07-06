"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="lg:border-t lg:border-hairline">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 pb-10 lg:pb-16"
        >
          <span className="text-sm text-stone">Services</span>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            What I can help with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-hairline bg-surface p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset,0_16px_32px_-24px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-[var(--color-accent)]/35 lg:p-9"
            >
              {/* Ghost number — signature element, echoes testimonial quote-mark motif */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7.5rem] font-medium leading-none text-ink/[0.04] transition-colors duration-300 group-hover:text-[var(--color-accent)]/[0.07] lg:text-[9rem]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline bg-chip px-2.5 py-1 font-mono text-[10px] text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative flex flex-col gap-3">
                <h3 className="font-display text-2xl font-medium text-ink lg:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-stone lg:text-[0.95rem]">
                  {service.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}