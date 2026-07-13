import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonPage from "@/components/compare/ComparisonPage";
import { comparisons } from "@/data/comparisons";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return buildMetadata({
    title: comparison.title,
    description: comparison.metaDescription,
    path: `/compare/${comparison.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();
  return <ComparisonPage comparison={comparison} />;
}
