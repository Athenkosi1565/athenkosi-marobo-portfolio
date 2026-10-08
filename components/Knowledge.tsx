import Link from "next/link";
import { articles, knowledgeCategories } from "@/lib/data";

export function Knowledge() {
  return (
    <section id="knowledge" className="mx-auto max-w-6xl px-4 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">Knowledge hub</p>
      <h2 className="mt-2 text-3xl font-semibold">Notes from the work</h2>
      <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
        Draft articles you can edit in lib/data.ts. They are written from the experience described on this site, and marked as drafts.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
        {knowledgeCategories.map((cat) => (
          <li key={cat} className="rounded-full border border-white/10 px-2 py-1">{cat}</li>
        ))}
      </ul>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {articles.map((article) => (
          <li key={article.slug} className="card p-4">
            <p className="text-xs text-teal-400">{article.category} · {article.reading} · draft</p>
            <h3 className="mt-2 font-medium">
              <Link href={`/knowledge/${article.slug}`} className="hover:text-teal-300">{article.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
