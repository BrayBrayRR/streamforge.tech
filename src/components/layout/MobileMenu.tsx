"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { mainNav, bookingUrl } from "@/data/nav";
import Button from "@/components/ui/Button";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <span className="text-sm font-medium text-foreground-muted">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="rounded-full border border-border-strong p-2 text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-3xl font-semibold tracking-tight text-foreground"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-1 flex flex-col gap-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="py-1 text-base text-foreground-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <Button href={bookingUrl} size="lg" className="w-full" onClick={onClose}>
              Book a demo
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
