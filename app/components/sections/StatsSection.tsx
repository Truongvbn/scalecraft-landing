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
      image: "/assets/images/stats/wow-image.png",
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
    <section className="relative w-full bg-white px-4 py-12 md:px-8 md:py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="mb-8 text-center md:mb-10 lg:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-[28px] font-normal leading-[1.3] tracking-[-1.2px] text-[#020202] md:text-[36px] md:tracking-[-1.5px] lg:text-[44px] lg:leading-tight lg:tracking-normal">
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
          className="space-y-4 md:space-y-6 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="relative overflow-hidden rounded-[14px] border border-white bg-[#f4f4f4] shadow-lg backdrop-blur-sm transform-gpu md:rounded-[16px] lg:rounded-[20px]"
              style={{
                backgroundImage: !stat.useIllustration 
                  ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)'
                  : undefined,
                boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
              }}
            >
              <div className={`grid grid-cols-1 gap-0 lg:grid-cols-2 ${!stat.imageRight ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image - Mobile First */}
                <div className={`relative min-h-[220px] overflow-hidden rounded-t-[14px] md:min-h-[320px] md:rounded-t-[16px] lg:min-h-[448px] lg:rounded-none ${!stat.imageRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
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

                {/* Content */}
                <div className={`flex flex-col justify-center px-5 py-6 md:px-8 md:py-10 lg:p-16 ${!stat.imageRight ? 'lg:col-start-2' : ''}`}>
                  <h3 className="mb-2 text-[18px] font-normal leading-[24px] text-[#252525] md:mb-4 md:text-[22px] md:leading-[28px] lg:mb-6 lg:text-[26px] lg:leading-tight">
                    {stat.title}
                  </h3>
                  <p className="text-[12px] font-light leading-[18px] text-[#404040] whitespace-pre-line md:text-[13px] md:leading-[20px] lg:text-sm lg:leading-relaxed lg:text-[#595959]">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
