"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, viewport } from "@/app/lib/animations";
import Card1Illustration from "../illustrations/Card1Illustration";

export default function StatsSection() {
  const stats = [
    {
      title: "Best Practices im E-Commerce (Amazon + Shop Assets)",
      description: "Unsere Erfahrung aus hunderten Projekten fließt direkt in jedes Design ein.\nOb Amazon-Visuals, Shop-Assets oder Ad Creatives – wir setzen auf datenbasierte Best Practices, die Marken skalierbar machen und Conversions steigern.\n\n💡 Ergebnis: Markenauftritte, die nicht nur gut aussehen, sondern messbar performen.",
      image: "/assets/images/stats/Container-1.png",
      imageRight: true,
      useIllustration: false,
      useGradientBg: false
    },
    {
      title: "Performance Design, das verkauft",
      description: "Unsere Designs entstehen nicht zufällig – sie folgen klaren Prinzipien aus Storytelling, Verkaufspsychologie und Conversion-Optimierung.\nSo wird jedes Creative zu einem Werkzeug, das Emotion, Vertrauen und Kaufimpuls verbindet.\n\n💡 Ergebnis: Design, das verkauft – mit nachweislich besseren KPIs und längerer Customer Retention.",
      image: "/assets/images/stats/wow-image → Picture → A progress screen for building a subscription tracker app shows all setup tasks completed with green check mark and an orange arrow button on a pastel blue-orange gradient background..png",
      imageRight: false,
      useIllustration: false,
      useGradientBg: false
    },
    {
      title: "KPI-Tracking & effiziente Asset-Gestaltung",
      description: "Wir kombinieren Kreativität mit System: Automatisierte Workflows, strukturierte Template-Libraries und einheitliche Guidelines sorgen für maximale Effizienz.\nJedes Asset wird gemessen, analysiert und weiter optimiert – für stetig wachsende Performance.\n\n💡 Ergebnis: Schnellere Produktion, geringere Kosten, konsistente Markenqualität.",
      image: "/assets/images/stats/Container.png",
      imageRight: true,
      useIllustration: false,
      useGradientBg: false
    }
  ];

  return (
    <section className="relative w-full bg-white px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-4xl font-normal leading-tight text-[#020202] lg:text-[44px]">
            Warum wir das können?{" "}
            <span 
              className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Zahlen sagen mehr als Worte.
            </span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="relative overflow-hidden rounded-[20px] border border-white bg-[#f4f4f4] shadow-lg backdrop-blur-sm transform-gpu"
              style={{
                backgroundImage: !stat.useIllustration 
                  ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)'
                  : undefined,
                boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
              }}
            >
              <div className={`grid grid-cols-1 gap-0 lg:grid-cols-2 ${!stat.imageRight ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className={`flex flex-col justify-center p-12 lg:p-16 ${!stat.imageRight ? 'lg:col-start-2' : ''}`}>
                  <h3 className="mb-6 text-2xl font-normal leading-tight text-[#252525] lg:text-[26px]">
                    {stat.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#595959] whitespace-pre-line">
                    {stat.description}
                  </p>
                </div>

                {/* Image */}
                <div className={`relative min-h-[300px] overflow-hidden lg:min-h-[448px] ${!stat.imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {stat.useIllustration ? (
                    <>
                      {/* Background Gradient Image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/assets/images/stats/stats-gradient-bg.png"
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                          loading="lazy"
                        />
                      </div>
                      {/* Illustration */}
                      <div className="absolute inset-0 flex items-center justify-center z-[1]">
                        <Card1Illustration />
                      </div>
                      {/* Texture Overlay */}
                      <div 
                        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                        style={{
                          backgroundImage: 'url("/assets/images/stats/stats-texture.png")',
                          backgroundSize: '120px 120px',
                          backgroundRepeat: 'repeat'
                        }}
                      />
                    </>
                  ) : stat.useGradientBg ? (
                    <>
                      {/* Background Gradient Image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/assets/images/stats/stats-gradient-bg.png"
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                          loading="lazy"
                        />
                      </div>
                      {/* Local Image */}
                      <div className="absolute inset-0 flex items-center justify-center z-[1]">
                        <div className="relative w-full h-full max-w-md mx-auto">
                          <Image
                            src={stat.image}
                            alt={stat.title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                          loading="lazy"
                          />
                        </div>
                      </div>
                      {/* Texture Overlay */}
                      <div 
                        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none"
                        style={{
                          backgroundImage: 'url("/assets/images/stats/stats-texture.png")',
                          backgroundSize: '120px 120px',
                          backgroundRepeat: 'repeat'
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {/* Texture Overlay */}
                      <div 
                        className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
                        style={{
                          backgroundImage: 'url("/assets/images/stats/stats-texture.png")',
                          backgroundSize: '120px 120px',
                          backgroundRepeat: 'repeat'
                        }}
                      />
                      <Image
                        src={stat.image}
                        alt={stat.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        quality={85}
                        loading="lazy"
                      />
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
