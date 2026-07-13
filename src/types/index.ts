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

export interface IndustryTeaser {
  slug: string;
  name: string;
  painLine: string;
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
