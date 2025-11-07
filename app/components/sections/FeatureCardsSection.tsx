"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, gridContainer, gridItem, viewport, pulse } from "@/app/lib/animations";
import GlassCard from "../ui/GlassCard";
import SettingsIcon from "../icons/SettingsIcon";
import DownIcon from "../icons/DownIcon";
import CrystalIcon from "../icons/CrystalIcon";
import UserInfoIcon from "../icons/UserInfoIcon";

export default function FeatureCardsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-8 pb-4 pt-24 lg:px-16">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("/assets/images/feature-texture.png")',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute left-[-50%] top-[30%] h-[800px] w-[1200px] rounded-full bg-orange-500/20 blur-3xl"></div>
        <div className="absolute right-[-30%] top-[20%] h-[800px] w-[1200px] rounded-full bg-pink-500/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Heading */}
        <motion.h1 
          className="mb-16 text-center text-4xl font-normal leading-tight tracking-tight lg:text-5xl"
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
        <div className="mb-20 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
          {/* Profile Image */}
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border border-white/90">
            <Image
              src="/assets/images/feature-profile.png"
              alt="Nguyen Dac Hoa"
              fill
              className="object-cover"
              quality={85}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gray-500/20"></div>
          </div>

          {/* Profile Info & Quote */}
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <Image
                src="/assets/images/feature-icon-1.svg"
                alt=""
                width={26}
                height={21}
                quality={85}
              loading="lazy"
              />
            </div>
            
            <p className="text-lg leading-relaxed text-white">
              Wir zeigen dir, wie du mit der BAT-Methode (Business Development – Account Management – Team Lead) deine Creative-Prozesse systematisch beschleunigst und gleichzeitig Kosten senkst, Qualität erhöhst und Kontrolle behältst.
            </p>

            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <Image
                src="/assets/images/feature-icon-2.svg"
                alt=""
                width={25}
                height={21}
                className="rotate-180"
                quality={85}
              loading="lazy"
              />
            </div>

            <div className="space-y-1">
              <p className="text-xl font-medium text-white">Nguyen Dac Hoa</p>
              <p className="text-sm font-light text-white">GESCHÄFTSFÜHRER</p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="relative mx-auto max-w-6xl">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-600 lg:block">
            {/* Timeline Dots */}
            <motion.div 
              className="absolute left-1/2 top-[95px] h-[26px] w-[26px] -translate-x-1/2"
              variants={pulse}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/images/feature-timeline-dot-1.svg"
                alt=""
                width={26}
                height={26}
                quality={85}
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="absolute left-1/2 top-[318px] h-[26px] w-[26px] -translate-x-1/2"
              variants={pulse}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/images/feature-timeline-dot-2.svg"
                alt=""
                width={26}
                height={26}
                quality={85}
              loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="absolute left-1/2 top-[560px] h-[26px] w-[26px] -translate-x-1/2"
              variants={pulse}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/images/feature-timeline-dot-3.svg"
                alt=""
                width={26}
                height={26}
                quality={85}
              loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="absolute left-1/2 top-[810px] h-[26px] w-[26px] -translate-x-1/2"
              variants={pulse}
              initial="initial"
              animate="animate"
            >
              <Image
                src="/assets/images/feature-timeline-dot-4.svg"
                alt=""
                width={26}
                height={26}
                quality={85}
              loading="lazy"
              />
            </motion.div>
          </div>

          <motion.div 
            className="space-y-12"
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
            {/* Card 1 - Left */}
            <motion.div 
              className="flex justify-start lg:pr-[50%]"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="w-full max-w-[497px]">
                <GlassCard>
                  <div className="mb-6 h-[97px] w-[97px]">
                    <SettingsIcon />
                  </div>
                  <p className="text-lg leading-relaxed text-white">
                    <span className="font-semibold text-[#ff8d28]">Wie wir dein Design-System strukturieren</span>, damit du schneller hochwertige Creatives erhältst – ganz ohne Feedback-Chaos oder Bottlenecks.
                  </p>
                </GlassCard>
              </div>
            </motion.div>

            {/* Card 2 - Right */}
            <motion.div 
              className="flex justify-end lg:pl-[50%]"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="w-full max-w-[474px]">
                <GlassCard pointRight>
                  <div className="mb-6 h-[97px] w-[97px]">
                    <DownIcon />
                  </div>
                  <p className="text-lg leading-relaxed text-white">
                    <span className="font-semibold text-[#ff8d28]">Wie du deine Produktionskosten um bis zu 50 % reduzierst</span>, während dein Creative-Output sich verdoppelt.
                  </p>
                </GlassCard>
              </div>
            </motion.div>

            {/* Card 3 - Left */}
            <motion.div 
              className="flex justify-start lg:pr-[50%]"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="w-full max-w-[497px]">
                <GlassCard>
                  <div className="mb-6 h-[97px] w-[97px]">
                    <CrystalIcon />
                  </div>
                  <p className="text-lg leading-relaxed text-white">
                    <span className="font-semibold text-[#ff8d28]">Wie die BAT-Methode</span> klare Verantwortlichkeiten schafft, Kommunikation vereinfacht und Prioritäten automatisch richtig setzt.
                  </p>
                </GlassCard>
              </div>
            </motion.div>

            {/* Card 4 - Right */}
            <motion.div 
              className="flex justify-end lg:pl-[50%]"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="w-full max-w-[474px]">
                <GlassCard pointRight>
                  <div className="mb-6 h-[92px] w-[92px]">
                    <UserInfoIcon />
                  </div>
                  <p className="text-lg leading-relaxed text-white">
                    <span className="font-semibold text-[#ff8d28]">Wie Scalecraft bereits über 30 Agenturen & Freelancern</span> geholfen hat, Workflows zu optimieren, ROAS zu steigern und Projekte planbarer zu machen und wie wir Zusammenarbeiten
                  </p>
                </GlassCard>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom SCALECRAFT Text */}
        <div className="mt-12 text-center">
          <div className="inline-block">
            <Image
              src="/assets/images/feature-scalecraft-text.svg"
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
