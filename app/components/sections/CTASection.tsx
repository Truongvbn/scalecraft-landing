"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/app/lib/animations";
import MagneticButton from "@/app/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-32">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cta/cta-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.h2 
          className="mb-6 text-[28px] font-normal leading-[34px] tracking-tight text-[#252525] md:mb-7 md:text-[42px] md:leading-[50px] md:tracking-[-1.5px] lg:mb-8 lg:text-[60px] lg:leading-[70px] lg:tracking-[-2.56px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Jetzt mit weniger Aufwand zu besseren Inhalten starten!
        </motion.h2>

        {/* Description Paragraphs */}
        <motion.div 
          className="mx-auto mb-6 max-w-4xl space-y-3 text-[13px] leading-[19px] text-[#050403] md:mb-7 md:space-y-3.5 md:text-[16px] md:leading-[22px] lg:mb-8 lg:space-y-4 lg:text-[20.625px] lg:leading-[27.5px] lg:tracking-[-0.275px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="font-light">
            Scalecraft hilft Agenturen, Freelancern und Creators, ihre Designprozesse zu professionalisieren – mit strukturierten Abläufen, eingespielten Teams und einem festen deutschsprachigen Ansprechpartner.
          </p>
          
          <p className="font-light">
            In einem kostenlosen Erstgespräch zeigen wir dir, wie du mit weniger Aufwand konstant hochwertige Creatives produzierst – schneller, effizienter und ohne Kompromisse bei Qualität oder Budget.
          </p>
          
          <p className="font-semibold">
            Weniger Overhead. Mehr Output. 100 % Qualität.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mb-8 flex justify-center md:mb-9 lg:mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <MagneticButton 
            className="rounded-full border border-[#a3e532] bg-[#e8fead] px-6 py-2.5 text-[13px] font-medium leading-normal text-[#404040] transition-all hover:bg-[#dff99d] hover:shadow-lg md:px-7 md:py-3 md:text-[14.5px] lg:px-8 lg:text-[16px]"
            strength={0.3}
          >
            Termin vereinbaren
          </MagneticButton>
        </motion.div>

        {/* Client Avatars */}
        <motion.div 
          className="flex items-center justify-center gap-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Avatar 1 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.428px] border-white/90 lg:h-11 lg:w-11">
            <Image
              src="/assets/images/cta/cta-avatar-1.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 2 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.855px] border-white/90 md:h-9 md:w-9 md:border-[1px] lg:h-11 lg:w-11 lg:border-[1.189px]">
            <Image
              src="/assets/images/cta/cta-avatar-2.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 3 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.428px] border-white/90 lg:h-11 lg:w-11">
            <Image
              src="/assets/images/cta/cta-avatar-3.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 4 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.428px] border-white/90 lg:h-11 lg:w-11">
            <Image
              src="/assets/images/cta/cta-avatar-4.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 5 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.428px] border-white/90 lg:h-11 lg:w-11">
            <Image
              src="/assets/images/cta/cta-avatar-5.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 6 */}
          <div className="relative -mr-2 h-8 w-8 overflow-hidden rounded-full border-[0.428px] border-white/90 lg:h-11 lg:w-11">
            <Image
              src="/assets/images/cta/cta-avatar-6.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="32px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* 200+ Badge */}
          <div className="relative h-8 w-8 md:h-9 md:w-9 lg:h-11 lg:w-11">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f1983f] via-[#ec6036] to-[#ec6036]"></div>
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-white">
              <span className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-[7.5px] font-semibold leading-[1.2] text-transparent md:text-[9px] lg:text-[10.703px]">
                200+
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
