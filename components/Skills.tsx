"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/data";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Skills</p>
      <h2 className="mt-2 text-3xl font-semibold">Technical skills</h2>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Labels describe exposure, not a scored proficiency. Nothing here is presented as a certification.
      </p>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={active === g.id}
            onClick={() => setActive(g.id)}
            className={`rounded-full border px-3 py-1.5 text-sm ${active === g.id ? "border-teal-400 bg-teal-400/10 text-teal-300" : "border-white/10"}`}
          >
            {g.title}
          </button>
        ))}
      </div>
      <div className="card mt-5 p-5" role="tabpanel">
        <h3 className="text-lg font-medium">{group.title}</h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{group.summary}</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {group.skills.map((skill) => (
            <li key={skill.name} className="rounded-lg border border-white/10 p-3">
              <p className="font-medium">{skill.name}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-teal-400">{skill.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
