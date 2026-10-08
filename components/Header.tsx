"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Learning", "#learning"],
  ["Knowledge", "#knowledge"],
  ["Contact", "#contact"]
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-[var(--accent)]">.</span>
          <span className="ml-2 hidden text-xs font-normal text-[var(--muted)] sm:inline">Cape Town</span>
        </a>
        <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] lg:flex" aria-label="Primary">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-[var(--text)]">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="rounded-lg border border-white/10 p-2"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="hidden rounded-lg bg-teal-500 px-3 py-2 text-sm font-medium text-slate-950 sm:inline">
            Contact
          </a>
          <button type="button" className="rounded-lg border border-white/10 p-2 lg:hidden" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mobile">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="block py-2 text-sm" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
