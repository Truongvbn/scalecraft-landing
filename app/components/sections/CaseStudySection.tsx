"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CaseStudyCard1 from "./CaseStudyCard1";
import CaseStudyCard2 from "./CaseStudyCard2";
import CaseStudyCard3 from "./CaseStudyCard3";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const caseStudyComponents = [
  CaseStudyCard1,
  CaseStudyCard2,
  CaseStudyCard3,
];

export default function CaseStudySection() {
  return (
    <section className="relative w-full py-12 px-0 lg:py-20 xl:py-24 bg-[#f0f0f0] transition-all duration-300">
      {/* Glassmorphism Container */}
      <div className="relative w-full h-full overflow-hidden rounded-[8px] lg:rounded-[24px] xl:rounded-[30px] transition-all duration-500" style={{
        minHeight: '1153px',
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
            className="absolute inset-0 rounded-[16px] lg:rounded-[48px] xl:rounded-[60px] transition-all duration-500"
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
          <div className="relative z-10 flex min-h-[1153px] flex-col px-4 pt-12 pb-8 lg:px-16 lg:pt-24 lg:pb-16 xl:px-12 xl:pt-20 xl:pb-12 transition-all duration-300">
            {/* Heading */}
            <div className="text-center animate-in fade-in slide-in-from-top-4 duration-700">
              <h2 className="text-[30px] leading-[1.25] tracking-[-1.92px] text-[#252525] lg:text-[38px] lg:leading-[48px] xl:text-[44px] xl:leading-[55px] transition-all duration-300">
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
            <div className="mt-8 flex flex-1 items-center justify-center lg:mt-20 xl:mt-16 transition-all duration-300">
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
                    <SwiperSlide key={index} className="!w-[380px] lg:!w-[820px] xl:!w-[1080px] transition-all duration-300">
                      <CardComponent />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons - Hidden on mobile */}
                <button 
                  className="swiper-button-prev-custom absolute left-2 md:left-[calc((100%-380px)/2-60px)] lg:left-[calc((100%-820px)/2-70px)] xl:left-[calc((100%-1080px)/2-70px)] top-1/2 z-20 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-white/10 to-white/10 shadow-[0px_1px_8.1px_0px_rgba(0,0,0,0.10)] shadow-[inset_0px_1.625px_6.5px_0px_rgba(255,255,255,0.40)] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[4.88px] hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl active:scale-95"
                  aria-label="Previous slide"
                >
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-1">
                    <path d="M12 2L2 12L12 22" stroke="#404040" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  className="swiper-button-next-custom absolute right-2 md:right-[calc((100%-380px)/2-60px)] lg:right-[calc((100%-820px)/2-70px)] xl:right-[calc((100%-1080px)/2-70px)] top-1/2 z-20 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-white/10 to-white/10 shadow-[0px_1px_8.1px_0px_rgba(0,0,0,0.10)] shadow-[inset_0px_1.625px_6.5px_0px_rgba(255,255,255,0.40)] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[4.88px] hidden lg:flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl active:scale-95"
                  aria-label="Next slide"
                >
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M2 2L12 12L2 22" stroke="#404040" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
