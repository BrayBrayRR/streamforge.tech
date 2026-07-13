import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/resources/ArticlePage";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.metaDescription,
    path: `/resources/${article.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
