"use client";

import { motion } from "framer-motion";
import { fadeInUp, fastStagger, viewport } from "@/app/lib/animations";

// Figma assets are SVGs, using img tags instead of Next Image

const imgTexture = "/assets/images/stats-hero/stats-hero-texture.svg";
const imgGradient = "/assets/images/stats-hero/stats-hero-gradient.svg";
const imgGradient1 = "/assets/images/stats-hero/stats-hero-gradient1.svg";
const imgIcon3 = "/assets/images/stats-hero/stats-hero-icon3.svg";
const imgIcon1 = "/assets/images/stats-hero/stats-hero-icon1.svg";
const imgIcon4 = "/assets/images/stats-hero/stats-hero-icon4.svg";
const imgIcon2 = "/assets/images/stats-hero/stats-hero-icon2.svg";

export default function StatsHeroSection() {
  return (
    <section className="relative w-full bg-[#f0f0f0] -mt-32 pt-48 pb-20 max-md:-mt-16 max-md:pt-20 max-md:pb-12 md:max-lg:-mt-24 md:max-lg:pt-32 md:max-lg:pb-16">
      {/* Curved Connector - Desktop only */}
      <div className="w-full h-32 absolute -top-16 left-0 overflow-hidden max-md:hidden md:max-lg:h-24 md:max-lg:-top-12">
        <div className="w-[150%] h-64 left-1/2 -translate-x-1/2 top-0 absolute bg-[#f0f0f0] rounded-t-[50%] md:max-lg:h-48" />
      </div>
      
      <div className="mx-auto max-w-[1440px] px-[135px] max-md:px-4 md:max-lg:px-12 lg:max-xl:px-20">
        {/* Heading */}
        <motion.div 
          className="mb-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-[44px] font-normal leading-[1.25] tracking-[-1.92px] text-[#020202] max-md:text-[30px] max-md:tracking-[-1.515px] md:max-lg:text-[36px] md:max-lg:tracking-[-1.7px]">
            Warum wir das können?
            <br />
            <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
              Zahlen sagen mehr als Worte
            </span>
          </h2>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative h-[236px] w-full overflow-hidden rounded-[20px] border-2 border-white transform-gpu will-change-transform max-md:h-auto max-md:min-h-[320px] max-md:w-[382px] max-md:mx-auto max-md:rounded-[12.511px] max-md:border-[1.251px] md:max-lg:h-[280px] md:max-lg:rounded-[16px]"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)'
          }}
        >
          {/* Gradient Background Right */}
          <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[400px] w-[400px] opacity-60">
            <img src={imgGradient} alt="" className="h-full w-full object-contain" />
          </div>

          {/* Gradient Background Left */}
          <div className="pointer-events-none absolute -bottom-[150px] -left-[100px] h-[400px] w-[400px] opacity-60">
            <img src={imgGradient1} alt="" className="h-full w-full object-contain" />
          </div>

          {/* Texture Overlay */}
          <div 
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
            style={{
              backgroundImage: `url('${imgTexture}')`,
              backgroundSize: '120px 120px',
              backgroundRepeat: 'repeat'
            }}
          />

          {/* Stats Grid */}
          <motion.div 
            className="relative z-10 flex h-full items-center justify-center gap-[50px] px-8 max-md:grid max-md:grid-cols-2 max-md:gap-x-[38px] max-md:gap-y-[30px] max-md:px-4 max-md:py-6 md:max-lg:gap-[35px] md:max-lg:px-6"
            variants={fastStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Stat 1 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center max-md:gap-[16.265px] transition-transform duration-300 hover:scale-105 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              <div className="mb-2 h-12 w-12 max-md:mb-0 max-md:h-[27.414px] max-md:w-[31.278px] md:max-lg:h-10 md:max-lg:w-10 transition-transform duration-300 hover:rotate-12">
                <img src={imgIcon1} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:max-lg:text-[32px]">
                +100
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040] max-md:text-[12px] max-md:leading-[12.638px] md:max-lg:text-[16px] md:max-lg:leading-[18px]">
                Projekte{" "}
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  abgeschlossen
                </span>
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:scale-105 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              <div className="mb-2 h-12 w-12 max-md:mb-0 max-md:h-[27.414px] max-md:w-[31.278px] md:max-lg:h-10 md:max-lg:w-10 transition-transform duration-300 hover:rotate-12">
                <img src={imgIcon2} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:max-lg:text-[32px]">
                +50
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040] max-md:text-[12px] max-md:leading-[12.638px] md:max-lg:text-[16px] md:max-lg:leading-[18px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  zufriedene
                </span>
                {" "}Kunden
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:scale-105 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              <div className="mb-2 h-12 w-12 max-md:mb-0 max-md:h-[27.414px] max-md:w-[31.278px] md:max-lg:h-10 md:max-lg:w-10 transition-transform duration-300 hover:rotate-12">
                <img src={imgIcon3} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:max-lg:text-[32px]">
                +20 Mio. €
              </p>
              <p className="text-[20px] leading-[24px] max-md:text-[12px] max-md:leading-[15.013px] md:max-lg:text-[16px] md:max-lg:leading-[20px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  Generierter Umsatz{" "}
                </span>
                <span className="text-neutral-700">für unsere Kunden</span>
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:scale-105 cursor-default"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              <div className="mb-2 h-12 w-12 max-md:mb-0 max-md:h-[27.414px] max-md:w-[31.278px] md:max-lg:h-10 md:max-lg:w-10 transition-transform duration-300 hover:rotate-12">
                <img src={imgIcon4} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:max-lg:text-[32px]">
                +500
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040] max-md:text-[12px] max-md:leading-[12.638px] md:max-lg:text-[16px] md:max-lg:leading-[18px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  Entwickelte Creatives
                </span>
                {" "}& 3D-Renderings
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
