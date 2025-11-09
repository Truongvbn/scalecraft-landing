"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewport, pulse } from "@/app/lib/animations";
import GlassCard from "../ui/GlassCard";
import SettingsIcon from "../icons/SettingsIcon";
import DownIcon from "../icons/DownIcon";
import CrystalIcon from "../icons/CrystalIcon";
import UserInfoIcon from "../icons/UserInfoIcon";

// Feature cards data
const FEATURE_CARDS = [
  {
    id: 1,
    side: 'left' as const,
    icon: SettingsIcon,
    text: (
      <>
        <span className="font-semibold text-[#ff8d28]">Wie wir dein Design-System strukturieren</span>, damit du schneller hochwertige Creatives erhältst – ganz ohne Feedback-Chaos oder Bottlenecks.
      </>
    ),
  },
  {
    id: 2,
    side: 'right' as const,
    icon: DownIcon,
    text: (
      <>
        <span className="font-semibold text-[#ff8d28]">Wie du deine Produktionskosten um bis zu 50 % reduzierst</span>, während dein Creative-Output sich verdoppelt.
      </>
    ),
  },
  {
    id: 3,
    side: 'left' as const,
    icon: CrystalIcon,
    text: (
      <>
        <span className="font-semibold text-[#ff8d28]">Wie die BAT-Methode</span> klare Verantwortlichkeiten schafft, Kommunikation vereinfacht und Prioritäten automatisch richtig setzt.
      </>
    ),
  },
  {
    id: 4,
    side: 'right' as const,
    icon: UserInfoIcon,
    text: (
      <>
        <span className="font-semibold text-[#ff8d28]">Wie Scalecraft bereits über 30 Agenturen & Freelancern</span> geholfen hat, Workflows zu optimieren, ROAS zu steigern und Projekte planbarer zu machen und wie wir Zusammenarbeiten
      </>
    ),
  },
];

// Timeline dots positions (in px from top)
const TIMELINE_DOTS = [85, 411, 715, 1041];

export default function FeatureCardsSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-4 pt-16 md:px-8 md:pt-20">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 bg-[#202020]">
        {/* Radial Gradients */}
        <div className="absolute inset-0">
          <div className="absolute left-[2.94%] top-[31.53%] h-[58.85%] w-[64.78%] rounded-full bg-[#FA935C]/28 opacity-80" style={{ filter: 'blur(120px)' }} />
          <div className="absolute left-[35.23%] top-[25.6%] h-[58.85%] w-[64.78%] rounded-full bg-[#FAB875]/28 opacity-70" style={{ filter: 'blur(120px)' }} />
          <div className="absolute left-0 top-0 h-[58.85%] w-[64.78%] rounded-full bg-[#F7A989]/28 opacity-90" style={{ filter: 'blur(120px)' }} />
        </div>
        
        {/* Texture Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='220' height='220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Heading */}
        <motion.h1 
          className="mb-12 text-center text-3xl font-normal leading-tight tracking-tight md:mb-14 md:text-4xl lg:mb-16 lg:text-5xl"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <span className="bg-gradient-to-t from-[#ea6035] to-[#ef973e] bg-clip-text text-transparent">
            Skalierbares Design.{" "}
          </span>
          <span className="text-white">Messbare Ergebnisse.</span>
        </motion.h1>

        {/* Profile Section */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:mb-20 md:flex-row md:items-start md:justify-center md:gap-6 lg:gap-8">
          {/* Mobile + Tablet: Image + Quote in same row */}
          <div className="flex items-start gap-4 md:hidden">
            {/* Profile Image + Name/Title */}
            <div className="flex flex-col gap-2 md:gap-3 flex-shrink-0">
              <div className="relative h-[90px] w-[90px] overflow-hidden rounded-[16px] border-[1.5px] border-white/90 shadow-lg md:h-[130px] md:w-[130px] md:rounded-[22px]">
                <Image
                  src="/assets/images/features/feature-profile.png"
                  alt="Nguyen Dac Hoa"
                  fill
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-sm font-medium text-white md:text-lg">Nguyen Dac Hoa</p>
                <p className="text-[9px] font-light uppercase tracking-wide text-white/80 md:text-[11px]">GESCHÄFTSFÜHRER</p>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1 space-y-2 md:space-y-3">
              <div className="flex items-start">
                <Image
                  src="/assets/images/features/feature-icon-1.svg"
                  alt=""
                  width={10}
                  height={8}
                  className="md:h-[12px] md:w-[15px]"
                  quality={85}
                  loading="lazy"
                />
              </div>
              
              <p className="text-[9px] leading-[1.4] text-white md:text-[13px] md:leading-[1.5]">
                Wir zeigen dir, wie du mit der BAT-Methode (Business Development – Account Management – Team Lead) deine Creative-Prozesse systematisch beschleunigst und gleichzeitig Kosten senkst, Qualität erhöhst und Kontrolle behältst.
              </p>

              <div className="flex items-end justify-end">
                <Image
                  src="/assets/images/features/feature-icon-2.svg"
                  alt=""
                  width={10}
                  height={8}
                  className="rotate-180 md:h-[12px] md:w-[15px]"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Profile Image only */}
          <div className="relative hidden overflow-hidden rounded-[24px] border-[2px] border-white/90 shadow-xl md:block md:h-[180px] md:w-[180px] lg:h-[220px] lg:w-[220px] md:rounded-[28px] lg:rounded-[32px] flex-shrink-0 aspect-square">
            <Image
              src="/assets/images/features/feature-profile.png"
              alt="Nguyen Dac Hoa"
              fill
              className="object-cover"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Desktop: Quote & Info */}
          <div className="hidden max-w-2xl space-y-3 text-left md:block md:space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/features/feature-icon-1.svg"
                alt=""
                width={26}
                height={21}
                quality={85}
                loading="lazy"
              />
            </div>
            
            <p className="text-base leading-relaxed text-white md:text-lg">
              Wir zeigen dir, wie du mit der BAT-Methode (Business Development – Account Management – Team Lead) deine Creative-Prozesse systematisch beschleunigst und gleichzeitig Kosten senkst, Qualität erhöhst und Kontrolle behältst.
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/features/feature-icon-2.svg"
                alt=""
                width={25}
                height={21}
                className="rotate-180"
                quality={85}
                loading="lazy"
              />
            </div>

            <div className="space-y-1">
              <p className="text-lg font-medium text-white md:text-xl">Nguyen Dac Hoa</p>
              <p className="text-sm font-light text-white">GESCHÄFTSFÜHRER</p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div 
          className="relative mx-auto px-4 md:px-0 md:w-[905px] lg:w-[1104px]"
        >
          <div 
            className="relative md:w-[1104px] md:scale-[0.82] md:origin-center lg:scale-100"
          >
          {/* Vertical Timeline Line - at exact grid boundary (520px = col1 end) */}
          <div 
            className="absolute top-0 hidden h-full w-px bg-gray-600 md:block"
            style={{ left: '520px' }}
          >
            {/* Timeline Dots */}
            {TIMELINE_DOTS.map((top, index) => (
              <motion.div 
                key={index}
                className="absolute left-1/2 h-[26px] w-[26px] -translate-x-1/2"
                style={{ top: `${top}px` }}
                variants={pulse}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={`/assets/images/features/feature-timeline-dot-${index + 1}.svg`}
                  alt=""
                  width={26}
                  height={26}
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="space-y-8 md:space-y-12"
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
            {FEATURE_CARDS.map((card) => {
              const IconComponent = card.icon;
              const isLeft = card.side === 'left';
              
              return (
                <motion.div 
                  key={card.id}
                  className="flex justify-center items-center md:grid md:grid-cols-[520px_584px]"
                  variants={{
                    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <div className={`
                    w-full max-w-[382px] md:max-w-none
                    ${isLeft 
                      ? 'md:justify-self-end md:col-start-1 md:mr-[23px]' 
                      : 'md:col-start-2 md:justify-self-start md:ml-[23px]'
                    }
                  `}>
                    <GlassCard pointRight={!isLeft}>
                      <div className="mb-4 md:mb-5 h-[56px] w-[56px] md:h-[72px] md:w-[72px]">
                        <IconComponent />
                      </div>
                      <p className="text-[13px] leading-[1.4] text-white md:text-[17px] md:leading-[1.6]">
                        {card.text}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          </div>
        </div>

        {/* Bottom SCALECRAFT Text */}
        <div className="mt-12 md:mt-12 text-center">
          <div className="inline-block">
            <Image
              src="/assets/images/features/feature-scalecraft-text.svg"
              alt="SCALECRAFT"
              width={1430}
              height={165}
              className="opacity-30"
              quality={85}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
