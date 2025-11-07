"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, gridContainer, gridItem, viewport } from "@/app/lib/animations";

const imgGeminiGeneratedImageOulitpoulitpouli1 = "/assets/images/comparison-agenturen-1.png";
const imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4 = "/assets/images/comparison-agenturen-2.png";
const imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1 = "/assets/images/comparison-agenturen-3.png";
const imgGeminiGeneratedImage2M1Knj2M1Knj2M1K1 = "/assets/images/comparison-mitarbeiter-1.png";
const imgGeminiGeneratedImageL67Ngnl67Ngnl67N2 = "/assets/images/comparison-mitarbeiter-2.png";
const imgGeminiGeneratedImageOrf8Qtorf8Qtorf83 = "/assets/images/comparison-systeme.png";

export default function ScalecraftComparisonSection() {
  const [activeTab, setActiveTab] = useState<"mit" | "ohne">("mit");

  return (
    <section className="relative w-full bg-[#f0f0f0] py-20">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Heading */}
        <motion.h2 
          className="mb-16 text-center text-[44px] font-normal leading-[1.25] tracking-[-1.92px] text-[#252525]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Strategie, Design und Branding für{" "}
          <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
            nachhaltigen Erfolg
          </span>
        </motion.h2>

        {/* Toggle Button */}
        <motion.div 
          className="relative mx-auto mb-12 flex h-16 w-[525px] items-center rounded-[13px] border border-white backdrop-blur-[4.875px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }} 
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Active Tab Background */}
          <div 
            className="absolute h-[52px] w-[255px] rounded-[10px] bg-[#404040] transition-all duration-300"
            style={{
              left: activeTab === "mit" ? "7px" : "263px",
              top: "6px"
            }}
          />
          
          {/* Buttons */}
          <button
            onClick={() => setActiveTab("mit")}
            className={`relative z-10 flex-1 text-[20px] leading-[28px] tracking-[0.1501px] transition-colors ${
              activeTab === "mit" ? "text-white" : "text-[#1d1d1d]"
            }`}
          >
            Mit Scalecraft
          </button>
          <button
            onClick={() => setActiveTab("ohne")}
            className={`relative z-10 flex-1 text-[20px] leading-[28px] tracking-[0.1501px] transition-colors ${
              activeTab === "ohne" ? "text-white" : "text-[#1d1d1d]"
            }`}
          >
            Ohne Scalecraft
          </button>
        </motion.div>

        {/* Cards Grid */}
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
        >
          {/* Card 1: Agenturen */}
          <motion.div 
            className="relative overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[15px]">
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
            <div className="mx-11 mt-6 inline-flex items-center rounded-full bg-[#ec6036] px-[8.75px] py-[7.5px]">
              <span className="text-[16px] font-medium leading-[24.99px] text-white">AGENTUREN</span>
            </div>

            {/* Features List */}
            <div className="mx-11 mt-6 space-y-2">
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
                  <p className="text-[16px] font-light leading-[24px] text-[#546989]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989]">
              <span className="font-semibold">Ergebnis:</span> Stabile Qualität, planbarer Output, zufriedene Kunden.
            </p>
          </motion.div>

          {/* Card 2: Mitarbeiter */}
          <motion.div 
            className="relative overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[290px] overflow-hidden rounded-[15px]">
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
            <div className="mx-11 mt-6 inline-flex items-center rounded-full bg-[#ec6036] px-[10px] py-[7px]">
              <span className="text-[16px] font-medium leading-[25px] text-white">MITARBEITER</span>
            </div>

            {/* Features List */}
            <div className="mx-11 mt-6 space-y-2">
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
                  <p className="text-[16px] font-light leading-[24px] text-[#546989]">{feature}</p>
                </div>
              ))}
            </div>

            {/* Result */}
            <p className="mx-11 mb-11 mt-6 text-[16px] leading-[24px] text-[#546989]">
              <span className="font-semibold">Ergebnis:</span> Dein Team bleibt fokussiert und arbeitet strategisch – nicht operativ im Chaos.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3: Systeme (Full Width) */}
        <div className="relative mt-8 overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
             style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Image Container */}
          <div className="relative mx-6 mt-5 h-[297px] overflow-hidden rounded-[15px]">
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
              <div className="mb-6 inline-flex items-center rounded-full bg-[#ec6036] px-[21px] py-[7.145px]">
                <span className="text-[16px] font-medium leading-[25px] text-white">SYSTEME</span>
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
                    <p className="text-[16px] font-light leading-[24px] text-[#546989]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Result */}
            <div className="flex items-end">
              <p className="text-[16px] leading-[24px] text-[#546989]">
                <span className="font-semibold">Ergebnis:</span> Dein Designprozess wird messbar, skalierbar und profitabel.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="rounded-full border border-black border-solid bg-[#252525] px-8 py-3 text-[16px] text-white transition-colors hover:bg-[#404040]">
            Projekt starten →
          </button>
        </div>
      </div>
    </section>
  );
}
