"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, gridContainer, viewport, bentoStagger, bentoItem, cardLift, imageZoom } from "@/app/lib/animations";

export default function VisualSolutionsSection() {
  return (
    <section className="relative mx-auto mb-16 mt-0 w-full max-w-7xl overflow-hidden rounded-[60px] bg-gradient-to-br from-pink-100 via-orange-50 to-white px-8 py-24 shadow-lg lg:px-16">
      <motion.div 
        className="grid grid-cols-1 gap-16 lg:grid-cols-2"
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          variants={slideInLeft}
        >
          {/* Main Heading */}
          <motion.div
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-normal leading-tight tracking-tight text-[#252525] lg:text-5xl">
              Wir gestalten visuelle Lösungen,
              <span 
                className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {` die verkaufen`}
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <div>
            <p className="text-lg font-light leading-relaxed text-[#404040]">
              Ob Produktlaunch, Marketingkampagnen oder Rebranding deines Bestsellers – unser Kreativteam entwickelt performante Amazon-Visuals und Shop-Assets, die messbar konvertieren. Schnell, zuverlässig und mit einem klaren System.
            </p>
          </div>

          {/* Was uns auszeichnet */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#404040]">
              Was uns auszeichnet
            </h3>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image
                    src="/assets/images/visual-check-icon-1.svg"
                    alt=""
                    width={20}
                    height={20}
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-light text-[#404040]">
                  Hochqualifizierte Designer mit tiefem E-Commerce-Verständnis
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image
                    src="/assets/images/visual-check-icon-2.svg"
                    alt=""
                    width={20}
                    height={20}
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-light text-[#404040]">
                  Strategie- & Conversion-orientierte Gestaltung
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Image
                    src="/assets/images/visual-check-icon-3.svg"
                    alt=""
                    width={20}
                    height={20}
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-light text-[#404040]">
                  Eingespielte Abläufe, die Qualität und Geschwindigkeit garantieren
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div>
            <p className="text-lg font-bold text-[#404040]">
              → MEHR AGENTURPRODUKT mit den KUNDEN übertragbare Zufriedenheit
            </p>
          </div>
        </motion.div>

        {/* Right Side - Bento Grid */}
        <motion.div 
          className="relative grid grid-cols-3 gap-4" style={{ perspective: "1000px" }}
          variants={bentoStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Main Large Image */}
          <motion.div 
            className="col-span-2 row-span-2 overflow-hidden rounded-2xl border-2 border-white shadow-lg transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[300px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-main.png"
                  alt="Team workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Top Right Small */}
          <motion.div 
            className="overflow-hidden rounded-lg border border-white shadow-md transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[140px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-bento-1.png"
                  alt="Team member"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Middle Right */}
          <motion.div 
            className="overflow-hidden rounded-lg border border-white shadow-md transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[140px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-bento-2.png"
                  alt="Design samples"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Left */}
          <motion.div 
            className="overflow-hidden rounded-lg border border-white shadow-md transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[140px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-bento-3.png"
                  alt="Design work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Center */}
          <motion.div 
            className="overflow-hidden rounded-lg border border-white shadow-md transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[140px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-bento-4.png"
                  alt="Product design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bottom Right */}
          <motion.div 
            className="overflow-hidden rounded-lg border border-white shadow-md transform-gpu will-change-transform"
            variants={bentoItem}
            whileHover={cardLift}
          >
            <div className="relative h-full min-h-[140px] overflow-hidden">
              <motion.div className="relative h-full w-full" whileHover={imageZoom}>
                <Image
                  src="/assets/images/visual-bento-5.png"
                  alt="Creative process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </motion.div>
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div 
        className="mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            { year: "10/2021", title: "Freelancer" },
            { year: "2022", title: "22 - Ersten Agenturkunden, Workload - 4 MA" },
            { year: "2023", title: "Weitere Agenturen, - 10 MA" },
            { year: "2024", title: "35 MA" },
            { year: "2025", title: "Optimierung" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="text-center">
                <p className="mb-2 text-2xl font-semibold text-[#252525]">
                  {item.year}
                </p>
                <div className="mx-auto h-12 w-px bg-gray-400"></div>
                <div className="mx-auto mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/90 bg-white/30 p-6 shadow-lg backdrop-blur-sm">
                <p className="text-center text-lg font-medium leading-tight text-[#252525]">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
