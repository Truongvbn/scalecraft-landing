"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/app/lib/animations";

// Card 1 - Amazon Agentur (Outsourcing)
const imgDarkGray1 = "/assets/images/case-slider-1-dark.png";
const imgTexture1 = "/assets/images/case-slider-1-texture.png";
const imgFrame1 = "/assets/images/case-slider-1-frame.png";
const imgImage3_1 = "/assets/images/case-slider-1-img3.png";
const imgImage4_1 = "/assets/images/case-slider-1-img4.png";
const imgImage13_1 = "/assets/images/case-slider-1-img13.png";
const imgGroup344_1 = "/assets/images/case-slider-1-group344.png";
const imgGroup343_1 = "/assets/images/case-slider-1-group343.png";
const imgCheck1 = "/assets/images/case-slider-1-check1.svg";
const imgCheck2 = "/assets/images/case-slider-1-check2.svg";

// Card 2 - Freelancer (Umsatzsteigerung)  
const imgDarkGray2 = "/assets/images/case-slider-2-dark.png";
const imgTexture2 = "/assets/images/case-slider-2-texture.png";
const imgFrame2 = "/assets/images/case-slider-2-frame.png";
const imgImage3_2 = "/assets/images/case-slider-2-img3.png";
const imgImage4_2 = "/assets/images/case-slider-2-img4.png";
const imgImage13_2 = "/assets/images/case-slider-2-img13.png";
const imgGroup344_2 = "/assets/images/case-slider-2-group344.png";
const imgGroup343_2 = "/assets/images/case-slider-2-group343.png";
const imgCheck3 = "/assets/images/case-slider-2-check3.svg";
const imgCheck4 = "/assets/images/case-slider-2-check4.svg";

const Card1 = () => (
    <div className="backdrop-blur-[4.875px] bg-[rgba(251,251,255,0.7)] border-[1.5px] border-solid border-white rounded-[17.407px] overflow-hidden"
         style={{ boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)' }}>
      <div className="grid grid-cols-2 h-[752px]">
        {/* Left Side - Dark */}
        <div className="relative bg-[#252525] rounded-l-[16px] overflow-hidden">
          <Image src={imgDarkGray1} alt="" fill className="object-cover absolute" />
          <div className="absolute inset-0" style={{ transform: 'rotate(359.427deg)' }}>
            <Image src={imgTexture1} alt="" fill className="object-cover opacity-30" />
          </div>
          
          <div className="relative z-10 px-[39px] pt-[11px]">
            {/* Main Image */}
            <div className="relative h-[321px] w-[518px] rounded-[16px] overflow-hidden mb-6">
              <Image src={imgFrame1} alt="" fill className="object-cover" />
              <Image src={imgImage3_1} alt="" fill className="object-cover" />
            </div>

            {/* Logo Bar */}
            <div className="bg-white h-[84px] w-[463px] rounded-[8px] shadow-[0px_4px_12.2px_0px_rgba(0,0,0,0.2)] flex items-center px-6 gap-4 mb-6">
              <Image src={imgGroup344_1} alt="" width={86} height={33} />
              <Image src={imgImage4_1} alt="" width={98} height={26} />
              <Image src={imgImage13_1} alt="" width={89} height={22} />
              <span className="ml-auto text-[12px] font-bold leading-[16px] text-black">FREELANCER</span>
            </div>

            {/* Badge */}
            <div className="inline-flex h-[30.655px] items-center rounded-[39px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% px-4 mb-6">
              <span className="text-[13.88px] leading-[19.431px] text-white">Outsourcing</span>
            </div>

            {/* Title */}
            <h3 className="text-[30px] font-medium leading-[34px] text-white mb-6">
              Skalierbare Creative-Produktion für eine Full-Service-Amazon-Agentur
            </h3>

            {/* Description */}
            <p className="text-[14px] font-normal leading-[21.662px] text-white">
              Der Kunde ist eine etablierte Amazon-Full-Service-Agentur mit eigenem internen Designteam und einer starken Marktposition.
              <br />
              Durch das agentureigene Gewinnbeteiligungsmodell war der wirtschaftliche Erfolg direkt an die Performance der Creatives gekoppelt.
              <br />
              Das interne Team stieß jedoch regelmäßig an seine Kapazitätsgrenzen – große Produktportfolios und enge Deadlines führten zu Verzögerungen in der Creative-Produktion.
              <br /><br />
              <span className="font-semibold">Die Folge:</span>
              <br />
              Verzögerte Listings, geringere Umsätze und wachsende Unzufriedenheit bei Endkunden.
              <br />
              Das Risiko von Kundenverlusten und Umsatzeinbußen stieg deutlich.
            </p>
          </div>
        </div>

        {/* Right Side - Light */}
        <div className="px-[33px] py-[24px]">
          {/* Solution */}
          <div className="mb-8">
            <h4 className="text-[20px] font-medium leading-[29.785px] text-[#252525] mb-2">
              Lösung von ScaleCraft
            </h4>
            <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
              Gemeinsam mit dem Management der Agentur entwickelte ScaleCraft ein skalierbares Outsourcing-Modell mit klarem Prozessdesign und definierten Qualitätsstandards.
              <br />
              Der Fokus: Effizienz, Geschwindigkeit und Entlastung des internen Teams, ohne an kreativer Qualität zu verlieren.
              <br /><br />
              <span className="font-semibold">Dazu wurde ein Done-for-You-System etabliert – bestehend aus:</span>
              <br />
              • Strukturiertem Projektmanagement mit klaren Übergabepunkten,
              <br />
              • Definierten QC-Kriterien (ScaleCraft Standard),
              <br />
              • Und einem flexiblen Ressourcenpool aus spezialisierten Designern, die kurzfristig große Volumina umsetzen können.
              <br /><br />
              → Damit konnten auch umfangreiche ASIN-Portfolios zuverlässig und schnell bearbeitet werden – ohne neue Mitarbeiter einstellen zu müssen.
            </p>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-[20px] font-medium leading-[29.785px] text-[#252525] mb-4">
              Ergebnisse
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck1} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
                  Volle Entlastung des internen Designteams
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck2} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
                  Schnellere Delivery-Times → unmittelbare Umsatzsteigerung bei betreuten Brands
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck2} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
                  Effiziente Abarbeitung großer Produktpaletten, ohne Qualitätsverlust
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck2} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
                  Flexible Skalierung je nach Auftragsvolumen
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck2} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
                  Höhere Endkundenzufriedenheit durch konstant hochwertige Creatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

const Card2 = () => (
    <div className="backdrop-blur-[4.875px] bg-[rgba(251,251,255,0.7)] border-[1.5px] border-solid border-white rounded-[17.407px] overflow-hidden"
         style={{ boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)' }}>
      <div className="grid grid-cols-2 h-[752px]">
        {/* Left Side - Dark */}
        <div className="relative bg-[#252525] rounded-l-[16px] overflow-hidden">
          <Image src={imgDarkGray2} alt="" fill className="object-cover absolute" />
          <div className="absolute inset-0" style={{ transform: 'rotate(359.427deg)' }}>
            <Image src={imgTexture2} alt="" fill className="object-cover opacity-30" />
          </div>
          
          <div className="relative z-10 px-[39px] pt-[11px]">
            {/* Main Image */}
            <div className="relative h-[321px] w-[518px] rounded-[16px] overflow-hidden mb-6">
              <Image src={imgFrame2} alt="" fill className="object-cover" />
              <Image src={imgImage3_2} alt="" fill className="object-cover" />
            </div>

            {/* Logo Bar */}
            <div className="bg-white h-[84px] w-[463px] rounded-[8px] shadow-[0px_4px_12.2px_0px_rgba(0,0,0,0.2)] flex items-center px-6 gap-4 mb-6">
              <Image src={imgGroup344_2} alt="" width={86} height={33} />
              <Image src={imgImage4_2} alt="" width={98} height={26} />
              <Image src={imgImage13_2} alt="" width={89} height={22} />
              <span className="ml-auto text-[12px] font-bold leading-[16px] text-black">FREELANCER</span>
            </div>

            {/* Badge */}
            <div className="inline-flex h-[30.655px] items-center rounded-[39px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% px-4 mb-6">
              <span className="text-[13.88px] leading-[19.431px] text-white">Umsatzsteigerung</span>
            </div>

            {/* Title */}
            <h3 className="text-[30px] font-medium leading-[34px] text-white mb-6">
              Vom Freelancer zur skalierbaren Agentur mit eigener Designabteilung
            </h3>

            {/* Description */}
            <p className="text-[14px] font-normal leading-[21.662px] text-white">
              Der Kunde startete als Einzelunternehmer im Bereich PPC-Management und Account-Betreuung.
              <br />
              Sein Umsatz basierte fast ausschließlich auf diesen beiden Leistungen – ergänzende Designaufträge erledigte er selbst, meist nebenbei.
              <br />
              Das führte langfristig zu Überlastung, Qualitätsschwankungen und fehlender Skalierbarkeit.
              <br />
              Neue Kunden konnten nur begrenzt angenommen werden, da jede zusätzliche Aufgabe unmittelbar an seine persönliche Arbeitszeit gebunden war.
            </p>
          </div>
        </div>

        {/* Right Side - Light */}
        <div className="px-[46px] py-[45px]">
          {/* Solution */}
          <div className="mb-8">
            <h4 className="text-[20px] font-medium leading-[29.785px] text-[#252525] mb-2">
              Lösung von ScaleCraft
            </h4>
            <p className="text-[14px] font-light leading-[21.662px] text-[#252525]">
              ScaleCraft unterstützte den Kunden beim strategischen Aufbau einer eigenen Designabteilung – inklusive klarer Prozesse, Kommunikationsstruktur und Qualitätsstandards.
              <br />
              Dabei wurde nicht nur das operative Design übernommen, sondern auch das komplette Projektmanagement und die Endkundenkommunikation durch ScaleCraft gesteuert.
              <br /><br />
              So konnte die neue Designabteilung eigenständig arbeiten, während der Kunde sich auf seine Kernkompetenzen im PPC und Account Management konzentrierte – ohne Abstimmung über mehrere Ebenen oder zusätzlichen Managementaufwand.
            </p>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-[20px] font-medium leading-[29.785px] text-[#252525] mb-4">
              Ergebnisse
            </h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck3} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[18px] text-[#252525]">
                  Aufbau einer eigenständigen Designabteilung innerhalb weniger Monate
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck4} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[18px] text-[#252525]">
                  Kein operativer Aufwand für Designkoordination oder Kundenkommunikation
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck4} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[18px] text-[#252525]">
                  Direkte Integration in das bestehende Leistungsportfolio (Design + PPC + Account Management)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[10.286px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100%">
                  <Image src={imgCheck4} alt="" width={10} height={8} />
                </div>
                <p className="text-[14px] font-light leading-[18px] text-[#252525]">
                  Neue Umsatzquelle durch eigenständige, profitable Designleistungen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default function CaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full bg-[#f0f0f0] py-20">
      <div className="mx-auto max-w-[1440px] px-[179px]">
        {/* Heading */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-normal leading-[55px]">
            <span className="text-neutral-800">Erfolg durch Strategie, </span>
            <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">Design und Skalierung</span>
          </h2>
        </motion.div>

        {/* Slider Container */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="w-full flex-shrink-0">
                <Card1 />
              </div>
              <div className="w-full flex-shrink-0">
                <Card2 />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === 0 ? "bg-[#404040]" : "bg-[#8c8c8c] opacity-20"
            }`}
            aria-label="Go to slide 1"
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === 1 ? "bg-[#404040]" : "bg-[#8c8c8c] opacity-20"
            }`}
            aria-label="Go to slide 2"
          />
        </div>
      </div>
    </section>
  );
}
