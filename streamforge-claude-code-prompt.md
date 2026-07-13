# StreamForge Website Rebuild — Claude Code Prompt

You are acting as a senior SaaS product designer, CRO strategist, copywriter, and frontend engineer. Build a **production-ready, deployable marketing website** for StreamForge — not a blueprint, not a mockup. Working code that deploys to **GitHub Pages** (static hosting) today.

The core promise the entire site communicates: **"We automate your business so you stop losing time, leads, and revenue."**

Quality bar: Stripe, Linear, Vercel, Clay. If a section would look at home on a WordPress agency template, redo it.

---

## Company context

StreamForge helps small and medium-sized businesses automate repetitive work, respond to leads instantly, and grow revenue with practical AI automation. Three offerings:

1. **AI Lead Follow-Up Automation** — responds to inbound leads instantly, answers common questions, qualifies prospects, books appointments, syncs with CRMs. Primary market: small trade businesses (HVAC, plumbing, roofing, etc.).
2. **LinkedIn Ghostwriting & Content** — personal branding, thought leadership, and LinkedIn growth for founders, consultants, agencies, and service providers.
3. **Automation Products** — downloadable ready-to-use workflows. Flagship: an n8n Email Blaster sold on Gumroad. Long-term vision: a full automation marketplace.

---

## Before writing any code — ask me for

1. My booking/calendar link (Cal.com or Calendly) — use a placeholder `#book` until provided
2. The Gumroad URL for the n8n Email Blaster
3. Any real client results, testimonials, or metrics I can share
4. Logo/brand assets (if none, design a simple wordmark)
5. Social links (LinkedIn, X, YouTube)
6. The GitHub repo name, and whether streamforge.tech already points to GitHub Pages (custom domain vs. `username.github.io/repo` — this determines whether a `basePath` is needed)
7. An email-capture provider if I have one (Formspree, Buttondown, ConvertKit) — GitHub Pages has no backend, so forms must post to an external service or be cut

Do not invent real-sounding client names, review counts, or results. Anything illustrative must be labeled as such.

---

## Tech stack (do not deviate without asking)

- **Next.js (latest, App Router) + TypeScript** with **full static export** (`output: 'export'` in next.config, `images: { unoptimized: true }`) — the host is GitHub Pages, which serves static files only. That means: no server actions, no API routes, no middleware, no runtime image optimization, and every dynamic route must use `generateStaticParams`.
- **Tailwind CSS** with a proper token system (colors, spacing, radii defined once)
- **Framer Motion** for animation; respect `prefers-reduced-motion` throughout
- **lucide-react** for icons
- **No CMS in v1.** All content lives in typed data files under `src/data/` (industries, products, FAQs, case studies, resources, comparisons). Pages are generated from data via `generateStaticParams` — this is how the site scales to 50+ industry pages and a large automation library without touching layout code.
- **No stock photos anywhere.** Every visual is a code-built UI mockup, SVG illustration, or animated component (chat interfaces, workflow diagrams, dashboard fragments, notification cards).

## Deployment (GitHub Pages)

- Set up a **GitHub Actions workflow** (`.github/workflows/deploy.yml`) that on every push to `main`: installs deps → `next build` (static export to `out/`) → deploys via `actions/upload-pages-artifact` + `actions/deploy-pages`.
- Include a `.nojekyll` file and, if the custom domain streamforge.tech is used, a `public/CNAME` containing `streamforge.tech`.
- If the site is served from `username.github.io/repo-name` instead of a custom domain, set `basePath` and `assetPrefix` accordingly — ask me which applies before configuring.
- After the first successful build, verify the export locally with `npx serve out` and confirm deep links (e.g. `/industries/hvac`) load correctly.
- The interactive demo, ROI calculator, and library search/filters must all run fully client-side (they're deterministic/in-browser anyway — no backend exists).
- OG images: generate static images at build time or ship pre-made ones in `/public` — no runtime image generation.

## Working method

1. **Start in plan mode.** Propose the file structure, data models, and component inventory before writing code. Wait for my approval.
2. **Build in the phases below, in order.** At the end of each phase: run `npm run build`, fix all errors and warnings, and give me a short summary of what to review before continuing.
3. **Depth over breadth.** A polished homepage beats twelve shallow pages. Never move to the next phase with placeholder text, lorem ipsum, or empty sections left behind.
4. Commit after each phase with a descriptive message.

---

## Design system (define first, in Phase 1)

- **Dark mode default.** Near-black background (not pure `#000`), one restrained accent (electric blue or amber-orange — propose both, I'll pick), high-contrast type.
- **Typography:** Inter or Geist. Tight tracking on headlines, generous line-height on body, real typographic scale.
- **Surfaces:** subtle glassmorphism on cards (low-opacity fills, 1px borders, backdrop blur) — used sparingly, not on everything.
- **Backgrounds:** faint animated gradient meshes or dot grids at very low opacity. Never distracting.
- **Motion rules:** scroll-triggered fade/rise on section entry (once, no re-trigger), hover lifts on cards, animated numbers on stats. Nothing bounces. Everything under 400ms except ambient background movement.
- Mobile-first at 375px, then scale up. Test every section at mobile width.

## Copy rules (apply to every word on the site)

- Outcomes, not technology. "Never miss another lead" — not "AI-powered solutions."
- **Banned:** revolutionize, cutting-edge, next-generation, leverage, unlock, supercharge, game-changing, seamless, empower.
- Every number must be conservative and either real or clearly labeled illustrative.
- Every section must answer one of: *What do they do? Why trust them? Why do I need this? Why now? What happens next?* If a section answers none, cut it.
- Sentence-case headlines. Short sentences. Written like an operator, not a marketer.

---

## Site map

```
/                          Homepage
/services/lead-follow-up   Service page
/services/linkedin-content Service page
/automations               Automation library (marketplace)
/automations/[slug]        Product page (flagship: n8n-email-blaster)
/industries                Industry index
/industries/[slug]         Industry landing pages
/roi-calculator            Standalone calculator (shareable/linkable)
/resources                 Resource hub
/resources/[slug]          Article template
/compare/[slug]            Comparison pages (SEO)
/about                     Company story
/book                      Demo booking
/privacy, /terms           Legal
```

Navigation: logo, Services (dropdown), Automations, Industries, Resources, About — with a persistent "Book a demo" button. Glass navbar that gains a border on scroll. Mobile: full-screen overlay menu.

---

## Phase 1 — Design system + homepage

Build the homepage top to bottom. Sections in order:

**1. Hero.** Headline options to draft and pick from, in the spirit of: "Your leads are calling. Your competitors answer in 8 seconds." or "Stop losing jobs to whoever replies first." Subhead: one sentence explaining StreamForge automates lead response, follow-up, and booking for service businesses. Primary CTA "Book a free automation audit," secondary "See it work" (scrolls to interactive demo). Right side / below on mobile: an **animated live-workflow visualization** — a simulated inbound lead card appears, AI reply threads in with a typing indicator, a calendar booking confirms, a CRM row updates. Loops slowly, pauses on hover. Under CTAs: 3 small trust indicators (e.g., "Setup in under 2 weeks · Works with your existing CRM · No long-term contracts").

**2. Trust bar.** "Works with the tools you already use" + monochrome logos/wordmarks of real integrations only: n8n, Zapier, HubSpot, Jobber, ServiceTitan, Housecall Pro, Google Calendar, Gmail, Outlook, Twilio, Slack, QuickBooks, Stripe. Slow marquee, pauses on hover.

**3. Problem section.** "What slow follow-up actually costs you." Three or four stat cards with animated counters, each grounded in citable lead-response research (e.g., odds of contacting a lead drop dramatically after the first 5 minutes; large shares of inbound calls to SMBs go unanswered; most leads buy from the vendor that responds first). Cite sources in small text; if a stat can't be sourced, don't use it. Close with a one-line mini-narrative: a lead comes in at 7:43pm → no reply until 9am → they booked with a competitor at 8:02pm.

**4. Solution timeline.** Scroll-driven vertical timeline, 6 steps: inquiry arrives → AI responds in seconds → answers questions & qualifies → books the appointment → CRM updated → owner notified. Each step activates as it enters the viewport with a small UI fragment (message bubble, calendar card, CRM row, phone notification). Caption: "Total elapsed time: 3 minutes. Your involvement: zero."

**5. Services.** Three cards (Lead Follow-Up / LinkedIn Content / Automation Products): value prop, "built for" line, 3 benefit bullets, mini-visual, CTA to its page. Hover: lift + accent border.

**6. Interactive demo.** A scripted (deterministic, no backend) chat simulation. Visitor picks a persona ("Homeowner with a broken AC," "Roof leak emergency," "Quote request"), types or picks questions, and watches the AI respond with realistic typing delays: answers, qualifies (location, urgency, budget window), offers appointment slots, confirms booking. A side panel updates live: lead score, captured fields, CRM entry created, notification sent. Caption: "This is a simulation of a real StreamForge deployment. Your version is trained on your services, pricing, and availability."

**7. ROI calculator (inline teaser + full version at /roi-calculator).** Inputs (sliders + fields): monthly inbound leads, average job value, close rate on quoted jobs, % of leads currently missed or answered after 30+ minutes, weekly hours staff spend on follow-up, loaded hourly cost. **Math — show assumptions inline, never hide them:**
   - `recoveredLeads = leads × missedShare × recaptureRate` (recaptureRate 25–40%, user-adjustable slider, default 30%, labeled "conservative")
   - `addedRevenue = recoveredLeads × closeRate × avgJobValue`
   - `laborSavings = weeklyHours × 52/12 × hourlyCost × 0.6` (60% of follow-up work automatable)
   - Show monthly + annual, animated counters, and a permanent line: "Estimates based on your inputs and the stated assumptions — not a guarantee."

**8. Case studies.** 2–3 before/after cards with a small response-time or booked-jobs chart (build a tiny chart component; no chart library needed). Structure: business type, the problem, what was deployed, measured outcome, timeframe. **Label clearly as illustrative composites unless I supply real data** — e.g., "Illustrative example based on a typical deployment."

**9. Products teaser.** Flagship n8n Email Blaster card + "Browse the automation library →". Design the card so it's obviously the first of many.

**10. Industries grid.** 8–10 industry cards (HVAC, Plumbing, Roofing, Electrical, Landscaping, Painting, Real Estate, Law Firms, Insurance, General Contractors), each linking to `/industries/[slug]`, each with one industry-specific pain line ("Every missed emergency call is a $400 job for someone else").

**11. About strip.** 3–4 sentences. Builders who automate real operations; systems that run every day, not demos. No "passionate about innovation" filler. Link to /about.

**12. FAQ.** 8–10 accordion items handling real objections: pricing model, setup time, "will it sound robotic?", what happens when AI doesn't know an answer (human handoff), CRM compatibility, data security, contracts/cancellation, support, "we already have a receptionist," "my industry is different."

**13. Final CTA.** Full-width: "Find out what you're losing to slow follow-up." Primary: book audit. Secondary: try the ROI calculator. Then footer: nav columns (Services, Automations, Industries, Resources, Company, Legal), contact, socials, short brand line.

**Phase 1 exit criteria:** builds clean, works at 375px, all animations respect reduced-motion, zero placeholder copy.

## Phase 2 — Service pages + industry template

- Two full service pages following the homepage's persuasion arc (problem → how it works → who it's for → proof → FAQ → CTA).
- One industry page **template** driven by `src/data/industries.ts` (per-industry: pain points, workflow example, demo script variant, use cases, FAQ, meta title/description). Ship 6 industries with fully distinct copy — no find-and-replace of the industry name. Wire the remaining grid cards to the template.

## Phase 3 — Automation library + product pages

- `/automations`: searchable/filterable grid (category, price free/paid, platform: n8n/Zapier/Make). Product cards: name, category tag, one-line outcome, price, thumbnail (code-built visual). Designed to look right with 4 products **and** with 60 — include a "More automations shipping monthly — get notified" email capture for now.
- Product page template from `src/data/products.ts`: overview, what it does (step list), requirements, installation guide (numbered, real n8n steps), screenshots section, video embed slot, FAQ, price + buy CTA (Gumroad link), related products. Ship the n8n Email Blaster page fully; add 2–3 clearly labeled "coming soon" entries.

## Phase 4 — Resources, about, comparisons, legal

- `/resources`: hub with category filters (Guides, Playbooks, Templates, Checklists, Calculators). Article template with TOC, reading time, inline CTA, related posts. Ship 3 real articles I can review (e.g., "The true cost of a 24-hour lead response," "Automating follow-up for HVAC: a practical playbook," "n8n vs. Zapier for small service businesses").
- `/about`: short authentic story per copy rules.
- Two comparison pages, genuinely educational with honest tradeoff tables: "AI follow-up vs. hiring an answering service" and "AI follow-up vs. hiring an office admin."
- Privacy + terms with reasonable defaults, marked for legal review.

## Phase 5 — SEO, performance, QA

- Next.js Metadata API on every route: unique titles/descriptions, OG images (generate a branded OG template), canonical URLs, sitemap.xml, robots.txt.
- JSON-LD: Organization, Product (automations), FAQPage (FAQ sections), Article (resources), BreadcrumbList.
- Semantic HTML, one h1 per page, proper heading hierarchy, alt text on all visuals.
- Performance: static generation everywhere, `next/font`, lazy-load below-fold animation-heavy components, no layout shift.
- **Final QA checklist (run and report):** `npm run build` clean static export · every route renders from the `out/` folder via `npx serve out`, including deep links · no console errors · mobile 375px pass on every page · keyboard navigation works · reduced-motion pass · every CTA wired to a real destination · grep for TODO/lorem/placeholder returns nothing · Lighthouse ≥ 95 performance / 100 accessibility-SEO-best-practices on homepage · GitHub Actions deploy workflow succeeds end to end.

---

## Honesty constraints (hard rules)

- No fabricated client names, logos, review counts, or star ratings.
- No invented statistics — source it or cut it.
- Illustrative examples always labeled as illustrative.
- ROI math always shows its assumptions.
- If a claim can't survive a skeptical buyer reading it twice, rewrite it.
