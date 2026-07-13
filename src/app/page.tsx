import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionTimeline from "@/components/home/SolutionTimeline";
import ServicesGrid from "@/components/home/ServicesGrid";
import InteractiveDemo from "@/components/home/InteractiveDemo";
import RoiCalculatorTeaser from "@/components/home/RoiCalculatorTeaser";
import CaseStudies from "@/components/home/CaseStudies";
import ProductsTeaser from "@/components/home/ProductsTeaser";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import AboutStrip from "@/components/home/AboutStrip";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionTimeline />
      <ServicesGrid />
      <InteractiveDemo />
      <RoiCalculatorTeaser />
      <CaseStudies />
      <ProductsTeaser />
      <IndustriesGrid />
      <AboutStrip />
      <Faq />
      <FinalCta />
    </>
  );
}
