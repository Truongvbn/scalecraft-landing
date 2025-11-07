"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, gridContainer, gridItem, viewport } from "@/app/lib/animations";
import MagneticButton from "@/app/components/ui/MagneticButton";

export default function BenefitsSection() {
  const benefits = [
    {
      image: "/assets/images/benefit-1.png",
      title: "Fester Ansprechpartner statt Ticketsystem",
      description: "Du bekommst einen persönlichen Kontakt, der dich und deine Prozesse kennt – für reibungslose Kommunikation und schnelle Umsetzung, ohne anonyme Support-Schleifen."
    },
    {
      image: "/assets/images/benefit-2.png",
      title: "Erfahrung aus über 30 Agenturprojekten",
      description: "Profitiere vom Know-how aus der Zusammenarbeit mit führenden Amazon- und E-Commerce-Agenturen.\nWir kennen die Best Practices, Strukturen und Abläufe, die wirklich Ergebnisse liefern."
    },
    {
      image: "/assets/images/benefit-3.png",
      title: "Done-for-You Umsetzung",
      description: "Du gibst das Briefing – wir übernehmen alles. Vom ersten Entwurf bis zum finalen Creative: 100 % Umsetzung wie ein internes Team – nur effizienter, strukturierter und kostengünstiger."
    },
    {
      image: "/assets/images/benefit-4.png",
      title: "Flexible Nutzung & Skalierung",
      description: "Nutze unsere Kapazitäten flexibel – von 80 bis 640 Stunden im Monat.\nTransparent getrackt, wöchentlich abgerechnet, ohne langfristige Bindung."
    }
  ];

  return (
    <section className="relative w-full bg-white px-8 py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="max-w-xl text-4xl font-normal leading-tight text-[#252525] lg:text-[44px]">
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
          
          <p className="max-w-md text-lg leading-relaxed text-[#373A40]">
            Unsere Kunden profitieren von einem klaren Vorteilspaket - speziell entwickelt für Agenturen, Marken und Marketing - Teams, die Effizienz und Qualität skalieren wollen.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transform-gpu will-change-transform"
              variants={gridItem}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                {/* Image */}
                <motion.div 
                  className="relative h-[219px] w-full flex-shrink-0 overflow-hidden rounded-2xl sm:w-[229px]"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 229px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-normal leading-tight text-[#404040]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#8c8c8c] whitespace-pre-line">
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
            className="rounded-full border border-black bg-[#252525] px-8 py-3 text-base font-normal text-white transition-colors hover:bg-black"
            strength={0.3}
          >
            Erstgespräch buchen
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
