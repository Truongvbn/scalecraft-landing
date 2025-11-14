"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CaseStudyCard1 from "./CaseStudyCard1";
import CaseStudyCard2 from "./CaseStudyCard2";
import CaseStudyCard3 from "./CaseStudyCard3";

// Swiper styles now imported in globals.css to reduce HTTP requests

const caseStudyComponents = [
  CaseStudyCard1,
  CaseStudyCard2,
  CaseStudyCard3,
];

export default function CaseStudySection() {
  return (
    <section id="case-study" className="relative w-full pt-0 pb-6 px-0 md:pb-[clamp(1.5rem,5vw,5rem)] bg-[#f0f0f0] transition-all duration-300">
      {/* Glassmorphism Container */}
      <div className="relative w-full h-full overflow-hidden rounded-[8px] md:rounded-[24px] transition-all duration-500" style={{
        minHeight: '580px',
        boxShadow: '0px 1px 8.1px 0px rgba(0, 0, 0, 0.1)',
      }}>
          {/* Backdrop Blur Base */}
          <div 
            className="absolute inset-0 transition-all duration-500"
            style={{
              backdropFilter: 'blur(4.88px)',
              WebkitBackdropFilter: 'blur(4.88px)',
            }}
          />
          
          {/* White Glass Layer */}
          <div 
            className="absolute inset-0 rounded-[16px] md:rounded-[48px] transition-all duration-500"
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Gradient Blur Ellipse 1 - Pink to Orange */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '50%',
              top: '54.5%',
              transform: 'translate(-50%, -50%)',
              width: '884px',
              height: '705px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, #FF7BCA 0%, rgba(255, 197, 111, 0.46) 100%)',
              filter: 'blur(173.4px)',
              opacity: 1,
              animationDuration: '4s',
              transition: 'all 0.8s ease-in-out',
            }}
          />

          {/* Gradient Blur Ellipse 2 - Orange */}
          <div 
            className="absolute animate-pulse"
            style={{
              left: '57%',
              top: '44.5%',
              transform: 'translate(-50%, -50%)',
              width: '647px',
              height: '549px',
              borderRadius: '50%',
              background: 'linear-gradient(180deg, #F28E2F 0%, rgba(245, 138, 37, 0) 100%)',
              filter: 'blur(86.7px)',
              opacity: 1,
              animationDuration: '3s',
              transition: 'all 0.8s ease-in-out',
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 flex min-h-[580px] lg:min-h-[900px] xl:min-h-[1000px] flex-col px-3 pt-6 pb-4 lg:px-16 lg:pt-24 lg:pb-16 xl:px-12 xl:pt-20 xl:pb-12 transition-all duration-300">
            {/* Heading */}
            <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700 pt-2 lg:pt-0">
              <h2 className="text-[24px] leading-[1.3] tracking-[-1px] text-[#252525] lg:text-[38px] lg:leading-[48px] xl:text-[44px] xl:leading-[55px] transition-all duration-300">
                Erfolg durch Strategie,{" "}
                <span 
                  className="bg-clip-text bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%] transition-all duration-300"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Design und Skalierung
                </span>
              </h2>
            </div>

            {/* Case Study Swiper */}
            <div className="mt-4 flex flex-1 items-center justify-center md:mt-[64px] transition-all duration-300">
              <div className="relative w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <Swiper
                  modules={[Navigation, Pagination]}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  spaceBetween={40}
                  speed={600}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  className="case-study-swiper"
                >
                  {caseStudyComponents.map((CardComponent, index) => (
                    <SwiperSlide key={index} className="!w-[340px] md:!w-[min(1080px,90vw)] transition-all duration-300">
                      <CardComponent />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons - Hidden on mobile, visible on desktop */}
                <button 
                  className="swiper-button-prev-custom absolute left-2 md:left-[5vw] top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/20 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] shadow-[inset_0px_1.625px_6.5px_0px_rgba(255,255,255,0.40)] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[4.88px] transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl active:scale-95"
                  aria-label="Previous case study"
                >
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-1">
                    <path d="M12 2L2 12L12 22" stroke="#404040" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  className="swiper-button-next-custom absolute right-2 md:right-[5vw] top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-white/20 to-white/20 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] shadow-[inset_0px_1.625px_6.5px_0px_rgba(255,255,255,0.40)] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[4.88px] transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-xl active:scale-95"
                  aria-label="Next case study"
                >
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 2L12 12L2 22" stroke="#404040" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
