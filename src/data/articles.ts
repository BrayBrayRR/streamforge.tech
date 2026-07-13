import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "true-cost-of-24-hour-lead-response",
    title: "The true cost of a 24-hour lead response",
    category: "Guides",
    excerpt:
      "Waiting a day to call back a lead looks harmless. The research on response time says otherwise.",
    metaDescription:
      "What lead-response research actually shows about the cost of slow follow-up, and how to close the gap without hiring for it.",
    sections: [
      {
        heading: "Why response time matters more than most owners think",
        paragraphs: [
          "It's easy to assume a lead who filled out a form or left a voicemail will wait a day for a callback. In practice, they usually don't. A 2007 study out of MIT Sloan, run with InsideSales.com, tracked over 15,000 leads across six companies and found that the odds of actually connecting with a lead dropped 100-fold when the callback came at 30 minutes instead of 5. Qualification odds dropped 21-fold over the same window.",
          "That's not a small effect. It means the single biggest lever most service businesses have over close rate isn't better ad targeting or a lower price — it's how fast someone replies.",
        ],
      },
      {
        heading: "What actually happens in the first hour",
        paragraphs: [
          "A separate, more recent study from 411 Locals — which reviewed call-answer rates across 85 businesses in 58 industries — found that 62% of inbound calls to home-service businesses go unanswered, meaning most leads that call a plumber, electrician, or HVAC company are calling into silence more often than not.",
          "Combine those two findings and the picture is straightforward: most inbound leads either don't get a live answer at all, or the reply comes too late to matter. Both failure modes have the same result — the lead moves on.",
        ],
      },
      {
        heading: "The real cost, beyond the lost job",
        paragraphs: [
          "The immediate cost is obvious: one job goes to a competitor. The less obvious cost compounds over time. Every lead that came from paid ads or referrals and went unanswered is money already spent with nothing to show for it. And a caller who reaches voicemail twice in a row usually doesn't leave a third message — they just stop trying, which means the loss doesn't show up anywhere in your reporting. It just looks like fewer leads than you actually had.",
        ],
      },
      {
        heading: "How to close the gap without hiring for it",
        paragraphs: [
          "The direct fix is obvious and expensive: staff a phone line every hour a lead might call, including nights and weekends. Most small and mid-sized service businesses can't justify that cost for the volume they get.",
          "The practical alternative is a system that replies the moment an inquiry comes in — texts, calls, or web forms — asks the same qualifying questions a good dispatcher would, and books the appointment before the lead has a reason to call anyone else. That's the entire premise behind StreamForge's lead follow-up service, and you can run the numbers for your own business with the ROI calculator below.",
        ],
      },
    ],
    relatedSlugs: ["hvac-follow-up-playbook", "n8n-vs-zapier-for-service-businesses"],
  },
  {
    slug: "hvac-follow-up-playbook",
    title: "Automating follow-up for HVAC: a practical playbook",
    category: "Playbooks",
    excerpt:
      "Where HVAC businesses actually lose leads, and a step-by-step approach to closing the gap without adding office staff.",
    metaDescription:
      "A practical playbook for automating lead follow-up at an HVAC company — where leads get lost, what a good flow looks like, and what to measure.",
    sections: [
      {
        heading: "Where HVAC businesses actually lose leads",
        paragraphs: [
          "Three patterns show up again and again: after-hours emergency calls that go to voicemail, routine maintenance requests that get buried behind louder emergencies, and quote requests for bigger jobs — like a full system replacement — that never get a second follow-up after the first conversation.",
          "None of these are staffing failures exactly. They're timing failures. A dispatcher who's excellent during business hours still can't answer a no-cool call at 9pm on a Saturday in July.",
        ],
      },
      {
        heading: "What a good follow-up flow looks like",
        paragraphs: [
          "A workable flow has five steps: the inquiry comes in (call, text, or web form), a reply goes out within seconds, the system asks a couple of triage questions (is the unit running but not cooling, or not turning on at all — is there any active water damage), it offers real appointment slots from the calendar, and the job lands in the CRM with the owner notified after the fact, not before.",
          "The triage step matters most. A no-cool call in July and a routine filter question shouldn't get the same priority, and a good flow should be able to tell the difference from the caller's own answers rather than guessing from the words in a voicemail.",
        ],
      },
      {
        heading: "Setting it up without disrupting dispatch",
        paragraphs: [
          "Start by writing down the two or three questions your best dispatcher already asks to figure out urgency — most businesses already have this knowledge, it's just not written anywhere. Next, connect the calendar your techs actually use, not a separate one nobody checks. Then connect whatever CRM or job-tracking tool already runs your business — ServiceTitan, Housecall Pro, Jobber, or similar — so nothing has to be re-entered by hand.",
          "Before going live, run it against a handful of real scenarios your team has actually seen: a no-cool call, a maintenance reminder, a replacement quote. If it handles those the way your team would, it's ready for real traffic.",
        ],
      },
      {
        heading: "What to measure",
        paragraphs: [
          "Track average first-response time before and after — this is the single clearest signal of whether it's working. Track what share of after-hours inquiries convert into a booked appointment, since that's the segment most likely to have been going to voicemail before. And keep an eye on how often a conversation gets handed off to a human, since that number tells you where the qualifying questions need adjusting.",
        ],
      },
    ],
    relatedSlugs: ["true-cost-of-24-hour-lead-response", "n8n-vs-zapier-for-service-businesses"],
  },
  {
    slug: "n8n-vs-zapier-for-service-businesses",
    title: "n8n vs. Zapier for small service businesses",
    category: "Guides",
    excerpt:
      "Both can automate the busywork. The right choice depends on your technical comfort, your volume, and how much control you want over the data.",
    metaDescription:
      "An honest comparison of n8n and Zapier for small service businesses — pricing model, flexibility, and when each one actually makes sense.",
    sections: [
      {
        heading: "The core difference",
        paragraphs: [
          "Zapier is a hosted, point-and-click automation tool — you connect apps with \"Zaps\" and it runs entirely on Zapier's infrastructure. n8n is a node-based workflow tool that can be self-hosted or run through n8n Cloud, and it gives you a lot more control over exactly how data moves and where it's processed.",
          "In practice, Zapier is faster to get started with for simple, low-volume automations. n8n takes more setup but scales better for complex, high-volume, or highly customized workflows.",
        ],
      },
      {
        heading: "Pricing model",
        paragraphs: [
          "Zapier charges by the number of tasks (each action counts as one), and costs climb quickly once you're running high-volume automations. n8n Cloud has its own tiered pricing, but self-hosting n8n means you only pay for hosting — there's no per-task fee, which matters a lot once volume grows past what a small business plan on Zapier covers.",
        ],
      },
      {
        heading: "When n8n makes more sense",
        paragraphs: [
          "If you're running high volume — think hundreds or thousands of emails, leads, or records a month — the lack of a per-task fee adds up fast. It's also the better choice if you want full control over where your data lives, or if a workflow needs custom logic that a simple point-and-click builder can't express cleanly.",
        ],
      },
      {
        heading: "When Zapier makes more sense",
        paragraphs: [
          "If you're automating something simple — a new form submission creates a CRM record, a new sale triggers a Slack message — and volume is low, Zapier is genuinely the faster and simpler choice. There's no reason to self-host infrastructure for a five-step automation that runs a few dozen times a month.",
        ],
      },
      {
        heading: "What we actually use",
        paragraphs: [
          "We build most of our own automation products, including the n8n Email Blaster, on n8n — mainly to avoid passing per-task fees on to clients as volume grows. That said, Zapier is a fine, often better choice for simpler integrations, which is why StreamForge's lead follow-up service supports both.",
        ],
      },
    ],
    relatedSlugs: ["hvac-follow-up-playbook", "true-cost-of-24-hour-lead-response"],
  },
];
