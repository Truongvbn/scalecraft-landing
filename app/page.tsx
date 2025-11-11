import dynamic from "next/dynamic";

// Critical - Load immediately (above-the-fold)
import HeroSection from "./components/sections/HeroSection";
import StatsHeroSection from "./components/sections/StatsHeroSection";
import Navbar from "./components/sections/hero/Navbar";

// Non-critical - Lazy load (below-the-fold)
const CaseStudySection = dynamic(() => import("./components/sections/CaseStudySection"));
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
      {/* Navbar - Mobile: static (scrolls away), Tablet/Desktop: fixed floating */}
      <div className="absolute md:fixed left-0 right-0 top-0 z-50 flex w-full justify-center pt-[20px] md:pt-[26px]">
        <Navbar />
      </div>
      
      <div id="home"><HeroSection /></div>
      <div id="stats"><StatsHeroSection /></div>
      <div id="case-study"><CaseStudySection /></div>
      <div id="comparison"><ScalecraftComparisonSection /></div>
      <div id="team"><StatsSection /></div>
      <div id="benefits"><BenefitsSection /></div>
      <div id="features"><FeatureCardsSection /></div>
      <div id="solutions"><VisualSolutionsSection /></div>
      <div id="faq"><FAQSection /></div>
      <div id="contact"><CTASection /></div>
      <Footer />
    </div>
  );
}
