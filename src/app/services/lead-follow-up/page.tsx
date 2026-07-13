import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { leadFollowUpPage } from "@/data/servicePages";

export const metadata: Metadata = {
  title: leadFollowUpPage.metaTitle,
  description: leadFollowUpPage.metaDescription,
};

export default function LeadFollowUpPage() {
  return <ServicePage content={leadFollowUpPage} />;
}
