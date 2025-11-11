"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CaseStudyCard2() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col h-auto md:min-h-[752px] w-full overflow-visible rounded-[11.267px] md:rounded-[20px] backdrop-blur-[4.875px] border-[0.681px] md:border-0 border-white/90 bg-[rgba(251,251,255,0.7)] md:bg-transparent md:flex-row transition-all duration-500 hover:shadow-2xl">
      {/* Left Side - Image & Content */}
      <div className="relative w-full md:w-[540px] overflow-hidden rounded-t-[11.267px] md:rounded-l-[20px] md:rounded-tr-none bg-transparent md:bg-[#1a1a1a] transition-all duration-500">
        {/* Background Texture - Hidden on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 hidden md:block transition-opacity duration-500"
          style={{
            backgroundImage: "url('/assets/images/case-study/Listitem.png')"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-8 transition-all duration-300">
          {/* Main Image */}
          <div className="relative h-[245px] md:h-[321px] overflow-hidden rounded-[11.267px] md:rounded-[16px] bg-white transition-all duration-500 hover:scale-[1.02]">
            <Image
              src="/assets/images/case-study/casestudy2.png"
              alt="Case Study Dashboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Logo Box - Overlapping image */}
          <div className="relative -mt-7 md:-mt-10 z-20 mx-auto h-[58px] md:h-[84px] w-[85%] md:w-[min(463px,85%)] overflow-hidden rounded-[11.267px] md:rounded-[8px] mb-4 md:mb-6 transition-all duration-300">
            {/* Glassmorphism Background */}
            <div 
              className="absolute inset-0 bg-white/60 border border-white backdrop-blur-[4.875px]"
              style={{
                boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255, 255, 255, 0.4)'
              }}
            />
            
            {/* Content - Horizontal Layout */}
            <div className="relative h-full flex items-center divide-x divide-gray-100/50">
              {/* Logo 1 - bestseller.design */}
              <div className="flex-1 flex items-center justify-center px-1.5 md:px-3 transition-all duration-200 hover:bg-white/20">
                <div className="relative h-[11px] w-full max-w-[16px] md:h-[32px] md:max-w-[59px] transition-all duration-300">
                  <Image
                    src="/assets/images/case-study/Group 345.png"
                    alt="bestseller.design"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Logo 2 - amaLOCK */}
              <div className="flex-1 flex items-center justify-center px-1.5 md:px-3 transition-all duration-200 hover:bg-white/20">
                <div className="relative h-[7px] w-full max-w-[54px] md:h-[22px] md:max-w-[86px] transition-all duration-300">
                  <Image
                    src="/assets/images/case-study/image 4.png"
                    alt="amaLOCK"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Logo 3 - ATLAS */}
              <div className="flex-1 flex items-center justify-center px-1.5 md:px-3 transition-all duration-200 hover:bg-white/20">
                <div className="relative h-[15px] w-full max-w-[61px] md:h-[20px] md:max-w-[78px] transition-all duration-300">
                  <Image
                    src="/assets/images/case-study/image 13.png"
                    alt="ATLAS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Text - FREELANCER */}
              <div className="flex-1 flex items-center justify-center px-1.5 md:px-3 transition-all duration-200 hover:bg-white/20">
                <span className="text-[9.93px] md:text-[12px] font-bold text-black transition-all duration-200 whitespace-nowrap leading-[13.24px]">FREELANCER</span>
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex w-fit rounded-[27.464px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% px-[12.218px] md:px-3.5 md:px-4 py-[4.276px] md:py-1.5 md:py-1.5 mb-3 mt-2 md:mt-0 md:mt-0 md:mb-3.5 md:mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="text-[9.774px] md:text-[12px] md:text-[14px] font-medium text-white leading-[13.684px] md:leading-normal md:leading-normal transition-all duration-200">Outsourcing</span>
          </div>

          {/* Title */}
          <h3 className="text-[20px] md:text-[22px] md:text-[24px] font-medium md:font-semibold md:font-semibold leading-[28.168px] md:leading-[30px] md:leading-[28px] text-[#252525] md:text-white md:text-white mb-2 mt-1 transition-all duration-300">
            Skalierbare Creative-Produktion für eine Full-Service-Amazon-Agentur
          </h3>

          {/* Expand Button - Mobile only */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden flex items-center justify-center w-[18px] h-[6px] mx-auto mb-4 transition-all duration-300"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <svg 
              width="18" 
              height="6" 
              viewBox="0 0 18 6" 
              fill="none" 
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path d="M1 1L9 5L17 1" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Description - Hidden on mobile unless expanded */}
          <p className={`text-[10px] md:text-[12px] md:text-[14px] leading-[15.254px] md:leading-[18px] md:leading-[21.66px] text-[#252525] md:text-white/70 md:text-white/70 mb-6 md:mb-0 md:mb-0 transition-all duration-300 ${!isExpanded ? 'hidden md:block' : 'block'}`}>
            Der Kunde ist eine etablierte Amazon-Full-Service-Agentur mit eigenem internem Designteam und einer starken Marktposition.
            Durch das zunehmende Wachstum und die steigende Nachfrage nach hochwertigen Creatives stieß das interne Team jedoch regelmäßig an seine Kapazitätsgrenzen – große Produktportfolios und enge Deadlines führten zu Verzögerungen in der Creative-Produktion.
          </p>
        </div>
      </div>

      {/* Right Side - Details - Hidden on mobile unless expanded */}
      <div className={`flex w-full md:w-[540px] flex-col bg-transparent md:bg-white/80 backdrop-blur-none md:backdrop-blur-sm px-6 md:px-12 py-6 md:py-11 rounded-b-[11.267px] md:rounded-r-[20px] md:rounded-bl-none transition-all duration-500 md:max-h-[752px] md:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400/70 ${!isExpanded ? 'hidden md:flex' : 'flex'}`}>
        {/* Divider Line - Mobile only */}
        <div className="border-t border-[#b3b3b3] mb-4 md:hidden transition-opacity duration-300" />

        <div className="mb-4 md:mb-4 md:mb-4 transition-all duration-300">
          <h4 className="text-[14px] md:text-[17px] md:text-[20px] font-medium text-[#252525] leading-[20.934px] md:leading-normal md:leading-normal transition-all duration-200">Lösung von ScaleCraft</h4>
          <div className="mt-2 text-[10px] md:text-[12px] md:text-[14px] font-light leading-[15.463px] md:leading-[18px] md:leading-[21.66px] text-[#252525] space-y-2 md:space-y-2.5 md:space-y-3 transition-all duration-300">
            <p>
              Gemeinsam mit der Agentur entwickelte ScaleCraft ein skalierbares Outsourcing-Modell mit klaren Qualitätsstandards.
              <br />
              Der Fokus: Effizienz, Geschwindigkeit und Entlastung des internen Teams, ohne an kreativer Qualität zu verlieren.
            </p>
            <p>Dazu wurde ein Done-for-You-System etabliert – bestehend aus: Strukturiertem Projektmanagement mit agilen Übergabepunkten, Definierten QC-Kriterien (ScaleCraft-Standard), Und einem flexiblen Ressourcenpool aus spezialisierten Designern, die kurzfristig große Volumen umsetzen können.</p>
          </div>
        </div>

        <div className="mb-4 md:mb-5 md:mb-6 transition-all duration-300">
          <h5 className="mb-3 md:mb-3.5 md:mb-4 text-[14px] md:text-[17px] md:text-[20px] font-medium text-[#252525] leading-[20.934px] md:leading-normal md:leading-normal transition-all duration-200">Ergebnisse</h5>
          <div className="space-y-[6px] md:space-y-1.5 md:space-y-2 transition-all duration-300">
            {[
              "Volle Entlastung des internen Designteams",
              "Schnellere Delivery-Times → unmittelbare Umsatzsteigerung bei bestehenden Brands",
              "Effiziente Abarbeitung großer Produktpaletten, ohne Qualitätsverlust",
              "Flexible Skalierung je nach Auftragsvolumen",
              "Höhere Kundenzufriedenheit durch schnelle und hochwertige Creatives"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-[5.623px] md:gap-1.5 md:gap-2 transition-all duration-200 hover:translate-x-1">
                <div className="mt-0.5 flex h-[12.651px] w-[12.651px] md:h-[16px] md:w-[16px] md:h-[18px] md:w-[18px] flex-shrink-0 items-center justify-center rounded-[7.229px] md:rounded-[9px] md:rounded-[10px] bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%] transition-all duration-300">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[10px] md:text-[12px] md:text-[14px] font-light leading-[15.225px] md:leading-[18px] md:leading-[21.66px] text-[#252525] transition-all duration-200">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fazit */}
        <div className="mt-auto pt-4 md:pt-0 md:pt-0 transition-all duration-300">
          <h5 className="mb-2 text-[14px] md:text-[15px] md:text-[16px] font-medium md:font-semibold md:font-semibold text-[#252525] leading-[20.934px] md:leading-normal md:leading-normal transition-all duration-200">Fazit</h5>
          <p className="text-[10px] md:text-[12px] md:text-[14px] font-light leading-[15.225px] md:leading-[18px] md:leading-[21.66px] text-[#252525] transition-all duration-200">
            Mit dem gemeinsam entwickelten Outsourcing-Modell konnte die Agentur ihre operativen Engpässe eliminieren, die Time-to-Market deutlich verkürzen und gleichzeitig die Qualität ihrer Creatives steigern.
            <br /><br />
            Durch die Partnerschaft mit ScaleCraft wurde ein flexibles, skalierbares Designsystem geschaffen, das Umsatz- und Kundenzufriedenheit nachhaltig steigert.
          </p>
        </div>
      </div>
    </div>
  );
}

