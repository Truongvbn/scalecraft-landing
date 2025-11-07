import Image from "next/image";
import Footer from "./components/Footer";
import CTASection from "./components/sections/CTASection";
import FAQSection from "./components/sections/FAQSection";
import VisualSolutionsSection from "./components/sections/VisualSolutionsSection";
import FeatureCardsSection from "./components/sections/FeatureCardsSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import StatsSection from "./components/sections/StatsSection";
import ScalecraftComparisonSection from "./components/sections/ScalecraftComparisonSection";
import CaseStudySection from "./components/sections/CaseStudySection";
import StatsHeroSection from "./components/sections/StatsHeroSection";
import HeroSection from "./components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <HeroSection />
      <StatsHeroSection />
      <CaseStudySection />
      <ScalecraftComparisonSection />
      <StatsSection />
      <BenefitsSection />
      <FeatureCardsSection />
      <VisualSolutionsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
