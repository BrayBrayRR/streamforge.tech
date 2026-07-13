import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How StreamForge collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Privacy policy
      </h1>
      <p className="mt-3 text-sm text-foreground-subtle">Last updated: 2026.</p>

      <div className="mt-6 rounded-xl border border-accent/30 bg-accent-soft px-5 py-4 text-sm leading-relaxed text-foreground">
        This is a template privacy policy covering reasonable defaults for a small business
        website. It has not been reviewed by an attorney — have it reviewed before relying on it
        for legal compliance.
      </div>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground-muted">
        <section>
          <h2 className="text-lg font-semibold text-foreground">What this covers</h2>
          <p className="mt-2">
            This policy describes how StreamForge (&ldquo;we,&rdquo; &ldquo;us&rdquo;) handles
            information collected through streamforge.tech and the services described on it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
          <p className="mt-2">
            We collect information you provide directly — for example, your email address when
            you sign up to be notified about new automations, or scheduling details when you book
            a call. We don&rsquo;t collect payment information directly; purchases of automation
            products are processed by Gumroad under its own privacy policy, and demo bookings are
            scheduled through Calendly under its own privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">How we use information</h2>
          <p className="mt-2">
            Information you provide is used to respond to your inquiry, notify you about new
            automations if you asked to be, and deliver the services you engage us for. We don&rsquo;t
            sell your information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Third-party services</h2>
          <p className="mt-2">
            This site uses a small number of third-party services to operate: Calendly for
            scheduling, Formspree for form submissions, Gumroad for processing automation product
            purchases, and GitHub Pages for hosting. Each of these providers may process data
            under their own privacy policies when you interact with the relevant part of the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
          <p className="mt-2">
            We keep information for as long as reasonably necessary to provide the service you
            requested, or until you ask us to delete it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
          <p className="mt-2">
            You can ask us what information we hold about you, request a correction, or request
            deletion at any time using the booking link on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">Changes to this policy</h2>
          <p className="mt-2">
            If this policy changes, we&rsquo;ll update the date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
