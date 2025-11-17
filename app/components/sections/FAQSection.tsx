"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/lib/animations";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wie läuft die Zusammenarbeit mit Scalecraft ab?",
    answer: "Nach einem kurzen Erstgespräch erhältst du Zugang zu unserem strukturierten Workflow. Du gibst dein Briefing ab – wir übernehmen den Rest: Planung, Design und Übergabe."
  },
  {
    question: "Wie schnell kann ein Projekt starten?",
    answer: "In der Regel innerhalb von 3–5 Werktagen nach Kickoff.\n\nWir arbeiten mit klaren Timelines und liefern zuverlässig – auch bei kurzfristigen Deadlines."
  },
  {
    question: "Was unterscheidet Scalecraft von klassischen Agenturen oder Freelancern?",
    answer: "Wir kombinieren die Effizienz eines dedizierten Designteams mit der Flexibilität externer Ressourcen.\n\nKein Ticketsystem, keine Kommunikationslücken – dein persönlicher Ansprechpartner koordiniert alles. Arbeiten wie DEIN OFFSHORE TEAM"
  },
  {
    question: "Wie funktioniert die BAT-Methode?",
    answer: "Unsere BAT-Methode (Business Development – Account Management – Team Lead) sorgt für Struktur, klare Verantwortlichkeiten und Priorisierung.\n\nSo bleibt dein Designprozess messbar, transparent und skalierbar."
  },
  {
    question: "Für wen ist Scalecraft geeignet?",
    answer: "Für E-Commerce-AMAZON - Agenturen, Freelancer und Marketing-Teams, die mehr Design-Output brauchen, ohne interne Ressourcen aufzubauen."
  },
  {
    question: "Welche Leistungen kann ich outsourcen?",
    answer: "Von Amazon-Visuals über Ad Creatives, Landingpage-Designs, 3D-Renderings bis hin zu Branding-Systemen – unser Team deckt die gesamte Design-Pipeline ab."
  },
  {
    question: "Wie flexibel sind die Kapazitäten?",
    answer: "Du kannst monatlich zwischen verschiedenen Stundenpaketen wählen – von 80 bis 640 Stunden.\n\nOhne langfristige Bindung, jederzeit skalierbar."
  },
  {
    question: "Wie gewährleistet ihr gleichbleibende Qualität?",
    answer: "Durch feste Ansprechpartner, interne Qualitätssicherung und klar dokumentierte Workflows. Jedes Creative durchläuft eine Review-Schleife, bevor es final übergeben wird."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-8 px-3 sm:py-[clamp(2rem,6vw,6rem)] sm:px-[clamp(2rem,6vw,6rem)]">
      <div className="mx-auto max-w-[382px] sm:max-w-[1172px]">
        {/* Heading */}
        <motion.h2 
          className="mb-8 text-center text-[24px] font-normal leading-[32px] text-[#252525] sm:mb-12 md:mb-[clamp(4rem,6vw,6rem)] md:text-[clamp(32px,3vw,40px)] md:leading-[clamp(48px,4vw,56px)]"
          variants={fadeInUp}
          initial="hidden"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Häufig gestellte{" "}
          <span 
            className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Fragen
          </span>
        </motion.h2>

        {/* FAQ Items */}
        <motion.div 
          className="space-y-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-t border-[#b3b3b3]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:bg-gray-50 md:py-[clamp(2.5rem,4vw,3.125rem)]"
              >
                <h3 className="text-[13px] font-normal leading-[16px] text-[#252525] pr-4 sm:pr-8 md:text-[clamp(18px,2vw,24px)] md:leading-[clamp(22px,2.4vw,28.68px)]">
                  {faq.question}
                </h3>
                
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Image
                      src="/assets/images/faq/faq-collapse-icon.svg"
                      alt="Collapse"
                      width={11.308}
                      height={11.308}
                      className="transition-transform sm:w-[22.5] sm:h-[22.5]"
                      quality={85}
                    />
                  ) : (
                    <Image
                      src="/assets/images/faq/faq-expand-icon.svg"
                      alt="Expand"
                      width={11.308}
                      height={11.308}
                      className="transition-transform sm:w-[22.5] sm:h-[22.5]"
                      quality={85}
                    />
                  )}
                </div>
              </button>

              {/* Answer - Expandable */}
              {openIndex === index && faq.answer && (
                <div className="pb-6 pr-12 animate-in slide-in-from-top-2 duration-200 md:pb-8 md:pr-16">
                  <p className="text-[13px] leading-[19px] text-gray-700 md:text-[clamp(15px,1.5vw,18px)] md:leading-[clamp(22px,2vw,26px)] whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-[#b3b3b3]"></div>
        </motion.div>
      </div>
    </section>
  );
}
