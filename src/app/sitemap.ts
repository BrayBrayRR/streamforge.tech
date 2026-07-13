import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { articles } from "@/data/articles";
import { comparisons } from "@/data/comparisons";

export const dynamic = "force-static";

const baseUrl = "https://streamforge.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services/lead-follow-up`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/linkedin-content`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/automations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/roi-calculator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/book`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = products
    .filter((p) => p.status === "available")
    .map((product) => ({
      url: `${baseUrl}/automations/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const comparisonRoutes: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
    url: `${baseUrl}/compare/${comparison.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...industryRoutes, ...productRoutes, ...articleRoutes, ...comparisonRoutes];
}
