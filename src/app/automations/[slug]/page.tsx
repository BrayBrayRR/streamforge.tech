import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/automations/ProductDetail";
import { products } from "@/data/products";

const availableProducts = products.filter((p) => p.status === "available");

export function generateStaticParams() {
  return availableProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = availableProducts.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.outcome,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = availableProducts.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
