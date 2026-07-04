"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "services", label: "Services" },
  { id: "say", label: "Say" },
  { id: "faq", label: "FAQ" },
];

// Fixed vertical index rail, styled like tab markers on a contact sheet.
// Highlights the section currently in view.
export default function IndexRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="focus-ring group flex items-center gap-3"
        >
          <span
            className={`h-[6px] w-[6px] rounded-full transition-all duration-300 ${
              active === id ? "bg-ink scale-125" : "bg-stone/40 group-hover:bg-stone"
            }`}
          />
          <span
            className={`font-mono text-[10px] uppercase tracking-[0.15em] transition-opacity duration-300 ${
              active === id
                ? "opacity-100 text-ink"
                : "opacity-0 group-hover:opacity-60 text-stone"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}
