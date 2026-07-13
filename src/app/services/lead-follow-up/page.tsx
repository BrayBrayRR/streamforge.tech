import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { leadFollowUpPage } from "@/data/servicePages";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: leadFollowUpPage.metaTitle,
  description: leadFollowUpPage.metaDescription,
  path: "/services/lead-follow-up",
});

export default function LeadFollowUpPage() {
  return <ServicePage content={leadFollowUpPage} />;
}
