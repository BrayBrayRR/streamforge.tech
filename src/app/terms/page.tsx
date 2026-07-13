import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "The terms that apply to using StreamForge's website and services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Terms of service
      </h1>
      <p className="mt-3 text-sm text-foreground-subtle">Last updated: 2026.</p>

      <div className="mt-6 rounded-xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm leading-relaxed text-foreground">
        This is a template terms of service covering reasonable defaults for a small business
        website. It has not been reviewed by an attorney — have it reviewed before relying on it
        for legal compliance.
      </div>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Acceptance of terms</h2>
          <p className="mt-2">
            By using streamforge.tech or engaging StreamForge for services, you agree to these
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Services</h2>
          <p className="mt-2">
            StreamForge provides AI lead follow-up automation, LinkedIn ghostwriting and content
            services, and downloadable automation products. The specific scope of a service
            engagement is confirmed directly with you before work begins.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Payment terms</h2>
          <p className="mt-2">
            Lead follow-up and LinkedIn content engagements run month to month with no long-term
            contract, and can be cancelled with notice. Automation products are one-time purchases
            processed through Gumroad; refunds for those products follow Gumroad&rsquo;s standard
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
          <p className="mt-2">
            You agree not to use StreamForge&rsquo;s services for unlawful purposes, or in a way
            that could damage, disable, or impair the service for other users.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Disclaimers</h2>
          <p className="mt-2">
            Figures shown in the ROI calculator and any illustrative case studies on this site are
            estimates or illustrative examples based on stated assumptions, not guarantees of
            results. Automated responses are built around the information you provide and may
            occasionally require human follow-up.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
          <p className="mt-2">
            To the extent permitted by law, StreamForge is not liable for indirect, incidental, or
            consequential damages arising from use of the services or website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Termination</h2>
          <p className="mt-2">
            Either party may end a service engagement with reasonable notice as agreed at the
            start of the engagement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Changes to these terms</h2>
          <p className="mt-2">
            If these terms change, we&rsquo;ll update the date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
