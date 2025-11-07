"use client";

import { motion } from "framer-motion";
import { fadeInUp, fastStagger, staggerItem, viewport } from "@/app/lib/animations";

// Figma assets are SVGs, using img tags instead of Next Image

const imgTexture = "/assets/images/stats-hero-texture.svg";
const imgGradient = "/assets/images/stats-hero-gradient.svg";
const imgGradient1 = "/assets/images/stats-hero-gradient1.svg";
const imgIcon3 = "/assets/images/stats-hero-icon3.svg";
const imgIcon1 = "/assets/images/stats-hero-icon1.svg";
const imgIcon4 = "/assets/images/stats-hero-icon4.svg";
const imgIcon2 = "/assets/images/stats-hero-icon2.svg";

export default function StatsHeroSection() {
  return (
    <section className="relative w-full bg-[#f0f0f0] py-20">
      <div className="mx-auto max-w-[1440px] px-[135px]">
        {/* Heading */}
        <motion.div 
          className="mb-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="text-[44px] font-normal leading-[1.25] tracking-[-1.92px] text-[#020202]">
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
          className="relative h-[236px] w-full overflow-hidden rounded-[20px] border-2 border-white transform-gpu"
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
            className="relative z-10 flex h-full items-center justify-center gap-[50px] px-8"
            variants={fastStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Stat 1 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <div className="mb-2 h-12 w-12">
                <img src={imgIcon1} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black">
                +100
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040]">
                Projekte{" "}
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  abgeschlossen
                </span>
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <div className="mb-2 h-12 w-12">
                <img src={imgIcon2} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black">
                +50
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  zufriedene
                </span>
                {" "}Kunden
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <div className="mb-2 h-12 w-12">
                <img src={imgIcon3} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black">
                +20 Mio. €
              </p>
              <p className="text-[20px] leading-[24px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  Generierter Umsatz{" "}
                </span>
                <span className="text-neutral-700">für unsere Kunden</span>
              </p>
            </motion.div>

            {/* Stat 4 */}
            <motion.div 
              className="flex flex-col items-center gap-2 text-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <div className="mb-2 h-12 w-12">
                <img src={imgIcon4} alt="" className="h-full w-full object-contain" />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black">
                +500
              </p>
              <p className="text-[20px] leading-[20px] text-[#404040]">
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
