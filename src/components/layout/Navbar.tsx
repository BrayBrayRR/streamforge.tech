"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { mainNav, bookingUrl } from "@/data/nav";
import Wordmark from "@/components/visuals/Wordmark";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "glass border-b border-border shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" aria-label="StreamForge home">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocus={() => setOpenDropdown(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2 transition-opacity duration-200",
                      openDropdown === item.label
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    <div className="glass w-72 rounded-2xl p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.05]"
                        >
                          <p className="text-sm font-medium text-foreground">
                            {child.label}
                          </p>
                          {child.description && (
                            <p className="mt-0.5 text-xs text-foreground-muted">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button href={bookingUrl} className="hidden md:inline-flex">
              Book a demo
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-full border border-border-strong p-2.5 text-foreground md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
