"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/app/lib/animations";
import MagneticButton from "@/app/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f0f1ff] py-24 lg:py-32">
      {/* Background Eclipse Effect */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-60">
        <div 
          className="h-full w-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 107, 157, 0.3) 0%, rgba(255, 138, 91, 0.2) 50%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h120v120H0z" fill="none"/%3E%3Cpath d="M60 0L0 60l60 60 60-60z" fill="%23000" fill-opacity="0.1"/%3E%3C/svg%3E")',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
        {/* Main Heading */}
        <motion.h2 
          className="mb-8 text-4xl font-normal leading-tight tracking-tight text-[#252525] lg:text-[60px] lg:leading-[70px] lg:tracking-[-2.56px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Jetzt mit weniger Aufwand zu besseren Inhalten starten!
        </motion.h2>

        {/* Description Paragraphs */}
        <motion.div 
          className="mx-auto mb-8 max-w-4xl space-y-4 text-lg leading-relaxed text-[#050403] lg:text-[20.625px] lg:leading-[27.5px] lg:tracking-[-0.275px]"
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
          
          <p className="font-bold">
            Weniger Overhead. Mehr Output. 100 % Qualität.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mb-10 flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <MagneticButton 
            className="rounded-full border border-[#a3e532] bg-[#e8fead] px-8 py-3 text-[16px] font-medium leading-normal text-[#404040] transition-all hover:bg-[#dff99d] hover:shadow-lg"
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
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[0.595px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-1.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 2 */}
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[1.189px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-2.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 3 */}
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[0.595px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-3.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 4 */}
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[0.595px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-4.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 5 */}
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[0.595px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-5.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* Avatar 6 */}
          <div className="relative -mr-2 h-11 w-11 overflow-hidden rounded-full border-[0.595px] border-white/90">
            <Image
              src="/assets/images/cta/cta-avatar-6.png"
              alt="Client"
              fill
              className="object-cover"
              sizes="44px"
              quality={85}
              loading="lazy"
            />
          </div>

          {/* 200+ Badge */}
          <div className="relative h-11 w-11">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f1983f] via-[#ec6036] to-[#ec6036]"></div>
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-white">
              <span className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-[10.703px] font-semibold leading-[1.2] text-transparent">
                200+
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
