"use client";

import { useState } from "react";
import { roles } from "@/lib/data";

export function Timeline() {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Career</p>
      <h2 className="mt-2 text-3xl font-semibold">Experience</h2>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Dates are not listed because they were not provided. Add them in lib/data.ts when you want them on the page.
      </p>
      <ol className="mt-8 space-y-3">
        {roles.map((role, index) => {
          const expanded = open === index;
          return (
            <li key={role.title} className="card overflow-hidden">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                <span>
                  <span className="block font-medium">{role.title}</span>
                  <span className="text-sm text-[var(--muted)]">{role.org} · {role.period}</span>
                </span>
                <span className="text-teal-400" aria-hidden="true">{expanded ? "–" : "+"}</span>
              </button>
              {expanded && (
                <ul className="grid gap-2 px-5 pb-5 text-sm text-[var(--muted)] sm:grid-cols-2">
                  {role.points.map((point) => (
                    <li key={point} className="rounded-md border border-white/10 px-3 py-2">{point}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
