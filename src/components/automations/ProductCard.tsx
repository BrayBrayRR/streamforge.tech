import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import WorkflowIcon from "@/components/visuals/WorkflowIcon";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const platformLabel: Record<Product["platform"], string> = {
  n8n: "n8n",
  zapier: "Zapier",
  make: "Make",
};

export default function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.status === "coming-soon";

  const card = (
    <GlassCard
      className={cn(
        "flex h-full flex-col transition-all duration-300",
        !isComingSoon && "hover:-translate-y-1 hover:border-accent/40"
      )}
    >
      <div className="h-20 overflow-hidden rounded-xl">
        <WorkflowIcon />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Badge>{platformLabel[product.platform]}</Badge>
        <span className="text-xs text-foreground-subtle">{product.category}</span>
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">{product.outcome}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{product.priceLabel}</span>
        {isComingSoon ? (
          <Badge>Coming soon</Badge>
        ) : (
          <span className="text-sm font-medium text-accent">View →</span>
        )}
      </div>
    </GlassCard>
  );

  if (isComingSoon) {
    return <div className="opacity-70">{card}</div>;
  }

  return (
    <Link href={`/automations/${product.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
