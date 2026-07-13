import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { linkedinContentPage } from "@/data/servicePages";

export const metadata: Metadata = {
  title: linkedinContentPage.metaTitle,
  description: linkedinContentPage.metaDescription,
};

export default function LinkedinContentPage() {
  return <ServicePage content={linkedinContentPage} />;
}
