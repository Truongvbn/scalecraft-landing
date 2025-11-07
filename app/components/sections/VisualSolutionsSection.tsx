"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, viewport } from "@/app/lib/animations";
import CheckmarkIcon from "../icons/CheckmarkIcon";
import TimelineCard from "../ui/TimelineCard";

// Product Images - Use placeholder images for now
const imgPhc082541 = "/assets/images/visual-solutions/product1.jpg";
const imgPhc08175 = "/assets/images/visual-solutions/product2.jpg";
const imgPhc08183 = "/assets/images/visual-solutions/product3.jpg";
const imgPhc08179 = "/assets/images/visual-solutions/product4.jpg";
const imgPhc08206 = "/assets/images/visual-solutions/product5.jpg";
const imgPhc08256 = "/assets/images/visual-solutions/product6.jpg";

// Team member avatars - Use placeholder
const imgImg13751 = "/assets/images/visual-solutions/avatar1.jpg";
const imgImage15 = "/assets/images/visual-solutions/avatar2.jpg";
const imgImg1779 = "/assets/images/visual-solutions/avatar3.jpg";
const imgImg1770 = "/assets/images/visual-solutions/avatar4.jpg";
const imgImg1778 = "/assets/images/visual-solutions/avatar5.jpg";
const imgImg1781 = "/assets/images/visual-solutions/avatar6.jpg";
const imgImg1780 = "/assets/images/visual-solutions/avatar7.jpg";
const imgImg1764 = "/assets/images/visual-solutions/avatar8.jpg";


export default function VisualSolutionsSection() {
  return (
    <section className="relative mx-auto mb-16 mt-0 w-full max-w-7xl overflow-hidden rounded-[60px] px-8 py-24 shadow-lg backdrop-blur-sm lg:px-16"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
        boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4), 0px 1px 8.1px 0px rgba(0,0,0,0.1)'
      }}
    >
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[60px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1404 1168" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="filter1_f" x="527.663" y="-26.1162" width="955.875" height="870.298" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="86.7188" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter2_f" x="770.718" y="37.3809" width="619.196" height="580.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="43.3594" result="effect1_foregroundBlur"/>
            </filter>
            <filter id="filter3_f" x="-25.2999" y="656.7" width="1453.8" height="1403.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="178.2" result="effect1_foregroundBlur"/>
            </filter>
            <linearGradient id="paint0_linear" x1="728.1" y1="1158.1" x2="728.1" y2="7.09961" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.1724" stopColor="#F8F4F4"/>
              <stop offset="0.6853" stopColor="#F7F6F5"/>
              <stop offset="1" stopColor="#F1EFEF"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1005.6" y1="147.321" x2="1005.6" y2="670.744" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7BCA"/>
              <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46"/>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="1080.32" y1="124.1" x2="1080.32" y2="531.307" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F28E2F"/>
              <stop offset="1" stopColor="#F58A25" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint3_linear" x1="701.6" y1="1013.1" x2="701.6" y2="1704.1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F03321"/>
              <stop offset="1" stopColor="#F58A25" stopOpacity="0"/>
            </linearGradient>
          </defs>
          
          {/* Base gradient background */}
          <path d="M8.1001 67.0996C8.1001 33.9626 34.963 7.09961 68.1001 7.09961H1388.1C1421.24 7.09961 1448.1 33.9625 1448.1 67.0996V1098.1C1448.1 1131.24 1421.24 1158.1 1388.1 1158.1H68.1001C34.963 1158.1 8.1001 1131.24 8.1001 1098.1V67.0996Z" fill="url(#paint0_linear)"/>
          
          {/* Gradient blurs */}
          <g filter="url(#filter1_f)">
            <ellipse cx="1005.6" cy="409.033" rx="304.5" ry="261.712" fill="url(#paint1_linear)"/>
          </g>
          <g filter="url(#filter2_f)">
            <ellipse cx="1080.32" cy="327.703" rx="222.879" ry="203.604" fill="url(#paint2_linear)"/>
          </g>
          <g filter="url(#filter3_f)">
            <ellipse cx="701.6" cy="1358.6" rx="370.5" ry="345.5" fill="url(#paint3_linear)" fillOpacity="0.3"/>
          </g>
        </svg>
      </div>

      <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-[40px] font-normal leading-[1.25] tracking-[-0.4px] text-[#252525]">
              Wir gestalten visuelle Lösungen,
              <span 
                className="bg-clip-text"
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
          <p className="text-[18px] font-light leading-[1.47] tracking-[0.54px] text-[#404040]">
            Ob Produktlaunch, Marketingkampagnen oder Rebranding deines Bestsellers – unser Kreativteam entwickelt performante Amazon-Visuals und Shop-Assets, die messbar konvertieren. Schnell, zuverlässig und mit einem klaren System.
          </p>

          {/* Was uns auszeichnet */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-bold leading-[1.47] tracking-[0.6px] text-[#404040]">
              Was uns auszeichnet
            </h3>

            {/* Feature 1 */}
            <div className="flex items-start gap-[5.809px]">
              <div className="mt-1 h-[19.751px] w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[18px] font-light leading-[24px] tracking-[0.54px] text-[#404040]">
                Hochqualifizierte Designer mit tiefem E-Commerce-Verständnis
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[5.809px]">
              <div className="mt-1 h-[19.751px] w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[18px] font-light leading-[24px] tracking-[0.54px] text-[#404040]">
                Strategie- & Conversion-orientierte Gestaltung
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[5.809px]">
              <div className="mt-1 h-[19.751px] w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[18px] font-light leading-[24px] tracking-[0.54px] text-[#404040]">
                Eingespielte Abläufe, die Qualität und Geschwindigkeit garantieren
              </p>
            </div>
          </div>

          {/* CTA */}
          <p className="text-[18px] font-bold leading-[1.47] tracking-[0.54px] text-[#404040]">
            → MEHR AGENTURPRODUKT mit den KUNDEN übertragbare Zufriedenheit
          </p>
        </motion.div>

        {/* Right - Bento Grid */}
        <div className="relative h-[501px] w-full">
          {/* Main large image */}
          <div className="absolute left-[65px] top-[126px] h-[284px] w-[392px] overflow-hidden rounded-[20.608px] border-[1.288px] border-white">
            <Image src={imgPhc082541} alt="" fill className="object-cover" style={{ objectPosition: '-6.04% 0' }} />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - bottom left */}
          <div className="absolute left-[-31px] top-[332px] h-[130px] w-[166px] overflow-hidden rounded-[10.304px] border-[0.902px] border-white/90">
            <Image src={imgPhc08175} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - bottom right */}
          <div className="absolute left-[363px] top-[329px] h-[154px] w-[181px] overflow-hidden rounded-[4.779px] border-[0.836px] border-white/90">
            <Image src={imgPhc08183} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - top middle */}
          <div className="absolute left-[148px] top-[33px] h-[109px] w-[97px] overflow-hidden rounded-[4.573px] border-[0.8px] border-white/90">
            <Image src={imgPhc08179} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - top left */}
          <div className="absolute left-[11px] top-[50px] h-[141px] w-[145px] overflow-hidden rounded-[4.5px] border-[0.788px] border-white/90">
            <Image src={imgPhc08206} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - middle bottom */}
          <div className="absolute left-[274px] top-[357px] h-[81px] w-[105px] overflow-hidden rounded-[3.761px] border-[0.658px] border-white/90">
            <Image src={imgPhc08256} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Team Members Card */}
          <div className="absolute left-[288px] top-[39px] w-[216px] rounded-lg border-[0.884px] border-white/90 p-[14px] backdrop-blur-[5.145px]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
            }}
          >
            <p className="mb-2 text-center text-[16px] font-normal tracking-[0.48px] text-[#252525]">
              Team Memembers
            </p>
            <div className="flex items-center justify-center -space-x-1.5">
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg13751} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImage15} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1779} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1770} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1778} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1781} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1780} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border border-white">
                <Image src={imgImg1764} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="absolute left-[278px] top-[429px] w-[176px] rounded-lg border-[0.77px] border-white/90 p-[14px] backdrop-blur-sm"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)',
              boxShadow: 'inset 0px 1.5px 6px 0px rgba(255,255,255,0.4)'
            }}
          >
            <p className="text-center text-[14px] font-normal tracking-wide text-[#252525]">
              Scalecraft liefert Resultate, auf die du dich verlassen kannst.
            </p>
          </div>

          {/* 95+ Stat */}
          <div className="absolute left-[-70px] top-[196px] flex flex-col items-center gap-2 rounded-2xl p-4">
            <div className="text-center text-[36px] font-bold text-[#404040]">95+</div>
            <div className="max-w-[100px] text-center text-[12px] font-normal leading-tight tracking-tight text-[#404040]">
              erfolgreich abgeschlossene Projekte
            </div>
          </div>

          {/* 10k+ Stat */}
          <div className="absolute left-[143px] top-[406px] flex flex-col items-center gap-2 rounded-2xl p-4">
            <div className="text-center text-[36px] font-bold text-[#404040]">10k+</div>
            <div className="text-center text-[12px] font-normal tracking-tight text-[#404040]">
              Designprozesse pro<br />Monat zeigen
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-24 flex items-end justify-center gap-4">
        <TimelineCard year="10/2021" title="Freelancer" fontSize="22px" />
        <TimelineCard year="2022" title="22 - Ersten Agenturkunden, Workload - 4 MA " fontSize="20px" />
        <TimelineCard 
          year="2023" 
          title={
            <>
              Weitere Agenturen,<br />- 10 MA
            </>
          } 
          fontSize="20px" 
        />
        <TimelineCard year="2024" title="35  MA" fontSize="20px" />
        <TimelineCard year="2025" title="Optimierung" fontSize="20px" />
      </div>
    </section>
  );
}
