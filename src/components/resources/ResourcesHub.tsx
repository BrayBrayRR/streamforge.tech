"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { articles } from "@/data/articles";
import type { ResourceCategory } from "@/types";
import { cn } from "@/lib/utils";

const categories: ResourceCategory[] = ["Guides", "Playbooks", "Templates", "Checklists", "Calculators"];

interface ResourceCard {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: ResourceCategory;
}

const resourceCards: ResourceCard[] = [
  ...articles.map((article) => ({
    slug: article.slug,
    href: `/resources/${article.slug}`,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
  })),
  {
    slug: "roi-calculator",
    href: "/roi-calculator",
    title: "ROI calculator",
    excerpt: "Estimate the revenue and labor savings from faster lead follow-up, with every assumption shown.",
    category: "Calculators",
  },
];

export default function ResourcesHub() {
  const [activeCategory, setActiveCategory] = useState<"all" | ResourceCategory>("all");

  const filtered = useMemo(
    () => resourceCards.filter((card) => activeCategory === "all" || card.category === activeCategory),
    [activeCategory]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "border-accent bg-accent-soft text-accent"
              : "border-border-strong text-foreground-muted hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-accent bg-accent-soft text-accent"
                : "border-border-strong text-foreground-muted hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-foreground-muted">
          Nothing in this category yet — check back soon.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((card) => (
            <Link key={card.slug} href={card.href} className="group block h-full">
              <GlassCard className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-start justify-between gap-2">
                  <Badge>{card.category}</Badge>
                  <ArrowUpRight className="size-4 shrink-0 text-foreground-subtle transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{card.excerpt}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
