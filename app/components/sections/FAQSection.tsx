"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewport } from "@/app/lib/animations";

interface FAQItem {
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wie läuft die Zusammenarbeit mit Scalecraft ab?",
    answer: "Die Zusammenarbeit beginnt mit einem kostenlosen Erstgespräch, in dem wir deine Anforderungen besprechen und einen maßgeschneiderten Plan erstellen."
  },
  {
    question: "Wie schnell kann ein Projekt starten?",
    answer: "In der Regel können wir innerhalb von 48 Stunden nach Vertragsabschluss mit deinem Projekt starten."
  },
  {
    question: "Was unterscheidet Scalecraft von klassischen Agenturen oder Freelancern?",
    answer: "Wir bieten die Flexibilität von Freelancern mit der Zuverlässigkeit und Qualität einer Agentur, kombiniert mit strukturierten Prozessen und einem festen Ansprechpartner."
  },
  {
    question: "Wie funktioniert die BAT-Methode?",
    answer: "Die BAT-Methode (Brief, Approve, Track) ist unser strukturierter Prozess für effiziente Projektumsetzung mit klaren Briefings, schnellen Freigaben und transparentem Tracking."
  },
  {
    question: "Für wen ist Scalecraft geeignet?",
    answer: "Scalecraft ist ideal für Agenturen, Freelancer und Creators, die ihre Designprozesse professionalisieren und skalieren möchten."
  },
  {
    question: "Welche Leistungen kann ich outsourcen?",
    answer: "Du kannst alle Design- und Creative-Leistungen outsourcen, von Social Media Content über Webdesign bis hin zu Branding und Motion Graphics."
  },
  {
    question: "Wie flexibel sind die Kapazitäten?",
    answer: "Unsere Kapazitäten sind sehr flexibel und können je nach Projektbedarf schnell angepasst werden."
  },
  {
    question: "Wie gewährleistet ihr gleichbleibende Qualität?",
    answer: "Durch standardisierte Prozesse, erfahrene Teams und kontinuierliches Quality Management stellen wir konstant hohe Qualität sicher."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 px-8 lg:px-24">
      <div className="mx-auto max-w-[1172px]">
        {/* Heading */}
        <motion.h2 
          className="mb-24 text-center text-[40px] font-normal leading-[56px] text-[#252525]"
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
                className="flex w-full items-center justify-between py-[50px] text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-[24px] font-normal leading-[28.68px] text-black pr-8">
                  {faq.question}
                </h3>
                
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Image
                      src="/assets/images/faq-collapse-icon.svg"
                      alt="Collapse"
                      width={22.5}
                      height={22.5}
                      className="transition-transform"
                      quality={85}
                    />
                  ) : (
                    <Image
                      src="/assets/images/faq-expand-icon.svg"
                      alt="Expand"
                      width={22.5}
                      height={22.5}
                      className="transition-transform"
                      quality={85}
                    />
                  )}
                </div>
              </button>

              {/* Answer - Expandable */}
              {openIndex === index && faq.answer && (
                <div className="pb-8 pr-16 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-[18px] leading-[26px] text-gray-700">
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
