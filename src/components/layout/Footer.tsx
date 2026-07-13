import Link from "next/link";
import { footerNav, socialLinks } from "@/data/nav";
import Wordmark from "@/components/visuals/Wordmark";
import LinkedInIcon from "@/components/visuals/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Practical AI automation for small and mid-sized service businesses —
              built by operators, not marketers.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-border-strong p-2 text-foreground-muted transition-colors hover:text-accent"
                >
                  <LinkedInIcon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerNav).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-foreground">{section}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StreamForge. All rights reserved.</p>
          <p>Automation that runs every day — not a demo.</p>
        </div>
      </div>
    </footer>
  );
}
