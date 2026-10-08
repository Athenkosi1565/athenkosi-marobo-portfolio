import { dashboard, services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Work</p>
      <h2 className="mt-2 text-3xl font-semibold">What I can do</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <li key={item} className="card px-4 py-3 text-sm">{item}</li>
        ))}
      </ul>
      <div id="dashboard" className="mt-12">
        <h3 className="text-2xl font-semibold">IT Engineer dashboard</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">A snapshot of the work, not a claim of certified expert status.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dashboard.map((card) => (
            <li key={card.label} className="card p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{card.label}</p>
              <p className="mt-2 text-xl font-semibold text-teal-300">{card.value}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{card.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
