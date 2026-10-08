"use client";

import { motion } from "framer-motion";
import { Download, FolderGit2, Mail } from "lucide-react";
import { links, profile, socials } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <NetworkField />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.4fr_0.8fr] md:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-400">Cape Town · IT Engineer</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-lg text-[var(--muted)]">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">{profile.hero}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#experience" className="rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-950">View My Experience</a>
            <a href="#projects" className="rounded-lg border border-white/15 px-4 py-2.5 text-sm">View Projects</a>
            <a href="#cv" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm"><Download size={16} /> Download CV</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm"><Mail size={16} /> Contact Me</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm">
            {socials.map((item) => (
              <li key={item.key}>
                <a className="text-[var(--muted)] underline-offset-4 hover:text-[var(--text)] hover:underline" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-5 shadow-glow"
        >
          <p className="font-mono text-xs text-teal-400">snapshot</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-[var(--muted)]">Base</dt><dd>Cape Town</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-[var(--muted)]">Experience</dt><dd>{profile.yearsLabel}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-[var(--muted)]">Focus</dt><dd className="text-right">Zero Trust · M365 · Network</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-[var(--muted)]">CV</dt><dd className="text-right">Placeholder until file is added</dd></div>
          </dl>
          <a href="#projects" className="mt-6 inline-flex items-center gap-2 text-sm text-teal-400">
            <FolderGit2 size={16} /> Project notes and lab
          </a>
          <p className="mt-4 text-xs text-[var(--muted)]">{links.cvNote}</p>
        </motion.aside>
      </div>
    </section>
  );
}

function NetworkField() {
  return (
    <svg className="pointer-events-none absolute -right-10 top-10 hidden h-[420px] w-[520px] opacity-50 md:block" viewBox="0 0 520 420" aria-hidden="true">
      <g fill="none" stroke="#2dd4bf" strokeWidth="1.2">
        <path d="M40 80 H180 L240 140 H400" />
        <path d="M80 220 H200 L260 160 H460" />
        <path d="M60 320 H220 L300 240 H480" />
        <path d="M180 80 V220" />
        <path d="M260 160 V320" />
      </g>
      {[[40, 80], [180, 80], [240, 140], [400, 140], [80, 220], [200, 220], [260, 160], [460, 160], [60, 320], [220, 320], [300, 240], [480, 240]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3} fill={i % 2 ? "#38bdf8" : "#2dd4bf"}>
          <animate attributeName="opacity" values="0.35;1;0.35" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
