import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">About</p>
      <h2 className="mt-2 text-3xl font-semibold">About me</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4 text-[var(--muted)] leading-7">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="card grid grid-cols-2 gap-2 p-4 text-sm">
          {profile.focusAreas.map((item) => (
            <li key={item} className="rounded-md border border-white/10 px-2 py-1.5">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
