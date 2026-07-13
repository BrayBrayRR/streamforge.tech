import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
