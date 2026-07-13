import type { Product } from "@/types";
import { gumroadUrl } from "@/data/nav";

export const products: Product[] = [
  {
    slug: "n8n-email-blaster",
    name: "n8n email blaster",
    category: "Email automation",
    platform: "n8n",
    pricingType: "paid",
    priceLabel: "Buy once on Gumroad",
    outcome: "Send segmented email campaigns from your own n8n instance — no monthly platform fee.",
    status: "available",
    badge: "Flagship",
    href: gumroadUrl,
    overview:
      "A ready-to-run workflow for sending segmented email campaigns straight from your own n8n instance. Import it, connect your list and email provider, and send your first campaign the same day — no monthly email platform fee, no per-contact pricing.",
    whatItDoes: [
      "Pulls your contact list from a Google Sheet, Airtable base, or CSV import",
      "Splits recipients into segments based on tags or custom fields",
      "Sends personalized emails through your existing SMTP provider or email API",
      "Logs delivery status and skips duplicates on repeat sends",
    ],
    requirements: [
      "A working n8n instance (self-hosted or n8n Cloud)",
      "An SMTP provider or transactional email API (e.g. Gmail, SendGrid, Postmark)",
      "A contact list in Google Sheets, Airtable, or CSV format",
    ],
    installSteps: [
      {
        title: "Import the workflow",
        description: "Download the .json workflow file and import it into your n8n instance from Workflows → Import from File.",
      },
      {
        title: "Connect your contact source",
        description: "Add your Google Sheets, Airtable, or CSV credentials to the Read Data node and point it at your contact list.",
      },
      {
        title: "Configure your email credentials",
        description: "Add your SMTP or email API credentials to the Send Email node.",
      },
      {
        title: "Set your segments and template",
        description: "Define the tags or fields used to split recipients, and customize the email template with your merge fields.",
      },
      {
        title: "Run a test send",
        description: "Trigger the workflow manually against a small test list to confirm formatting and delivery before going live.",
      },
      {
        title: "Activate the workflow",
        description: "Turn on the workflow trigger (schedule or manual) to start sending campaigns.",
      },
    ],
    faqs: [
      {
        question: "Do I need to know how to code?",
        answer: "No — the workflow is pre-built. You'll fill in credentials and list details, not write logic.",
      },
      {
        question: "Does this work with n8n Cloud or only self-hosted?",
        answer: "Both. The workflow imports the same way on either.",
      },
      {
        question: "Can I use my own email provider?",
        answer: "Yes — any SMTP provider or transactional email API supported by n8n's Send Email node works.",
      },
      {
        question: "What if I get stuck during setup?",
        answer: "The purchase includes the setup guide, and you can reach out directly if something doesn't fit your setup.",
      },
    ],
    relatedSlugs: ["missed-call-textback", "review-request-automation"],
  },
  {
    slug: "missed-call-textback",
    name: "Missed call text-back",
    category: "Missed call recovery",
    platform: "n8n",
    pricingType: "paid",
    priceLabel: "Coming soon",
    outcome: "Automatically texts back missed calls so no inquiry goes silent.",
    status: "coming-soon",
  },
  {
    slug: "review-request-automation",
    name: "Review request automation",
    category: "Review generation",
    platform: "zapier",
    pricingType: "paid",
    priceLabel: "Coming soon",
    outcome: "Sends a review request automatically after a job is marked complete.",
    status: "coming-soon",
  },
  {
    slug: "lead-router",
    name: "Lead router",
    category: "Lead routing",
    platform: "make",
    pricingType: "paid",
    priceLabel: "Coming soon",
    outcome: "Routes new leads to the right rep based on service area and availability.",
    status: "coming-soon",
  },
];

export const flagshipProduct = products[0];
