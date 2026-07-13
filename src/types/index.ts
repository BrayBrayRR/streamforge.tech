export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export interface Integration {
  name: string;
  slug: string;
}

export interface StatCard {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  source: string;
}

export interface Service {
  slug: string;
  name: string;
  valueProp: string;
  builtFor: string;
  benefits: string[];
  href: string;
}

export interface IndustryFaqItem {
  question: string;
  answer: string;
}

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryWorkflowMessage {
  sender: "lead" | "ai";
  text: string;
}

export interface Industry {
  slug: string;
  name: string;
  painLine: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  painPoints: string[];
  workflowScenario: string;
  workflowMessages: IndustryWorkflowMessage[];
  useCases: IndustryUseCase[];
  faqs: IndustryFaqItem[];
}

export interface ProductTeaser {
  slug: string;
  name: string;
  category: string;
  price: string;
  outcome: string;
  href: string;
  badge?: string;
}

export interface CaseStudyCard {
  businessType: string;
  problem: string;
  deployed: string;
  outcome: string;
  timeframe: string;
  metricLabel: string;
  chartData: number[];
  illustrative: true;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServicePageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  problemHeading: string;
  problemBody: string;
  problemPoints: string[];
  howItWorks: ServiceStep[];
  whoItsFor: { title: string; description: string }[];
  proofPoints: { heading: string; description: string; source?: string; illustrative?: boolean }[];
  faqs: FaqItem[];
}

export interface TimelineStep {
  title: string;
  description: string;
  visual: "chat" | "calendar" | "crm" | "phone";
}

export interface RoiInputs {
  monthlyLeads: number;
  avgJobValue: number;
  closeRate: number;
  missedShare: number;
  weeklyHours: number;
  hourlyCost: number;
  recaptureRate: number;
}

export interface RoiResult {
  recoveredLeads: number;
  addedRevenueMonthly: number;
  addedRevenueAnnual: number;
  laborSavingsMonthly: number;
  laborSavingsAnnual: number;
}

export interface DemoReveal {
  field: string;
  value: string;
}

export interface DemoStep {
  sender: "lead" | "ai";
  text: string;
  reveals?: DemoReveal[];
}

export interface DemoPersona {
  id: string;
  label: string;
  subtitle: string;
  steps: DemoStep[];
  leadScore: number;
  crmEntry: string;
  notification: string;
}
