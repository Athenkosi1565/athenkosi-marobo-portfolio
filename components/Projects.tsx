import { projects } from "@/lib/data";
import { ConceptVisual, LabDiagram } from "./Visuals";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Projects</p>
      <h2 className="mt-2 text-3xl font-semibold">Lab and concepts</h2>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        GitHub and live links are placeholders until real URLs are added in lib/data.ts. Concepts are labelled as concepts.
      </p>
      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <article key={project.slug} className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
                {project.visual === "lab" ? <LabDiagram /> : <ConceptVisual kind={project.visual} />}
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-teal-400">{project.kind}</p>
                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
                <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
                  {project.highlights.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/10 px-2 py-1 text-xs">{tech}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-4 text-sm">
                  <a className="text-teal-400 underline-offset-4 hover:underline" href={project.github}>GitHub (placeholder)</a>
                  {project.demo ? <a href={project.demo}>Live demo</a> : <span className="text-[var(--muted)]">Live demo not connected</span>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
