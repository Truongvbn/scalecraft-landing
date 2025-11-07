"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewport } from "@/app/lib/animations";

// Assets for Card 1 - MITARBEITER
const imgGeminiGeneratedImageOulitpoulitpouli1 = "/assets/images/case-study-main.png";
const imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4 = "/assets/images/case-study-overlay1.png";
const imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1 = "/assets/images/case-study-overlay2.png";
const imgBackground1 = "/assets/images/case-study-icon.png";

// Assets for Card 2 - AGENTUREN
const imgGeminiGeneratedImageOulitpoulitpouli2 = "/assets/images/case-study-main.png";
const imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei2 = "/assets/images/case-study-overlay1.png";
const imgGeminiGeneratedImageVm2Mutvm2Mutvm2M2 = "/assets/images/case-study-overlay2.png";
const imgBackground2 = "/assets/images/case-study-icon.png";

// Assets for Card 3 - UNTERNEHMEN
const imgGeminiGeneratedImageOulitpoulitpouli3 = "/assets/images/case-study-main.png";
const imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei3 = "/assets/images/case-study-overlay1.png";
const imgGeminiGeneratedImageVm2Mutvm2Mutvm2M3 = "/assets/images/case-study-overlay2.png";
const imgBackground3 = "/assets/images/case-study-icon.png";

const CaseStudyCard = ({ 
  title, 
  badge, 
  result, 
  challenges, 
  images,
  badgeColor 
}: {
  title: string;
  badge: string;
  result: string;
  challenges: string[];
  images: {
    main: string;
    overlay1: string;
    overlay2: string;
    background: string;
  };
  badgeColor: string;
}) => (
  <div 
    className="backdrop-blur-[3.252px] backdrop-filter border-[1.001px] border-solid border-white relative rounded-[13.343px] w-full h-[487px] overflow-hidden"
    style={{ 
      backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)",
      boxShadow: 'inset 0px 1.084px 4.336px 0px rgba(255,255,255,0.4)'
    }}
  >
    {/* Result Text */}
    <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] h-[29px] justify-center leading-[0] left-[17px] not-italic text-[#546989] text-[0px] top-[447.5px] translate-y-[-50%] w-[327px]">
      <p className="leading-[16.011px] text-[12px] whitespace-pre-wrap">
        <span className="font-['SF_Pro:Semibold',sans-serif] not-italic">Ergebnis:</span> {result}
      </p>
    </div>

    {/* Challenges List */}
    <div className="absolute content-stretch flex flex-col gap-[5.986px] items-start left-[17px] top-[268.86px] w-[361.999px]">
      {challenges.map((challenge, index) => (
        <div key={index} className="content-stretch flex gap-[11.972px] h-[25.44px] items-center relative shrink-0 w-[336.703px]">
          <div className="relative shrink-0 size-[18px]">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 95, 87, 1)" } as React.CSSProperties}>
              <Image alt="" className="block max-w-none size-full" src={images.background} width={18} height={18} quality={85} loading="lazy" />
            </div>
          </div>
          <div className="flex flex-col font-['SF_Pro:Light',sans-serif] h-[28.433px] justify-center leading-[0] not-italic relative shrink-0 text-[#546989] text-[12px] w-[307.522px]">
            <p className="leading-[17.957px] whitespace-pre-wrap">{challenge}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Image Container */}
    <div className="absolute bg-neutral-700 h-[193.471px] left-[calc(50%+1.3px)] overflow-clip rounded-[10.674px] top-[10.01px] translate-x-[-50%] w-[358.922px]">
      <div className="absolute left-0 size-[358.922px] top-[-63.38px]">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={images.main} fill quality={85} loading="lazy" />
      </div>
      <div className="absolute h-[252.2px] left-[-20.01px] top-[-29.35px] w-[398.25px]">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={images.overlay1} fill quality={85} loading="lazy" />
      </div>
      <div className="absolute h-[250.99px] left-[-15.34px] top-[-28.69px] w-[389.386px]">
        <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={images.overlay2} fill quality={85} loading="lazy" />
      </div>
    </div>

    {/* Badge */}
    <div 
      className={`absolute h-[25.955px] left-[calc(50%+-127.84px)] rounded-[30.535px] top-[222.83px] translate-x-[-50%] w-[89.315px] ${badgeColor}`}
    >
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] h-[15.268px] justify-center leading-[0] left-[44.28px] lowercase not-italic text-[0px] text-center text-white top-[12.21px] translate-x-[-50%] translate-y-[-50%] w-[77.865px]">
        <p className="leading-[17.1px] text-[12px] whitespace-pre-wrap">{badge}</p>
      </div>
    </div>
  </div>
);

export default function CaseStudySection() {
  const [currentCard, setCurrentCard] = useState(0);

  const caseStudies = [
    {
      title: "Mitarbeiter",
      badge: "MITARBEITER",
      result: "Ineffizienz, Leerlauf und verlorene Learnings.",
      challenges: [
        "Inhouse-Team überlastet mit Ad-hoc-Aufgaben",
        "Kein Fokus auf Creative Performance",
        "Fehlende Spezialisierung & Weiterbildung",
        "Unklare Verantwortlichkeiten im Designprozess"
      ],
      images: {
        main: imgGeminiGeneratedImageOulitpoulitpouli1,
        overlay1: imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei4,
        overlay2: imgGeminiGeneratedImageVm2Mutvm2Mutvm2M1,
        background: imgBackground1
      },
      badgeColor: "bg-gradient-to-r from-14% from-[#ec6036] to-100% to-[#f1983f]"
    },
    {
      title: "Agenturen",
      badge: "AGENTUREN",
      result: "Projekte verzögern sich, Margen schrumpfen, Kunden sind unzufrieden.",
      challenges: [
        "Design-Workload überfordert das interne Team",
        "Viele Task können nicht angenommen werden",
        "Qualität schwankt je nach Designer & Zeitdruck",
        "Endlose Feedbackschleifen mit Freelancern",
        "Kein klarer Prozess für Priorisierung & Delivery"
      ],
      images: {
        main: imgGeminiGeneratedImageOulitpoulitpouli2,
        overlay1: imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei2,
        overlay2: imgGeminiGeneratedImageVm2Mutvm2Mutvm2M2,
        background: imgBackground2
      },
      badgeColor: "bg-gradient-to-r from-14% from-[#ec6036] to-100% to-[#f1983f]"
    },
    {
      title: "Unternehmen",
      badge: "UNTERNEHMEN",
      result: "Kein einheitlicher Creative-Prozess, Tools & Assets unstrukturiert verteilt.",
      challenges: [
        "Kein einheitlicher Creative-Prozess",
        "Tools & Assets sind unstrukturiert verteilt",
        "Keine datengetriebene Design-Analyse",
        "Fehlendes Reporting zu Performance & Effizienz"
      ],
      images: {
        main: imgGeminiGeneratedImageOulitpoulitpouli3,
        overlay1: imgGeminiGeneratedImageX6Eihmx6Eihmx6Ei3,
        overlay2: imgGeminiGeneratedImageVm2Mutvm2Mutvm2M3,
        background: imgBackground3
      },
      badgeColor: "bg-gradient-to-r from-14% from-[#ec6036] to-100% to-[#f1983f]"
    }
  ];

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CaseStudyCard {...study} />
            </motion.div>
          ))}
        </div>

        {/* Navigation for mobile/single view */}
        <div className="flex justify-center gap-3 md:hidden">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentCard === index ? "bg-[#404040]" : "bg-[#8c8c8c] opacity-20"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
