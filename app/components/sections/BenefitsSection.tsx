"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, gridContainer, gridItem, viewport } from "@/app/lib/animations";
import MagneticButton from "@/app/components/ui/MagneticButton";

export default function BenefitsSection() {
  const benefits = [
    {
      image: "/assets/images/benefits/benefit-1.png",
      title: "Fester Ansprechpartner statt Ticketsystem",
      description: "Du bekommst einen persönlichen Kontakt, der dich und deine Prozesse kennt – für reibungslose Kommunikation und schnelle Umsetzung, ohne anonyme Support-Schleifen."
    },
    {
      image: "/assets/images/benefits/benefit-2.png",
      title: "Erfahrung aus über 30 Agenturprojekten",
      description: "Profitiere vom Know-how aus der Zusammenarbeit mit führenden Amazon- und E-Commerce-Agenturen.\nWir kennen die Best Practices, Strukturen und Abläufe, die wirklich Ergebnisse liefern."
    },
    {
      image: "/assets/images/benefits/benefit-3.png",
      title: "Done-for-You Umsetzung",
      description: "Du gibst das Briefing – wir übernehmen alles. Vom ersten Entwurf bis zum finalen Creative: 100 % Umsetzung wie ein internes Team – nur effizienter, strukturierter und kostengünstiger."
    },
    {
      image: "/assets/images/benefits/benefit-4.png",
      title: "Flexible Nutzung & Skalierung",
      description: "Nutze unsere Kapazitäten flexibel – von 80 bis 640 Stunden im Monat.\nTransparent getrackt, wöchentlich abgerechnet, ohne langfristige Bindung."
    }
  ];

  return (
    <section className="relative w-full bg-white px-4 py-16 md:px-[clamp(2rem,4vw,4rem)] md:py-[clamp(5rem,6vw,6rem)]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:mb-[clamp(3rem,4vw,4rem)] md:flex-row md:items-start md:gap-[clamp(1.5rem,2vw,2rem)] md:text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="w-full max-w-xl text-[30px] font-normal leading-[1.2] text-[#252525] md:text-[clamp(36px,3.5vw,44px)]">
            <span 
              className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ec6036 14%, #f1983f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Produktvorteile
            </span>
            {" auf einen Blick"}
          </h2>
          
          <p className="w-full max-w-md text-[14px] leading-[1.5] text-[#373A40] md:text-[clamp(16px,1.5vw,18px)] md:leading-relaxed">
            Unsere Kunden profitieren von einem klaren Vorteilspaket - speziell entwickelt für Agenturen, Marken und Marketing - Teams, die Effizienz und Qualität skalieren wollen.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[clamp(1.5rem,2vw,2rem)] md:mb-[clamp(3rem,4vw,4rem)]"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transform-gpu will-change-transform"
              variants={gridItem}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex h-[172px] flex-row gap-0 p-0 md:h-auto md:flex-col md:gap-6 md:p-6 lg:h-[clamp(220px,20vw,250px)] lg:flex-row lg:gap-0 lg:p-0">
                {/* Image */}
                <motion.div 
                  className="relative h-full w-[160px] flex-shrink-0 overflow-hidden md:h-[clamp(200px,18vw,219px)] md:w-full md:rounded-2xl lg:h-full lg:w-[clamp(200px,19vw,229px)]"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 100vw, 229px"
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-110"
                    quality={85}
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-4 md:p-0 lg:p-[clamp(1rem,1.5vw,1.5rem)]">
                  <h3 className="mb-3 text-[18px] font-normal leading-[1.17] text-[#404040] md:mb-[clamp(0.75rem,1vw,1rem)] md:text-[clamp(20px,2vw,24px)] md:leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] font-light leading-[16px] text-[#8c8c8c] whitespace-pre-line md:text-[clamp(13px,1.2vw,14px)] md:leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <MagneticButton 
            className="h-[42px] w-[184px] rounded-full border border-black bg-[#252525] text-[14px] font-normal text-white transition-colors hover:bg-black md:h-auto md:w-auto md:px-[clamp(1.5rem,2vw,2rem)] md:py-[clamp(0.625rem,1vw,0.75rem)] md:text-[clamp(15px,1.3vw,16px)]"
            strength={0.3}
          >
            Erstgespräch buchen
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
