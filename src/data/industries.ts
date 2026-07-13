import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC",
    painLine: "Every missed emergency call is a $400 job for someone else.",
    metaTitle: "AI lead follow-up for HVAC companies",
    metaDescription:
      "Answer every HVAC service call in seconds, day or night. Qualify the job, book the appointment, and update your CRM automatically.",
    heroHeadline: "Never let a broken AC go to your competitor.",
    heroSubhead:
      "StreamForge answers HVAC service calls instantly, figures out the urgency, and books the appointment — even at 2am in July.",
    painPoints: [
      "Emergency calls land nights and weekends, when nobody's near the phone.",
      "A voicemail is a coin flip — most callers just try the next number on the list.",
      "Techs are in trucks all day, not answering texts about a quote.",
    ],
    workflowScenario: "A homeowner's AC stops cooling on a Friday night.",
    workflowMessages: [
      { sender: "lead", text: "My AC just stopped blowing cold air and it's 90° in here." },
      { sender: "ai", text: "I can help — is the unit running but not cooling, or not turning on at all?" },
      { sender: "lead", text: "Running, just warm air." },
      { sender: "ai", text: "Got it — I have a tech available tomorrow at 9am or 1pm. Which works better?" },
    ],
    useCases: [
      {
        title: "After-hours emergency dispatch",
        description: "No-cool and no-heat calls get answered and triaged the moment they come in, not the next morning.",
      },
      {
        title: "Seasonal tune-up reminders",
        description: "Past customers get a timely nudge before peak season, booked straight onto your calendar.",
      },
      {
        title: "Replacement quote follow-up",
        description: "Big-ticket system quotes get a follow-up message instead of going quiet after the estimate.",
      },
    ],
    faqs: [
      {
        question: "Can it tell an emergency from a routine call?",
        answer: "Yes — it asks about the symptoms first (no cooling vs. no power, water leaking, etc.) and prioritizes dispatch based on urgency, not just call order.",
      },
      {
        question: "Does it work with our dispatch software?",
        answer: "It connects to ServiceTitan, Housecall Pro, Jobber, and most scheduling tools that support a standard integration.",
      },
      {
        question: "What about maintenance plan renewals?",
        answer: "It can handle renewal reminders and rebooking as part of the same follow-up system, on the schedule you set.",
      },
      {
        question: "Our call volume spikes hard in summer — can it keep up?",
        answer: "Yes, it responds the same way at 3 calls a day or 30 — no queue, no hold music.",
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    painLine: "A burst pipe at 11pm doesn't wait for your voicemail.",
    metaTitle: "AI lead follow-up for plumbing companies",
    metaDescription:
      "Answer plumbing emergencies the moment they come in, qualify the job, and get a technician booked — without anyone at a desk.",
    heroHeadline: "Answer the burst pipe before it floods the basement.",
    heroSubhead:
      "StreamForge picks up plumbing inquiries instantly, sorts emergencies from routine work, and books the visit.",
    painPoints: [
      "Water damage gets worse every minute a call goes unanswered.",
      "Routine jobs — a slow drain, a running toilet — get buried behind the loud emergencies.",
      "Callers comparison-shop three plumbers before anyone calls them back.",
    ],
    workflowScenario: "A tenant reports a leaking water heater on a Sunday morning.",
    workflowMessages: [
      { sender: "lead", text: "My water heater is leaking onto the floor, is anyone available today?" },
      { sender: "ai", text: "That needs attention today — is it actively pooling water right now, or just damp?" },
      { sender: "lead", text: "Pooling, and it's getting worse." },
      { sender: "ai", text: "Understood, marking this urgent. I can get a plumber there within 2 hours — does that work?" },
    ],
    useCases: [
      {
        title: "Emergency leak and burst-pipe triage",
        description: "Active water damage gets flagged and routed ahead of routine requests automatically.",
      },
      {
        title: "Drain and fixture repair scheduling",
        description: "Non-urgent jobs get booked into open slots without tying up a live phone line.",
      },
      {
        title: "Water heater replacement quotes",
        description: "Follow-up on bigger jobs happens on schedule instead of falling off after the first call.",
      },
    ],
    faqs: [
      {
        question: "How does it triage emergencies vs. routine work?",
        answer: "It asks a few targeted questions — active water, shut-off valve status, location — and flags anything that sounds like ongoing damage as urgent.",
      },
      {
        question: "Can it handle after-hours emergency rates?",
        answer: "Yes — it can quote your after-hours rate up front so there's no surprise when the technician arrives.",
      },
      {
        question: "Does it work for both residential and commercial calls?",
        answer: "It's set up around your actual service lines, so it handles whichever mix of residential and commercial work you take on.",
      },
      {
        question: "What if the issue needs a same-day emergency visit we can't fill?",
        answer: "It's honest with the caller about realistic timing and offers the next available slot rather than overpromising.",
      },
    ],
  },
  {
    slug: "roofing",
    name: "Roofing",
    painLine: "Storm season leads go cold in hours, not days.",
    metaTitle: "AI lead follow-up for roofing companies",
    metaDescription:
      "Handle storm-season lead spikes without adding office staff. Qualify roof damage inquiries and book inspections automatically.",
    heroHeadline: "Storm season shouldn't overwhelm your front office.",
    heroSubhead:
      "StreamForge answers every roof inquiry the moment it comes in, so a lead spike after a storm doesn't turn into a pile of missed calls.",
    painPoints: [
      "A single storm can triple your inbound leads overnight.",
      "Quote requests go cold within a day if nobody follows up.",
      "Insurance-related questions eat up time your office doesn't have during peak weeks.",
    ],
    workflowScenario: "A homeowner notices shingles missing after a wind storm.",
    workflowMessages: [
      { sender: "lead", text: "We had some shingles come off in last night's storm, can someone take a look?" },
      { sender: "ai", text: "Sorry to hear that — is there any active leaking inside, or just visible damage on the roof?" },
      { sender: "lead", text: "No leaking yet, just missing shingles." },
      { sender: "ai", text: "Good to know. I can get an inspector out Thursday or Friday morning — which is better?" },
    ],
    useCases: [
      {
        title: "Storm-surge lead handling",
        description: "A sudden spike in inquiries gets the same fast response as a normal Tuesday.",
      },
      {
        title: "Inspection scheduling",
        description: "Damage assessments get booked directly onto the calendar without back-and-forth calls.",
      },
      {
        title: "Insurance claim intake",
        description: "Basic claim details are captured up front so your team isn't starting from zero.",
      },
    ],
    faqs: [
      {
        question: "Can it handle a sudden spike in leads after a storm?",
        answer: "Yes — it responds to the first inquiry the same way it responds to the hundredth, with no added wait time.",
      },
      {
        question: "Does it ask about insurance coverage?",
        answer: "It can capture whether the homeowner plans to file an insurance claim and pass that detail to your team.",
      },
      {
        question: "What about differentiating storm damage from routine repairs?",
        answer: "The qualifying questions are tuned to your services, so storm-damage leads and routine repair or replacement requests are handled with the right follow-up.",
      },
      {
        question: "Can it schedule inspections directly?",
        answer: "Yes, it offers open inspection slots and confirms the appointment without anyone picking up the phone.",
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical",
    painLine: "Callback requests pile up faster than one dispatcher can answer.",
    metaTitle: "AI lead follow-up for electrical contractors",
    metaDescription:
      "Answer electrical service calls instantly, separate safety emergencies from routine work, and keep your calendar filled.",
    heroHeadline: "Every callback answered, not just the loudest ones.",
    heroSubhead:
      "StreamForge responds to electrical inquiries immediately, flags safety issues, and books the job — so nothing sits in a callback queue.",
    painPoints: [
      "A tripped breaker and a full panel upgrade sound the same in a voicemail queue.",
      "One dispatcher can't answer calls while also coordinating crews in the field.",
      "Estimate requests for panel or rewiring jobs need a fast reply to stay in the running.",
    ],
    workflowScenario: "A homeowner has a breaker that keeps tripping.",
    workflowMessages: [
      { sender: "lead", text: "My breaker keeps tripping every time I run the microwave." },
      { sender: "ai", text: "Thanks for the detail — is there any burning smell, sparking, or visible damage at the panel?" },
      { sender: "lead", text: "No, nothing like that." },
      { sender: "ai", text: "Good — this sounds like a standard diagnostic visit. I have openings Tuesday and Wednesday afternoon." },
    ],
    useCases: [
      {
        title: "Safety-issue triage",
        description: "Sparking, burning smells, or exposed wiring get flagged as urgent and routed ahead of routine requests.",
      },
      {
        title: "Panel upgrade and rewiring quotes",
        description: "Bigger jobs get a scheduled estimate visit instead of a missed callback.",
      },
      {
        title: "Routine repair scheduling",
        description: "Standard diagnostic and repair calls get booked without tying up a live line.",
      },
    ],
    faqs: [
      {
        question: "How does it handle a potential safety hazard?",
        answer: "It asks about warning signs — burning smells, sparking, exposed wiring — and flags those calls as urgent so they get a faster response.",
      },
      {
        question: "Can it quote for larger jobs like panel upgrades?",
        answer: "It can share ballpark ranges if you provide them, or simply book a scoped estimate visit if the job needs an on-site look.",
      },
      {
        question: "Does it work alongside our existing scheduling system?",
        answer: "It connects to most scheduling and CRM tools through a standard integration or webhook.",
      },
      {
        question: "What if a caller describes something outside standard troubleshooting?",
        answer: "Anything unclear or unusual gets handed off to your team instead of being guessed at.",
      },
    ],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    painLine: "Quote requests sit in an inbox while crews are out all day.",
    metaTitle: "AI lead follow-up for landscaping companies",
    metaDescription:
      "Respond to landscaping quote requests the same day, even when your whole team is out on job sites.",
    heroHeadline: "Quote requests answered while your crew is in the field.",
    heroSubhead:
      "StreamForge replies to landscaping inquiries the moment they land, gathers the project details, and books a walkthrough.",
    painPoints: [
      "Crews are on-site all day, so inbound messages sit until evening.",
      "A quote request with no reply for two days usually goes to a competitor.",
      "Seasonal surges — spring cleanups, fall leaf removal — bring more leads than anyone has time to call back.",
    ],
    workflowScenario: "A homeowner wants a quote for a backyard redesign.",
    workflowMessages: [
      { sender: "lead", text: "Hi, I'm looking to get a quote for redoing my backyard landscaping." },
      { sender: "ai", text: "Happy to help — what's the property zip code, and are you thinking a full redesign or specific updates?" },
      { sender: "lead", text: "60614, and probably a full redesign — new beds, maybe a patio." },
      { sender: "ai", text: "Got it. I can get a designer out for a walkthrough Thursday at 10am or Saturday at 9am." },
    ],
    useCases: [
      {
        title: "Design and install quote intake",
        description: "Bigger project inquiries get scoped and booked for a walkthrough without a missed callback.",
      },
      {
        title: "Seasonal service scheduling",
        description: "Spring cleanup and fall leaf removal surges get handled with the same speed as a quiet week.",
      },
      {
        title: "Recurring maintenance sign-up",
        description: "Homeowners asking about weekly or biweekly service get routed straight into a recurring booking.",
      },
    ],
    faqs: [
      {
        question: "Can it handle both one-time projects and recurring maintenance?",
        answer: "Yes — it asks whether the inquiry is a one-time project or ongoing service and routes the follow-up accordingly.",
      },
      {
        question: "What happens during our busiest season?",
        answer: "It answers every inquiry at the same speed, whether you're getting five requests a week or fifty.",
      },
      {
        question: "Does it collect project details before the estimate visit?",
        answer: "It captures property size, scope, and rough budget where relevant, so your estimator isn't starting cold.",
      },
      {
        question: "Can it work with our route-based scheduling?",
        answer: "It can offer time windows that match your crew's existing route structure rather than arbitrary slots.",
      },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    painLine: "Estimate requests need a fast reply before the homeowner picks someone else.",
    metaTitle: "AI lead follow-up for painting contractors",
    metaDescription:
      "Respond to painting estimate requests within minutes and get a walkthrough booked before the homeowner calls the next contractor.",
    heroHeadline: "Be the first painter to call back, every time.",
    heroSubhead:
      "StreamForge replies to painting inquiries instantly, captures the project scope, and schedules the estimate visit.",
    painPoints: [
      "Homeowners typically request quotes from three or four painters at once.",
      "Interior vs. exterior, square footage, and timeline all need to be asked before an estimate makes sense.",
      "A slow reply doesn't just lose the job — it loses the estimate visit entirely.",
    ],
    workflowScenario: "A homeowner wants exterior painting before winter.",
    workflowMessages: [
      { sender: "lead", text: "Looking for a quote to get the exterior of my house painted before it gets cold." },
      { sender: "ai", text: "Happy to help — roughly what size is the house, and do you have a timeline in mind?" },
      { sender: "lead", text: "About 2,200 sq ft, hoping to get it done in the next month." },
      { sender: "ai", text: "That's workable. I can get an estimator out this week — Wednesday at 2pm or Friday at 11am?" },
    ],
    useCases: [
      {
        title: "Interior and exterior estimate intake",
        description: "Scope, square footage, and timeline get captured before the estimator ever drives out.",
      },
      {
        title: "Seasonal exterior scheduling",
        description: "Fall rushes for exterior work get handled without the usual bottleneck.",
      },
      {
        title: "Repeat customer scheduling",
        description: "Past clients booking a refresh get routed straight to scheduling instead of starting over.",
      },
    ],
    faqs: [
      {
        question: "Can it ask about square footage and surfaces before the estimate?",
        answer: "Yes — it gathers rough scope details up front so your estimator shows up prepared instead of starting from scratch.",
      },
      {
        question: "How fast does it respond to a new inquiry?",
        answer: "Within seconds of the message coming in, any hour of the day.",
      },
      {
        question: "Does it handle both residential and commercial estimate requests?",
        answer: "It's configured around the services you actually offer, so it handles whichever mix you take on.",
      },
      {
        question: "What if a homeowner wants a rough price before booking a visit?",
        answer: "It can share a general range if you provide one, while being clear that a firm quote needs an on-site look.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real estate",
    painLine: "A showing inquiry that waits until tomorrow is a lead you've lost.",
    metaTitle: "AI lead follow-up for real estate agents and teams",
    metaDescription:
      "Respond to showing requests and listing inquiries the moment they come in, and keep your calendar filled with booked showings.",
    heroHeadline: "Never let a showing request sit overnight.",
    heroSubhead:
      "StreamForge replies to buyer and renter inquiries instantly, answers common questions about the listing, and books the showing.",
    painPoints: [
      "Buyers message multiple agents at once — whoever replies first usually gets the showing.",
      "Evening and weekend inquiries are the norm, not the exception, in real estate.",
      "Repeating the same listing details over and over eats into time better spent with serious buyers.",
    ],
    workflowScenario: "A buyer asks about a listing late in the evening.",
    workflowMessages: [
      { sender: "lead", text: "Is the house on Maple Street still available? Can I see it this weekend?" },
      { sender: "ai", text: "Yes, it's still available. Would Saturday at 11am or Sunday at 1pm work for a showing?" },
      { sender: "lead", text: "Saturday at 11 works." },
      { sender: "ai", text: "You're booked for Saturday, 11am. I'll send the address and any entry details beforehand." },
    ],
    useCases: [
      {
        title: "Showing requests",
        description: "Buyer and renter inquiries get a same-minute reply and a booked showing, any time of day.",
      },
      {
        title: "Listing Q&A",
        description: "Common questions about price, square footage, and availability get answered instantly and consistently.",
      },
      {
        title: "Open house follow-up",
        description: "Visitors who leave contact info get a same-day follow-up instead of falling through the cracks.",
      },
    ],
    faqs: [
      {
        question: "Can it answer specific questions about a listing?",
        answer: "Yes — it's set up with your active listings' details so it can answer price, square footage, and availability questions directly.",
      },
      {
        question: "Does it work across multiple active listings at once?",
        answer: "Yes, it's built to handle inquiries across your full pipeline of listings, not just one property.",
      },
      {
        question: "Can it sync with the calendar I already use for showings?",
        answer: "It connects to Google Calendar and most common scheduling tools agents already use.",
      },
      {
        question: "What happens with a question it can't answer, like negotiating terms?",
        answer: "Anything beyond scheduling and basic listing facts gets handed straight to you.",
      },
    ],
  },
  {
    slug: "law-firms",
    name: "Law firms",
    painLine: "Intake calls after hours go to voicemail — and to the next firm on the list.",
    metaTitle: "AI lead follow-up for law firm intake",
    metaDescription:
      "Respond to new client inquiries the moment they call or message, capture the basics, and book the consultation.",
    heroHeadline: "The first call back usually gets the case.",
    heroSubhead:
      "StreamForge answers intake inquiries instantly, gathers the basic case details, and books the consultation with your team.",
    painPoints: [
      "Someone searching for a lawyer after an accident or arrest often calls several firms in one sitting.",
      "After-hours inquiries — nights, weekends — are common and easy to miss.",
      "Intake staff spend real time on calls that turn out not to fit the firm's practice areas.",
    ],
    workflowScenario: "A prospective client calls about a car accident case.",
    workflowMessages: [
      { sender: "lead", text: "I was in a car accident last week and I'm looking for a lawyer." },
      { sender: "ai", text: "I'm sorry to hear that. Were you injured, and has an insurance company contacted you yet?" },
      { sender: "lead", text: "Yes, minor injuries, and the other driver's insurance already called." },
      { sender: "ai", text: "Understood. I can schedule a free consultation with our team — tomorrow at 10am or 2pm work?" },
    ],
    useCases: [
      {
        title: "Personal injury intake",
        description: "Accident inquiries get triaged for basic fit and booked for consultation without delay.",
      },
      {
        title: "After-hours new client intake",
        description: "Nights and weekends get the same response speed as business hours.",
      },
      {
        title: "Practice-area screening",
        description: "Inquiries outside the firm's practice areas get identified early instead of consuming intake staff time.",
      },
    ],
    faqs: [
      {
        question: "Can it screen for practice-area fit before booking a consultation?",
        answer: "Yes — it asks a few basic questions to confirm the inquiry matches your practice areas before scheduling.",
      },
      {
        question: "Is this appropriate for sensitive legal matters?",
        answer: "It sticks to basic intake questions and scheduling — anything requiring legal judgment is handed directly to your team.",
      },
      {
        question: "Does it maintain confidentiality?",
        answer: "Intake information is only used to route the inquiry to your firm and isn't shared or used for any other purpose.",
      },
      {
        question: "Can it work alongside our existing intake staff?",
        answer: "It's built to handle the moments intake staff can't cover — after hours and the first few minutes of a new inquiry — not replace them.",
      },
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    painLine: "Quote shoppers compare three agents in one sitting; slow follow-up loses by default.",
    metaTitle: "AI lead follow-up for insurance agencies",
    metaDescription:
      "Respond to insurance quote requests within minutes, gather the basics, and book a call before the shopper moves to the next agent.",
    heroHeadline: "Be the quote they get back to first.",
    heroSubhead:
      "StreamForge replies to insurance inquiries instantly, captures the coverage details, and books a call with your team.",
    painPoints: [
      "Rate shoppers request quotes from several agencies within the same hour.",
      "Coverage details need to be gathered before a real quote is possible, which slows down manual follow-up.",
      "Renewal and cross-sell opportunities get missed without consistent, timely outreach.",
    ],
    workflowScenario: "A shopper requests an auto insurance quote online.",
    workflowMessages: [
      { sender: "lead", text: "Looking for a quote on auto insurance for two vehicles." },
      { sender: "ai", text: "Happy to help — what are the vehicle years and are you currently insured elsewhere?" },
      { sender: "lead", text: "A 2019 and a 2021, currently insured with someone else." },
      { sender: "ai", text: "Got it. I can have an agent call you today — would 3pm or 5pm work better?" },
    ],
    useCases: [
      {
        title: "New quote intake",
        description: "Coverage basics get captured up front so an agent can call with a real quote, not a cold start.",
      },
      {
        title: "Renewal outreach",
        description: "Upcoming renewals get a timely check-in instead of an automatic lapse.",
      },
      {
        title: "Cross-sell follow-up",
        description: "Existing clients asking about additional coverage get routed to the right agent quickly.",
      },
    ],
    faqs: [
      {
        question: "Can it collect the details needed for an actual quote?",
        answer: "It gathers the basics — vehicle or property details, current coverage — so your agent can quote accurately on the first call.",
      },
      {
        question: "Does it work for multiple lines of coverage?",
        answer: "It's set up around whichever lines your agency writes — auto, home, commercial, and more.",
      },
      {
        question: "Can it handle renewal reminders too?",
        answer: "Yes, renewal outreach can run on the same system as new-lead follow-up.",
      },
      {
        question: "Is customer data handled securely?",
        answer: "Information collected is only used to route the inquiry to your agency and isn't shared or sold.",
      },
    ],
  },
  {
    slug: "general-contractors",
    name: "General contractors",
    painLine: "Bid requests need a same-day response to make the shortlist.",
    metaTitle: "AI lead follow-up for general contractors",
    metaDescription:
      "Respond to bid and project inquiries the same day, gather the project scope, and book a site visit — without a full-time estimator on the phone.",
    heroHeadline: "Make the shortlist before the bid closes.",
    heroSubhead:
      "StreamForge replies to project inquiries instantly, captures scope and budget, and books a site visit with your estimator.",
    painPoints: [
      "Slow replies get quietly dropped from the bid list before you even know you were in the running.",
      "Project scope, timeline, and budget all need to be gathered before a site visit is worth scheduling.",
      "Estimators are on job sites, not answering inbound calls about new work.",
    ],
    workflowScenario: "A property manager requests a bid for a renovation project.",
    workflowMessages: [
      { sender: "lead", text: "We're looking for bids on a commercial space renovation, about 4,000 sq ft." },
      { sender: "ai", text: "Thanks for reaching out — what's the general scope, and do you have a target start date?" },
      { sender: "lead", text: "Full interior buildout, hoping to start in about two months." },
      { sender: "ai", text: "That's workable. I can get our estimator out for a site visit next Tuesday or Thursday." },
    ],
    useCases: [
      {
        title: "Bid and RFP intake",
        description: "New project inquiries get scoped and routed to your estimator the same day they come in.",
      },
      {
        title: "Site visit scheduling",
        description: "Walkthroughs get booked directly instead of getting lost in back-and-forth emails.",
      },
      {
        title: "Subcontractor and vendor inquiries",
        description: "Incoming vendor and sub inquiries get routed appropriately without tying up your estimating team.",
      },
    ],
    faqs: [
      {
        question: "Can it gather project scope before the site visit?",
        answer: "Yes — square footage, project type, and timeline get captured up front so your estimator isn't starting cold.",
      },
      {
        question: "Does it work for both residential and commercial projects?",
        answer: "It's configured around the project types you actually bid on.",
      },
      {
        question: "Can it handle multiple simultaneous bid requests?",
        answer: "Yes, it responds to every inquiry at the same speed regardless of how many come in at once.",
      },
      {
        question: "What about confidential project details?",
        answer: "Information gathered is only used to route the inquiry to your team and isn't shared externally.",
      },
    ],
  },
];
