"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@heroui/react";
import CheckIcon from "@/app/components/ui/CheckIcon";
import XIcon from "@/app/components/ui/XIcon";

const imgPros1 = "/assets/images/comparison/pros1.png";
const imgPros2 = "/assets/images/comparison/pros2.png";
const imgPros3 = "/assets/images/comparison/pros3.png";
const imgCons1 = "/assets/images/comparison/cons1.png";
const imgCons2 = "/assets/images/comparison/cons2.png";
const imgCons3 = "/assets/images/comparison/cons3.png";

export default function ScalecraftComparisonSection() {
  const [selected, setSelected] = useState("mit");

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
    <section className="relative w-full bg-[#f0f0f0] py-8 md:py-[clamp(4rem,5vw,5rem)]">
      <div className="mx-auto max-w-[1440px] px-3 md:px-[clamp(1.5rem,2vw,2rem)]">
        {/* Heading */}
        <motion.h2 
          className="mb-6 text-center text-[24px] font-normal leading-[1.3] tracking-[-1px] text-[#252525] md:mb-[clamp(3rem,4vw,4rem)] md:text-[clamp(36px,3.5vw,44px)] md:leading-[1.25] md:tracking-[clamp(-1.5px,-0.15vw,-1.92px)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="max-md:block">Strategie, Design und Branding für{" "}</span>
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
            nachhaltigen Erfolg
          </span>
        </motion.h2>

        {/* HeroUI Tabs */}
        <motion.div 
          className="mx-auto mb-8 md:mb-[clamp(2rem,3vw,3rem)]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tabs 
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key as string)}
            disableAnimation={false}
            disableCursorAnimation={false}
            classNames={{
              base: "w-full",
              tabList: "relative flex h-[46px] w-full max-w-full items-center justify-center gap-[4px] rounded-xl border border-white/20 bg-white/10 backdrop-blur-[4.88px] p-[4px] md:h-[52px] md:max-w-[420px] md:gap-[7px] md:p-[6px] lg:h-16 lg:max-w-[525px] mx-auto",
              cursor: "bg-[#404040] shadow-lg rounded-[10px]",
              tab: "h-[36px] md:h-[40px] lg:h-[52px] flex-1 rounded-[10px] px-2 py-1.5 text-[12px] leading-[18px] tracking-tight md:px-4 md:py-2 md:text-[16px] md:leading-6 lg:px-6 lg:py-2.5 lg:text-[20px] lg:leading-7 data-[selected=true]:text-white text-[#4a4a4a] transition-colors duration-200 hover:text-[#1d1d1d] font-normal whitespace-nowrap overflow-hidden",
              tabContent: "group-data-[selected=true]:text-white z-10 relative font-medium truncate",
              panel: "pt-4 md:pt-6 lg:pt-8"
            }}
          >
          <Tab key="mit" title="Mit Scalecraft">
        <>
        <motion.div 
          className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-[clamp(1.5rem,2vw,2rem)]"
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
            className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            <div className="flex flex-1 flex-col">
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[195px] overflow-hidden rounded-[15px] md:h-[clamp(220px,20vw,290px)]">
              <Image
                src={imgPros1}
                alt="Agenturen"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-6 mt-4 flex justify-start md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)]">
              <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[7px] py-[6px] md:px-[8px] md:py-[6.5px] lg:px-[8.75px] lg:py-[7.5px]">
                <span className="text-[14px] font-medium leading-[20px] text-white md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[24.99px]">AGENTUREN</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mx-6 mt-4 flex-1 space-y-1.5 min-h-[200px] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)] md:space-y-[clamp(0.375rem,0.5vw,0.5rem)]">
              {[
                "Dediziertes Performance-Designteam nach deutscher Qualitätsnorm",
                "Strukturierter Workflow mit fester Priorisierung",
                "2× schneller Output, 50 % geringere Kosten",
                "Klare Ansprechpartner & Reporting (Effektive Zeit) Nur das wird abgerechnet",
                "up to date"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-[clamp(0.875rem,1vw,1rem)]">
                  <CheckIcon />
                  <p className="text-[12px] font-light leading-[18px] text-[#546989] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">{feature}</p>
                </div>
              ))}
            </div>
            </div>

            {/* Result */}
            <p className="mx-6 mb-6 mt-4 text-[12px] leading-[18px] text-[#546989] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mb-[clamp(2rem,2.75vw,2.75rem)] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">
              <span className="font-semibold">Ergebnis:</span> Stabile Qualität, planbarer Output, zufriedene Kunden.
            </p>
          </motion.div>

          {/* Card 2: Mitarbeiter */}
          <motion.div 
            className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            <div className="flex flex-1 flex-col">
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[195px] overflow-hidden rounded-[15px] md:h-[clamp(220px,20vw,290px)]">
              <Image
                src={imgPros2}
                alt="Mitarbeiter"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-6 mt-4 flex justify-start md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)]">
              <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[7px] py-[6px] md:px-[8.5px] md:py-[6.5px] lg:px-[10px] lg:py-[7px]">
                <span className="text-[14px] font-medium leading-[20px] text-white md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px]">MITARBEITER</span>
              </div>
            </div>

            {/* Features List */}
            <div className="mx-6 mt-4 flex-1 space-y-1.5 min-h-[200px] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)] md:space-y-[clamp(0.375rem,0.5vw,0.5rem)]">
              {[
                "Externe Entlastung durch skalierbares Designteam",
                "Performance-orientierte Trainings & Guidelines | UP TO DATE",
                "Klare Rollenverteilung & Prozessverantwortung",
                "Mehr Raum fürs interne Team, um zu wachsen"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-[clamp(0.875rem,1vw,1rem)]">
                  <CheckIcon />
                  <p className="text-[12px] font-light leading-[18px] text-[#546989] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">{feature}</p>
                </div>
              ))}
            </div>
            </div>

            {/* Result */}
            <p className="mx-6 mb-6 mt-4 text-[12px] leading-[18px] text-[#546989] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mb-[clamp(2rem,2.75vw,2.75rem)] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">
              <span className="font-semibold">Ergebnis:</span> Dein Team bleibt fokussiert und arbeitet strategisch – nicht operativ im Chaos.
            </p>
          </motion.div>
        </motion.div>

          {/* Card 3: Systeme (Full Width) - Mit Scalecraft */}
          <motion.div 
            className="relative mt-8 overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Image Container */}
          <div className="relative mx-6 mt-5 h-[297px] overflow-hidden rounded-[15px] max-md:mx-4 max-md:h-[195px]">
            <Image
              src={imgPros3}
              alt="Systeme"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 px-11 py-8 md:grid-cols-2 md:items-start md:gap-[clamp(1.5rem,2vw,2rem)] max-md:px-6 max-md:py-6 max-md:gap-6">
            {/* Left Side */}
            <div>
              {/* Badge */}
              <div className="mb-6 flex justify-start max-md:mb-4">
                <div className="inline-flex items-center rounded-full bg-[#ec6036] px-[21px] py-[7.145px] max-md:px-[7px] max-md:py-[6px]">
                  <span className="text-[16px] font-medium leading-[25px] text-white max-md:text-[14px] max-md:leading-[20px]">SYSTEME</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 max-md:space-y-1.5">
                {[
                  "Klare Systeme für Briefing, Freigabe & Feedback",
                  "Einheitliche Brand Guidelines & File-Struktur",
                  "Data-Tracking & Performance-Optimierung",
                  "Kontinuierliche Verbesserung durch BAT-Methode"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 max-md:gap-3">
                    <CheckIcon />
                    <p className="text-[16px] font-light leading-[24px] text-[#546989] max-md:text-[12px] max-md:leading-[18px]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Result */}
            <div className="flex items-start lg:pt-14">
              <p className="text-[16px] leading-[24px] text-[#546989] max-md:text-[12px] max-md:leading-[18px]">
                <span className="font-semibold">Ergebnis:</span> Dein Designprozess wird messbar, skalierbar und profitabel.
              </p>
            </div>
          </div>
        </motion.div>
        </>
          </Tab>
          
          <Tab key="ohne" title="Ohne Scalecraft">
        <>
        <motion.div 
          className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-[clamp(1.5rem,2vw,2rem)]"
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
            className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            <div className="flex flex-1 flex-col">
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[195px] overflow-hidden rounded-[15px] md:h-[clamp(220px,20vw,290px)]">
              <Image
                src={imgCons1}
                alt="Agenturen"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-6 mt-4 flex justify-start md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)]">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2 max-md:px-[7px] max-md:py-[6px]">
                <span className="text-[16px] font-medium uppercase text-white max-md:text-[14px] max-md:leading-[20px]">{ohneScalecraftData.agenturen.title}</span>
              </div>
            </div>

            {/* Issues List */}
            <div className="mx-6 mt-4 flex-1 space-y-1.5 min-h-[200px] md:mx-8 md:mt-5 md:space-y-2 lg:mx-11 lg:mt-6">
              {ohneScalecraftData.agenturen.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-[clamp(0.875rem,1vw,1rem)]">
                  <XIcon />
                  <p className="text-[12px] font-light leading-[18px] text-[#546989] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">{issue}</p>
                </div>
              ))}
            </div>
            </div>

            {/* Result */}
            <p className="mx-6 mb-6 mt-4 text-[12px] leading-[18px] text-[#546989] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mb-[clamp(2rem,2.75vw,2.75rem)] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">
              <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.agenturen.result}
            </p>
          </motion.div>

          {/* Card 2: Mitarbeiter - Ohne */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            className="relative flex h-full flex-col overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
               style={{
                 backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
                 boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
               }}>
            <div className="flex flex-1 flex-col">
            {/* Image Container */}
            <div className="relative mx-4 mt-4 h-[195px] overflow-hidden rounded-[15px] md:h-[clamp(220px,20vw,290px)]">
              <Image
                src={imgCons2}
                alt="Mitarbeiter"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mx-6 mt-4 flex justify-start md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mt-[clamp(1.25rem,1.4vw,1.5rem)]">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2 max-md:px-[7px] max-md:py-[6px]">
                <span className="text-[16px] font-medium uppercase text-white max-md:text-[14px] max-md:leading-[20px]">{ohneScalecraftData.mitarbeiter.title}</span>
              </div>
            </div>

            {/* Issues List */}
            <div className="mx-6 mt-4 flex-1 space-y-1.5 min-h-[200px] md:mx-8 md:mt-5 md:space-y-2 lg:mx-11 lg:mt-6">
              {ohneScalecraftData.mitarbeiter.issues.map((issue, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-3.5 lg:gap-4">
                  <XIcon />
                  <p className="text-[12px] font-light leading-[18px] text-[#546989] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[24px]">{issue}</p>
                </div>
              ))}
            </div>
            </div>

            {/* Result */}
            <p className="mx-6 mb-6 mt-4 text-[12px] leading-[18px] text-[#546989] md:mx-[clamp(2rem,2.2vw,2.75rem)] md:mb-[clamp(2rem,2.75vw,2.75rem)] md:text-[clamp(14px,1.3vw,16px)] md:leading-[clamp(20px,2vw,24px)]">
              <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.mitarbeiter.result}
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3: Systeme (Full Width) - Ohne */}
        <motion.div 
          className="relative mt-8 overflow-hidden rounded-[20px] border-[1.5px] border-white backdrop-blur-[4.875px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
               backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
               boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
             }}>
          {/* Image Container */}
          <div className="relative mx-6 mt-5 h-[297px] overflow-hidden rounded-[15px] max-md:mx-4 max-md:h-[195px]">
            <Image
              src={imgCons3}
              alt="Systeme"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 px-11 py-8 lg:grid-cols-2 max-md:px-6 max-md:py-6 max-md:gap-6">
            {/* Left Side */}
            <div>
              {/* Badge */}
              <div className="mb-6 flex justify-start max-md:mb-4">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-2 max-md:px-[7px] max-md:py-[6px]">
                  <span className="text-[16px] font-medium uppercase text-white max-md:text-[14px] max-md:leading-[20px]">{ohneScalecraftData.systeme.title}</span>
                </div>
              </div>

              {/* Issues List */}
              <div className="space-y-2 max-md:space-y-1.5">
                {ohneScalecraftData.systeme.issues.map((issue, index) => (
                  <div key={index} className="flex items-start gap-4 max-md:gap-3">
                    <XIcon />
                    <p className="text-[16px] font-light leading-[24px] text-[#546989] max-md:text-[12px] max-md:leading-[18px]">{issue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Result */}
            <div className="flex items-start lg:pt-14">
              <p className="text-[16px] leading-[24px] text-[#546989] max-md:text-[12px] max-md:leading-[18px]">
                <span className="font-semibold">Ergebnis:</span> {ohneScalecraftData.systeme.result}
              </p>
            </div>
          </div>
        </motion.div>
        </>
          </Tab>
        </Tabs>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center md:mt-14 lg:mt-16">
          <button className="relative h-10 w-[180px] overflow-hidden rounded-[300px] bg-neutral-800 outline outline-1 outline-offset-[-1px] outline-black transition-all duration-300 hover:bg-[#404040] hover:scale-105 md:h-11 md:w-[200px] lg:h-12 lg:w-52">
            <div className="absolute left-[14px] top-1/2 w-[calc(100%-28px)] -translate-y-1/2 text-center text-[14px] font-normal text-white md:text-[15px] lg:text-base">
              Projekt starten →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
