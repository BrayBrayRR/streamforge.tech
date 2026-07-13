import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { linkedinContentPage } from "@/data/servicePages";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: linkedinContentPage.metaTitle,
  description: linkedinContentPage.metaDescription,
  path: "/services/linkedin-content",
});

export default function LinkedinContentPage() {
  return <ServicePage content={linkedinContentPage} />;
}
