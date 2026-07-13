import Link from "next/link";
import { Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/seo/JsonLd";
import { articles } from "@/data/articles";
import { bookingUrl } from "@/data/nav";
import { estimateReadingTime, cn } from "@/lib/utils";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { Article } from "@/types";

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ArticlePage({ article }: { article: Article }) {
  const readingTime = estimateReadingTime(article.sections);
  const ctaIndex = Math.floor(article.sections.length / 2);
  const related = article.relatedSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is Article => Boolean(a));
  const path = `/resources/${article.slug}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.metaDescription,
          url: `https://streamforge.tech${path}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path },
        ])}
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <Badge>{article.category}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-foreground-subtle">
              <Clock className="size-3.5" />
              {readingTime} min read
            </span>
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-balance text-lg leading-relaxed text-foreground-muted">
            {article.excerpt}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-subtle">
              On this page
            </p>
            <ul className="mt-4 space-y-3">
              {article.sections.map((section) => (
                <li key={section.heading}>
                  <a
                    href={`#${slugifyHeading(section.heading)}`}
                    className="text-sm text-foreground-muted transition-colors hover:text-accent"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 space-y-10">
          {article.sections.map((section, i) => (
            <div key={section.heading}>
              <Reveal>
                <h2
                  id={slugifyHeading(section.heading)}
                  className="scroll-mt-24 text-xl font-semibold text-foreground"
                >
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-relaxed text-foreground-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              {i === ctaIndex && (
                <Reveal delay={0.05} className="mt-10">
                  <GlassCard className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
                    <p className="text-sm font-medium text-foreground">
                      See what slow follow-up is costing your business.
                    </p>
                    <Button href={bookingUrl}>Book a free automation audit</Button>
                  </GlassCard>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className={cn("mt-20 border-t border-border pt-12")}>
          <p className="text-sm font-medium tracking-wide text-accent">Related</p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="group block">
                <GlassCard className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <Badge>{r.category}</Badge>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{r.excerpt}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
