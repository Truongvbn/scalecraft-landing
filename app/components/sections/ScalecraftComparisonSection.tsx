"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const imgGeminiGeneratedImageOulitpoulitpouli1 = "/assets/images/comparison/comparison-agenturen-1.png";
const imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4 = "/assets/images/comparison/comparison-agenturen-2.png";
const imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1 = "/assets/images/comparison/comparison-agenturen-3.png";
const imgGeminiGeneratedImage2M1Knj2M1Knj2M1K1 = "/assets/images/comparison/comparison-mitarbeiter-1.png";
const imgGeminiGeneratedImageL67Ngnl67Ngnl67N2 = "/assets/images/comparison/comparison-mitarbeiter-2.png";
const imgGeminiGeneratedImageOrf8Qtorf8Qtorf83 = "/assets/images/comparison/comparison-systeme.png";

export default function ScalecraftComparisonSection() {
  const [activeTab, setActiveTab] = useState<"mit" | "ohne">("mit");

  // Ohne Scalecraft Data
  const ohneScalecraftData = {
    agenturen: {
      title: "AGENTUREN",
      issues: [
        "Design-Workload überfordert das interne Team",
        "Viele Task können nicht angenommen werden",
        "Qualität schwankt je nach Designer & Zeitdruck",
        "Endlose Feedbackschleifen mit Freelancern",
        "Kein klarer Prozess für Priorisierung & Delivery"
      ],
      result: "Projekte verzögern sich, Margen schrumpfen, Kunden sind unzufrieden."
    },
    mitarbeiter: {
      title: "MITARBEITER",
      issues: [
        "Inhouse-Team überlastet mit Ad-hoc-Aufgaben",
        "Kein Fokus auf Creative Performance",
        "Fehlende Spezialisierung & Weiterbildung",
        "Unklare Verantwortlichkeiten im Designprozess"
      ],
      result: "Hohe Burnout-Gefahr, sinkende Qualität und Unzufriedenheit."
    },
    systeme: {
      title: "SYSTEME",
      issues: [
        "Kein einheitlicher Creative-Prozess",
        "Tools & Assets sind unstrukturiert verteilt",
        "Keine datengetriebene Design-Analyse",
        "Fehlendes Reporting zu Performance & Effizienz"
      ],
      result: "Ineffizienz, Leerlauf und verlorene Learnings."
    }
  };

  return (
    <section className="relative w-full bg-[#f0f0f0] py-20 max-md:py-12">
      <div className="mx-auto max-w-[1440px] px-8 max-md:px-4">
        {/* Heading */}
        <motion.h2 
          className="mb-16 text-center text-[44px] font-normal leading-[1.25] tracking-[-1.92px] text-[#252525] max-md:mb-8 max-md:text-[28px] max-md:leading-[1.3]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Strategie, Design und Branding für{" "}
          <br />
          <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
            nachhaltigen Erfolg
          </span>
        </motion.h2>

        {/* Toggle Button */}
        <motion.div 
          className="relative mx-auto mb-12 flex h-16 w-full max-w-[525px] items-center justify-center gap-2 rounded-[13px] border border-white p-2 backdrop-blur-[4.875px] max-md:h-[46.568px] max-md:max-w-none max-md:gap-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }} 
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Buttons */}
          <button
            onClick={() => setActiveTab("mit")}
            className={`relative z-10 rounded-[10px] px-6 py-3 text-[20px] leading-[28px] tracking-[0.15px] transition-all duration-300 max-md:flex-1 max-md:px-4 max-md:py-2 max-md:text-[14px] ${
              activeTab === "mit" ? "bg-[#404040] text-white" : "text-[#1d1d1d] hover:bg-white/10"
            }`}
          >
            Mit Scalecraft
          </button>
          <button
            onClick={() => setActiveTab("ohne")}
            className={`relative z-10 rounded-[10px] px-6 py-3 text-[20px] leading-[28px] tracking-[0.15px] transition-all duration-300 max-md:flex-1 max-md:px-4 max-md:py-2 max-md:text-[14px] ${
              activeTab === "ohne" ? "bg-[#404040] text-white" : "text-[#1d1d1d] hover:bg-white/10"
            }`}
          >
            Ohne Scalecraft
          </button>
        </motion.div>

        {/* Mit Scalecraft Cards */}
        {activeTab === "mit" && (
        <>
        <motion.div 
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          key="mit-scalecraft"
        >
          {/* Card 1: Agenturen */}
          <motion.div 
            className="relative flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[15px] max-md:h-[195px]">
              <Image
                src={imgGeminiGeneratedImageOulitpoulitpouli1}
                alt="Agenturen"
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4}
                alt=""
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-11 mt-6 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[8.75px] py-[7.5px]">
                <span className="text-[16px] font-medium leading-[24.99px] text-white">AGENTUREN</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mx-11 mt-6 flex-1 space-y-2 max-md:mx-6 max-md:space-y-1">
              {[
                "Dediziertes Performance-Designteam nach deutscher Qualitätsnorm",
                "Strukturierter Workflow mit fester Priorisierung",
                "2× schneller Output, 50 % geringere Kosten",
                "Klare Ansprechpartner & Reporting (Effektive Zeit) Nur das wird abgerechnet",
                "up to date"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[13.714px] bg-[#27c840]">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M1 4.5L5 8.5L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] font-light leading-[24px] text-[#546989] max-md:text-[14px] max-md:leading-[22px]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989] max-md:mx-6 max-md:mb-6 max-md:text-[14px]">
              <span className="font-semibold">Ergebnis:</span> Stabile Qualität, planbarer Output, zufriedene Kunden.
            </p>
          </motion.div>

          {/* Card 2: Mitarbeiter */}
          <motion.div 
            className="relative flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[15px] max-md:h-[195px]">
              <Image
                src={imgGeminiGeneratedImage2M1Knj2M1Knj2M1K1}
                alt="Mitarbeiter"
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageL67Ngnl67Ngnl67N2}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-11 mt-6 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[10px] py-[7px]">
                <span className="text-[16px] font-medium leading-[25px] text-white">MITARBEITER</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mx-11 mt-6 flex-1 space-y-2 max-md:mx-6 max-md:space-y-1">
              {[
                "Externe Entlastung durch skalierbares Designteam",
                "Performance-orientierte Trainings & Guidelines | UP TO DATE",
                "Klare Rollenverteilung & Prozessverantwortung",
                "Mehr Raum fürs interne Team, um zu wachsen"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[13.714px] bg-[#27c840]">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M1 4.5L5 8.5L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[16px] font-light leading-[24px] text-[#546989] max-md:text-[14px] max-md:leading-[22px]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989] max-md:mx-6 max-md:mb-6 max-md:text-[14px]">
              <span className="font-semibold">Ergebnis:</span> Dein Team bleibt fokussiert und arbeitet strategisch – nicht operativ im Chaos.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3: Systeme (Full Width) - Mit Scalecraft */}
        <div className="relative mt-8 overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Image Container */}
          <div className="relative mx-6 mt-5 h-[297px] overflow-hidden rounded-[15px] max-md:mx-4 max-md:h-[195px]">
            <Image
              src={imgGeminiGeneratedImageOrf8Qtorf8Qtorf83}
              alt="Systeme"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 px-11 py-8 lg:grid-cols-2 lg:items-start max-md:px-6 max-md:py-6 max-md:gap-6">
            {/* Left Side */}
            <div>
              {/* Badge */}
              <div className="mb-6 flex justify-start">
                <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[21px] py-[7.145px]">
                  <span className="text-[16px] font-medium leading-[25px] text-white">SYSTEME</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                {[
                  "Klare Systeme für Briefing, Freigabe & Feedback",
                  "Einheitliche Brand Guidelines & File-Struktur",
                  "Data-Tracking & Performance-Optimierung",
                  "Kontinuierliche Verbesserung durch BAT-Methode"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-[13.714px] bg-[#27c840]">
                      <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M1 4.5L5 8.5L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[16px] font-light leading-[24px] text-[#546989] max-md:text-[14px] max-md:leading-[22px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Result */}
            <div className="flex items-start lg:items-center lg:justify-end">
              <p className="text-[16px] leading-[24px] text-[#546989]">
                <span className="font-semibold">Ergebnis:</span> Dein Designprozess wird messbar, skalierbar und profitabel.
              </p>
            </div>
          </div>
        </div>
        </>
        )}

        {/* Ohne Scalecraft Cards */}
        {activeTab === "ohne" && (
        <>
        <motion.div 
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          key="ohne-scalecraft"
        >
          {/* Card 1: Agenturen - Ohne */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            className="relative flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[16px] bg-neutral-700">
              <Image
                src={imgGeminiGeneratedImageOulitpoulitpouli1}
                alt="Agenturen"
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4}
                alt=""
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-11 mt-6 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2">
                <span className="text-[16px] font-medium uppercase text-white">{ohneScalecraftData.agenturen.title}</span>
              </div>
            </div>

            {/* Issues List */}
            <div className="mx-11 mt-6 flex-1 space-y-1">
              {ohneScalecraftData.agenturen.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FF5F57"/>
                      <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(45 12 12)"/>
                    </svg>
                  </div>
                  <p className="text-[16px] font-light leading-[24px] text-[#546989]">{issue}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989] max-md:mx-6 max-md:mb-6 max-md:text-[14px]">
              <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.agenturen.result}
            </p>
          </motion.div>

          {/* Card 2: Mitarbeiter - Ohne */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            className="relative flex flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[16px] bg-[#404040]">
              <Image
                src={imgGeminiGeneratedImage2M1Knj2M1Knj2M1K1}
                alt="Mitarbeiter"
                fill
                className="object-cover"
              />
              <Image
                src={imgGeminiGeneratedImageL67Ngnl67Ngnl67N2}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-11 mt-6 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2">
                <span className="text-[16px] font-medium uppercase text-white">{ohneScalecraftData.mitarbeiter.title}</span>
              </div>
            </div>

            {/* Issues List */}
            <div className="mx-11 mt-6 flex-1 space-y-1">
              {ohneScalecraftData.mitarbeiter.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FF5F57"/>
                      <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(45 12 12)"/>
                    </svg>
                  </div>
                  <p className="text-[16px] font-light leading-[24px] text-[#546989]">{issue}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989] max-md:mx-6 max-md:mb-6 max-md:text-[14px]">
              <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.mitarbeiter.result}
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3: Systeme (Full Width) - Ohne */}
        <div className="relative mt-8 overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Image Container */}
          <div className="relative mx-6 mt-5 h-[297px] overflow-hidden rounded-[16px] bg-[#373738]">
            <Image
              src={imgGeminiGeneratedImageOrf8Qtorf8Qtorf83}
              alt="Systeme"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 px-11 py-8 lg:grid-cols-2">
            {/* Left Side */}
            <div>
              {/* Badge */}
              <div className="mb-6 flex justify-start">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2">
                  <span className="text-[16px] font-medium uppercase text-white">{ohneScalecraftData.systeme.title}</span>
                </div>
              </div>

              {/* Issues List */}
              <div className="space-y-1">
                {ohneScalecraftData.systeme.issues.map((issue, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#FF5F57"/>
                        <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="2" strokeLinecap="round" transform="rotate(45 12 12)"/>
                      </svg>
                    </div>
                    <p className="text-[16px] font-light leading-[24px] text-[#546989]">{issue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Result */}
            <div className="flex items-end">
              <p className="text-[16px] leading-[24px] text-[#546989]">
                <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.systeme.result}
              </p>
            </div>
          </div>
        </div>
        </>
        )}

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full border border-black border-solid bg-[#252525] px-8 py-3 text-[16px] text-white transition-colors hover:bg-[#404040] max-md:w-full max-md:max-w-md">
            Projekt starten →
          </button>
        </div>
      </div>
    </section>
  );
}
