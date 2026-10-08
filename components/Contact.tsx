"use client";

import { FormEvent, useState } from "react";
import { cvReady, links, profile, socials } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [errors, setErrors] = useState<string[]>([]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const honeypot = String(form.get("company_website") || "");
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const nextErrors: string[] = [];
    if (honeypot) return;
    if (name.length < 2) nextErrors.push("Add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.push("Add a valid email.");
    if (message.length < 12) nextErrors.push("Message should be at least a short paragraph.");
    setErrors(nextErrors);
    if (nextErrors.length) {
      setStatus("error");
      return;
    }
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Contact</p>
      <h2 className="mt-2 text-3xl font-semibold">Let's connect</h2>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Whether you're looking for an IT support engineer, systems engineer, infrastructure specialist or someone passionate about Zero Trust and cybersecurity, I'd be happy to connect.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card p-5 text-sm">
          <p className="text-[var(--muted)]">Email</p>
          <p className="mt-1">{profile.email}</p>
          <ul className="mt-4 space-y-2">
            {socials.map((item) => (
              <li key={item.key}><a className="text-teal-400" href={item.href}>{item.label}</a></li>
            ))}
          </ul>
          <div id="cv" className="mt-6 border-t border-white/10 pt-4">
            <p className="font-medium">Download CV</p>
            {cvReady ? (
              <a className="mt-2 inline-block rounded-lg bg-teal-500 px-3 py-2 text-slate-950" href="/cv/athenkosi-marobo-cv.pdf">Open CV PDF</a>
            ) : (
              <p className="mt-2 text-[var(--muted)]">{links.cvNote}</p>
            )}
          </div>
        </div>
        <form onSubmit={onSubmit} className="card space-y-3 p-5" noValidate>
          <label className="block text-sm">Name
            <input name="name" className="mt-1 w-full rounded-lg border border-white/15 px-3 py-2" autoComplete="name" required />
          </label>
          <label className="block text-sm">Email
            <input name="email" type="email" className="mt-1 w-full rounded-lg border border-white/15 px-3 py-2" autoComplete="email" required />
          </label>
          <label className="block text-sm">Company
            <input name="company" className="mt-1 w-full rounded-lg border border-white/15 px-3 py-2" autoComplete="organization" />
          </label>
          <label className="block text-sm">Message
            <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border border-white/15 px-3 py-2" required />
          </label>
          <label className="absolute -left-[9999px]" aria-hidden="true">Website
            <input name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
          {status === "error" && (
            <ul className="text-sm text-rose-300">{errors.map((err) => <li key={err}>{err}</li>)}</ul>
          )}
          {status === "sent" && (
            <p className="text-sm text-teal-300" role="status">
              Message checked locally. Email delivery is not connected yet — use LinkedIn or add a form endpoint in this component.
            </p>
          )}
          <button type="submit" className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950">Send message</button>
        </form>
      </div>
    </section>
  );
}
