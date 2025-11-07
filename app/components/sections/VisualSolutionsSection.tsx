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
    <section className="relative mx-auto mb-12 mt-0 w-full max-w-7xl overflow-hidden rounded-[14px] px-4 py-12 shadow-lg backdrop-blur-sm md:mb-14 md:rounded-[20px] md:px-6 md:py-16 lg:mb-16 lg:rounded-[60px] lg:px-16 lg:py-24"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
        boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4), 0px 1px 8.1px 0px rgba(0,0,0,0.1)'
      }}
    >
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[16px] lg:rounded-[60px]">
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

      <div className="relative grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-[28px] font-normal leading-[1.3] tracking-[-0.3px] text-[#252525] md:text-[34px] md:tracking-[-0.35px] lg:text-[40px] lg:leading-[1.25] lg:tracking-[-0.4px]">
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
          <p className="text-[13px] font-light leading-[1.5] tracking-[0.4px] text-[#404040] md:text-[16px] md:tracking-[0.48px] lg:text-[18px] lg:leading-[1.47] lg:tracking-[0.54px]">
            Ob Produktlaunch, Marketingkampagnen oder Rebranding deines Bestsellers – unser Kreativteam entwickelt performante Amazon-Visuals und Shop-Assets, die messbar konvertieren. Schnell, zuverlässig und mit einem klaren System.
          </p>

          {/* Was uns auszeichnet */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-[13px] font-bold leading-[1.5] tracking-[0.4px] text-[#404040] md:text-[17px] md:tracking-[0.5px] lg:text-[20px] lg:leading-[1.47] lg:tracking-[0.6px]">
              Was uns auszeichnet
            </h3>

            {/* Feature 1 */}
            <div className="flex items-start gap-[4.671px] md:gap-[5.809px]">
              <div className="mt-1 h-[15.88px] w-[15.88px] md:h-[19.751px] md:w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[13px] font-light leading-[20px] tracking-[0.4px] text-[#404040] md:text-[16px] md:leading-[22px] md:tracking-[0.48px] lg:text-[18px] lg:leading-[24px] lg:tracking-[0.54px]">
                Hochqualifizierte Designer mit tiefem E-Commerce-Verständnis
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-[4.671px] md:gap-[5.809px]">
              <div className="mt-1 h-[15.88px] w-[15.88px] md:h-[19.751px] md:w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[13px] font-light leading-[20px] tracking-[0.4px] text-[#404040] md:text-[16px] md:leading-[22px] md:tracking-[0.48px] lg:text-[18px] lg:leading-[24px] lg:tracking-[0.54px]">
                Strategie- & Conversion-orientierte Gestaltung
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-[4.671px] md:gap-[5.809px]">
              <div className="mt-1 h-[15.88px] w-[15.88px] md:h-[19.751px] md:w-[19.751px] shrink-0">
                <CheckmarkIcon />
              </div>
              <p className="text-[13px] font-light leading-[20px] tracking-[0.4px] text-[#404040] md:text-[16px] md:leading-[22px] md:tracking-[0.48px] lg:text-[18px] lg:leading-[24px] lg:tracking-[0.54px]">
                Eingespielte Abläufe, die Qualität und Geschwindigkeit garantieren
              </p>
            </div>
          </div>

          {/* CTA */}
          <p className="text-[13px] font-bold leading-[1.5] tracking-[0.4px] text-[#404040] md:text-[16px] md:tracking-[0.48px] lg:text-[18px] lg:leading-[1.47] lg:tracking-[0.54px]">
            → MEHR AGENTURPRODUKT mit den KUNDEN übertragbare Zufriedenheit
          </p>
        </motion.div>

        {/* Right - Bento Grid */}
        <div className="relative h-[300px] w-full md:mx-auto md:h-[400px] md:max-w-[500px] lg:mx-0 lg:h-[501px] lg:max-w-none">
          {/* Main large image - từ Figma: w-72 h-48 left-[45.67px] top-[88.52px] */}
          <div className="absolute left-[45.67px] top-[88.52px] h-[192px] w-[288px] overflow-hidden rounded-2xl border border-white lg:absolute lg:left-[65px] lg:top-[126px] lg:h-[284px] lg:w-[392px] lg:rounded-[20.608px] lg:border-[1.288px]">
            <Image src={imgPhc082541} alt="" fill className="object-cover" style={{ objectPosition: '-6.04% 0' }} />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - bottom left - từ Figma: w-24 h-20 left-[-13px] top-[229px] */}
          <div className="absolute left-[-13px] top-[229px] h-[80px] w-[96px] overflow-hidden rounded-lg border-[0.63px] border-white/90 lg:absolute lg:left-[-31px] lg:top-[332px] lg:h-[130px] lg:w-[166px] lg:rounded-[10.304px] lg:border-[0.902px]">
            <Image src={imgPhc08175} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - bottom right - từ Figma: w-32 h-28 left-[232px] top-[227px] */}
          <div className="absolute left-[232px] top-[227px] h-[112px] w-[128px] overflow-hidden rounded border-[0.59px] border-white/90 lg:absolute lg:left-[363px] lg:top-[329px] lg:h-[154px] lg:w-[181px] lg:rounded-[4.779px] lg:border-[0.836px]">
            <Image src={imgPhc08183} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - top middle - từ Figma: w-16 h-20 left-[103.98px] top-[23.18px] */}
          <div className="absolute left-[103.98px] top-[23.18px] h-[80px] w-[64px] overflow-hidden rounded border-[0.56px] border-white/90 lg:absolute lg:left-[148px] lg:top-[33px] lg:h-[109px] lg:w-[97px] lg:rounded-[4.573px] lg:border-[0.8px]">
            <Image src={imgPhc08179} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - top left - từ Figma: w-24 h-24 left-[7.73px] top-[35.13px] */}
          <div className="absolute left-[7.73px] top-[35.13px] h-[96px] w-[96px] overflow-hidden rounded-[3.16px] border-[0.55px] border-white/90 lg:absolute lg:left-[11px] lg:top-[50px] lg:h-[141px] lg:w-[145px] lg:rounded-[4.5px] lg:border-[0.788px]">
            <Image src={imgPhc08206} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Small image - middle bottom - từ Figma: w-14 h-11 left-[44px] top-[276px] */}
          <div className="absolute left-[44px] top-[276px] h-[44px] w-[56px] overflow-hidden rounded-sm border-[0.46px] border-white/90 lg:absolute lg:left-[274px] lg:top-[357px] lg:h-[81px] lg:w-[105px] lg:rounded-[3.761px] lg:border-[0.658px]">
            <Image src={imgPhc08256} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,12,12,0.2)]" />
          </div>

          {/* Team Members Card - từ Figma: w-40 h-16 left-[183.16px] top-[29.67px] */}
          <div className="absolute left-[183.16px] top-[29.67px] w-[160px] rounded-md border-[0.62px] border-white/90 px-2.5 py-3 backdrop-blur-sm lg:absolute lg:left-[288px] lg:top-[39px] lg:w-[216px] lg:border-[0.884px] lg:p-[14px] lg:backdrop-blur-[5.145px]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
              boxShadow: '0px 0.74px 6px 0px rgba(0,0,0,0.10), inset 0px 1.2px 4.82px 0px rgba(255,255,255,0.40)'
            }}
          >
            <p className="mb-1.5 text-center text-xs font-normal tracking-tight text-[#252525] lg:mb-2 lg:text-[16px] lg:tracking-[0.48px]">
              Team Memembers
            </p>
            <div className="flex items-center justify-center">
              <div className="relative -ml-0 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg13751} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImage15} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1779} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1770} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1778} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1781} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1780} alt="" fill className="object-cover" />
              </div>
              <div className="relative -ml-1 h-6 w-6 flex-shrink-0 overflow-hidden rounded-full border-[0.11px] border-white lg:h-6 lg:w-6">
                <Image src={imgImg1764} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Quote Card - từ Figma: w-32 h-14 left-[190px] top-[292px] */}
          <div className="absolute left-[190px] top-[292px] w-[128px] rounded-[5.18px] border-[0.54px] border-white/90 p-2.5 backdrop-blur-[3.16px] lg:absolute lg:left-[278px] lg:top-[429px] lg:w-[176px] lg:border-[0.77px] lg:p-[14px]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)',
              boxShadow: '0px 0.65px 5.25px 0px rgba(0,0,0,0.10), inset 0px 1.05px 4.21px 0px rgba(255,255,255,0.40)'
            }}
          >
            <p className="text-center text-[9.77px] font-normal leading-tight tracking-tight text-[#252525] lg:text-[14px]">
              Scalecraft liefert Resultate, auf die du dich verlassen kannst.
            </p>
          </div>

          {/* 95+ Stat - từ Figma: w-20 h-20 left-[-33.77px] top-[138.14px] */}
          <div className="absolute left-[-33.77px] top-[138.14px] flex h-20 w-20 flex-col items-center justify-center gap-1.5 rounded-xl p-3 lg:left-[-70px] lg:top-[196px]">
            <div className="text-center text-2xl font-bold text-[#404040] lg:text-[36px]">95+</div>
            <div className="w-24 text-center text-[8.97px] font-normal tracking-tight text-[#404040] lg:max-w-[100px] lg:text-[12px]">
              erfolgreich abgeschlossene Projekte
            </div>
          </div>

          {/* 10k+ Stat - từ Figma: w-24 h-20 left-[99px] top-[281px] */}
          <div className="absolute left-[99px] top-[281px] flex h-20 w-24 flex-col items-center justify-center gap-[5.17px] rounded-xl p-2.5 lg:left-[143px] lg:top-[406px]">
            <div className="text-center text-2xl font-bold text-[#404040] lg:text-[36px]">10k+</div>
            <div className="text-center text-[8.66px] font-normal tracking-tight text-[#404040] lg:text-[12px]">
              Designprozesse pro<br />Monat zeigen
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-12 md:mt-16 lg:mt-24">
        {/* Mobile: Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:hidden">
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
        
        {/* Desktop: Centered flex */}
        <div className="hidden lg:flex items-end justify-center gap-4">
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
      </div>
    </section>
  );
}
