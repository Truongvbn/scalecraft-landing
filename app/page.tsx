import dynamic from "next/dynamic";

// Critical - Load immediately (above-the-fold)
import HeroSection from "./components/sections/HeroSection";
import StatsHeroSection from "./components/sections/StatsHeroSection";
import CaseStudiesSlider from "./components/sections/CaseStudiesSlider";

// Non-critical - Lazy load (below-the-fold)
const ScalecraftComparisonSection = dynamic(() => import("./components/sections/ScalecraftComparisonSection"));
const StatsSection = dynamic(() => import("./components/sections/StatsSection"));
const BenefitsSection = dynamic(() => import("./components/sections/BenefitsSection"));
const FeatureCardsSection = dynamic(() => import("./components/sections/FeatureCardsSection"));
const VisualSolutionsSection = dynamic(() => import("./components/sections/VisualSolutionsSection"));
const FAQSection = dynamic(() => import("./components/sections/FAQSection"));
const CTASection = dynamic(() => import("./components/sections/CTASection"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <HeroSection />
      <StatsHeroSection />
      <CaseStudiesSlider />
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
