import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ArticleSection } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(sections: ArticleSection[]): number {
  const wordCount = sections
    .flatMap((section) => section.paragraphs)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
