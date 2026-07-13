"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/automations/ProductCard";
import NotifyForm from "@/components/automations/NotifyForm";
import { products } from "@/data/products";
import type { Product } from "@/types";

type PlatformFilter = "all" | Product["platform"];
type PriceFilter = "all" | Product["pricingType"];

const platformOptions: { value: PlatformFilter; label: string }[] = [
  { value: "all", label: "All platforms" },
  { value: "n8n", label: "n8n" },
  { value: "zapier", label: "Zapier" },
  { value: "make", label: "Make" },
];

const priceOptions: { value: PriceFilter; label: string }[] = [
  { value: "all", label: "All pricing" },
  { value: "free", label: "Free" },
  { value: "paid", label: "Paid" },
];

export default function AutomationsGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [platform, setPlatform] = useState<PlatformFilter>("all");
  const [price, setPrice] = useState<PriceFilter>("all");

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((p) => {
      if (term && !`${p.name} ${p.category} ${p.outcome}`.toLowerCase().includes(term)) return false;
      if (category !== "all" && p.category !== category) return false;
      if (platform !== "all" && p.platform !== platform) return false;
      if (price !== "all" && p.pricingType !== price) return false;
      return true;
    });
  }, [search, category, platform, price]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="relative flex-1 sm:min-w-[240px]">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-foreground-subtle" />
          <input
            type="text"
            aria-label="Search automations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search automations…"
            className="w-full rounded-full border border-border-strong bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-subtle focus:border-accent focus:outline-none"
          />
        </div>

        <select
          aria-label="Filter by category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-border-strong bg-white/[0.03] px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          {categories.map((c) => (
            <option key={c} value={c} className="bg-background-elevated">
              {c === "all" ? "All categories" : c}
            </option>
          ))}
        </select>

        <select
          aria-label="Filter by platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value as PlatformFilter)}
          className="rounded-full border border-border-strong bg-white/[0.03] px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          {platformOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-background-elevated">
              {opt.label}
            </option>
          ))}
        </select>

        <select
          aria-label="Filter by pricing"
          value={price}
          onChange={(e) => setPrice(e.target.value as PriceFilter)}
          className="rounded-full border border-border-strong bg-white/[0.03] px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          {priceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-background-elevated">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-foreground-muted">
          No automations match those filters yet.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-white/[0.02] px-6 py-10 text-center">
        <p className="text-base font-medium text-foreground">More automations shipping monthly</p>
        <p className="max-w-md text-sm text-foreground-muted">
          Get notified when new workflows land in the library — no spam, just new releases.
        </p>
        <NotifyForm />
      </div>
    </div>
  );
}
