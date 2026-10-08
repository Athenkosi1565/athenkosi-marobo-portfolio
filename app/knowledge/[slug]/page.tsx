import Link from "next/link";
import { notFound } from "next/navigation";
import { articleBodies, articles } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  return { title: article ? `${article.title} · Athenkosi Marobo` : "Article" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();
  const body = articleBodies[article.slug] ?? [];
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/#knowledge" className="text-sm text-teal-400">Back to knowledge hub</Link>
      <p className="mt-6 text-xs uppercase tracking-wide text-teal-400">{article.category} · draft</p>
      <h1 className="mt-2 text-3xl font-semibold">{article.title}</h1>
      <div className="mt-6 space-y-4 leading-7 text-[var(--muted)]">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
