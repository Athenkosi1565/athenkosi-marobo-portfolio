import { currentlyLearning, education, learning } from "@/lib/data";

export function Learning() {
  return (
    <section id="learning" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Learning</p>
      <h2 className="mt-2 text-3xl font-semibold">Certifications and learning</h2>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        These are studies, training and learning tracks. They are not listed as passed exams unless a credential is added later.
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {learning.map((item) => (
          <li key={item.name} className="card p-4">
            <a href={item.href} className="font-medium hover:text-teal-400">{item.name}</a>
            <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
          </li>
        ))}
      </ul>
      <div className="card mt-6 p-5">
        <h3 className="text-lg font-medium">Currently learning</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {currentlyLearning.map((item) => (
            <li key={item} className="rounded-full bg-teal-400/10 px-3 py-1 text-sm text-teal-300">{item}</li>
          ))}
        </ul>
      </div>
      <div id="education" className="mt-10">
        <h3 className="text-2xl font-semibold">Education</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <li key={item.place} className="card p-4">
              <p className="font-medium">{item.place}</p>
              <p className="text-sm text-[var(--muted)]">{item.focus}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
