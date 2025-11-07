import React from "react";
import Image from "next/image";

export default function CaseStudyCard3() {
  return (
    <div className="flex flex-col h-auto lg:h-[700px] xl:h-[752px] w-full overflow-hidden rounded-[11.267px] lg:rounded-[18px] xl:rounded-[20px] backdrop-blur-[4.875px] border-[0.681px] lg:border-0 border-white/90 bg-[rgba(251,251,255,0.7)] lg:bg-transparent lg:flex-row transition-all duration-500 hover:shadow-2xl">
      {/* Left Side - Image & Content */}
      <div className="relative w-full lg:w-[410px] xl:w-[540px] overflow-hidden rounded-t-[11.267px] lg:rounded-l-[18px] lg:rounded-tr-none xl:rounded-l-[20px] bg-transparent lg:bg-[#1a1a1a] transition-all duration-500">
        {/* Background Texture - Hidden on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 hidden lg:block transition-opacity duration-500"
          style={{
            backgroundImage: "url('/assets/images/case-study/Listitem.png')"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col pt-6 px-6 pb-0 lg:p-2.5 xl:p-3 transition-all duration-300">
          {/* Main Image */}
          <div className="relative h-[245px] lg:h-[280px] xl:h-[321px] overflow-hidden rounded-[11.267px] lg:rounded-[14px] xl:rounded-[16px] bg-white transition-all duration-500 hover:scale-[1.02]">
            <Image
              src="/assets/images/case-study/image 3.png"
              alt="Case Study Dashboard"
              fill
              className="object-contain"
            />
          </div>

          {/* Logo Box - Overlapping image */}
          <div className="relative -mt-7 lg:-mt-8 xl:-mt-10 z-20 mx-auto flex h-[58px] lg:h-[72px] xl:h-[84px] w-[85%] overflow-hidden rounded-[11.267px] lg:rounded-[7px] xl:rounded-[8px] bg-white shadow-[0px_-1.408px_4.929px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_3px_10px_0px_rgba(0,0,0,0.18)] xl:shadow-[0px_4px_12.2px_0px_rgba(0,0,0,0.2)] mb-4 lg:mb-5 xl:mb-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 md:px-3">
              <div className="relative h-[13px] w-[20px] md:h-[36px] md:w-[66px]">
                <Image
                  src="/assets/images/case-study/Group 345.png"
                  alt="bestseller.design"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 md:px-3">
              <div className="relative h-[9px] w-[68px] md:h-[20px] md:w-[62px]">
                <Image
                  src="/assets/images/case-study/image 4.png"
                  alt="amaLOGK"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 md:px-3">
              <div className="relative h-[18px] w-[70px] md:h-[20px] md:w-[62px]">
                <Image
                  src="/assets/images/case-study/image 13.png"
                  alt="ATLAS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 md:px-3">
              <span className="text-[11px] md:text-[12px] font-bold text-black">FREELANCER</span>
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex w-fit rounded-[27.464px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% px-[12.218px] lg:px-3.5 xl:px-4 py-[4.276px] lg:py-1.5 xl:py-1.5 mb-3 mt-2 lg:mt-0 xl:mt-0 lg:mb-3.5 xl:mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="text-[9.774px] lg:text-[12px] xl:text-[14px] font-medium text-white leading-[13.684px] lg:leading-normal xl:leading-normal transition-all duration-200">Umsatzsteigerung</span>
          </div>

          {/* Title */}
          <h3 className="text-[20px] lg:text-[22px] xl:text-[24px] font-medium lg:font-semibold xl:font-semibold leading-[28.168px] lg:leading-[30px] xl:leading-[28px] text-[#252525] lg:text-white xl:text-white mb-2 transition-all duration-300">
            Vom Freelancer zur skalierbaren Agentur mit eigener Designabteilung
          </h3>

          {/* Description */}
          <p className="text-[10px] lg:text-[12px] xl:text-[14px] leading-[15.254px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] lg:text-white/70 xl:text-white/70 mb-6 lg:mb-0 xl:mb-0 transition-all duration-300">
            Der Kunde startete als Einzelunternehmer im Bereich PPC-Management und Account-Betreuung.
            Sein Umsatz basierte fast ausschließlich auf diesen beiden Leistungen – ergänzendes Designaufträge erledigte er selbst, meist nebenbei.
            Das führte langfristig zu Überlastung, Qualitätsschwankungen und fehlender Skalierbarkeit.
            Neue Kunden konnten nur begrenzt angenommen werden, da jede zusätzliche Aufgabe unmittelbar an seine persönliche Arbeitszeit gebunden war.
          </p>
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="flex w-full lg:w-[410px] xl:w-[540px] flex-col bg-transparent lg:bg-white/80 xl:bg-white/80 backdrop-blur-none lg:backdrop-blur-sm xl:backdrop-blur-sm px-6 lg:px-8 xl:px-12 py-6 lg:py-8 xl:py-11 rounded-b-[11.267px] lg:rounded-r-[18px] lg:rounded-bl-none xl:rounded-r-[20px] transition-all duration-500">
        {/* Divider Line - Mobile only */}
        <div className="border-t border-[#b3b3b3] mb-4 lg:hidden transition-opacity duration-300" />

        <div className="mb-4 lg:mb-5 xl:mb-6 transition-all duration-300">
          <h4 className="text-[14px] lg:text-[17px] xl:text-[20px] font-medium text-[#252525] leading-[20.934px] lg:leading-normal xl:leading-normal transition-all duration-200">Lösung von ScaleCraft</h4>
          <div className="mt-2 text-[10px] lg:text-[12px] xl:text-[14px] font-light leading-[15.463px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] space-y-2 lg:space-y-3 xl:space-y-4 transition-all duration-300">
            <p>
              ScaleCraft unterstützte den Kunden beim strategischen Aufbau einer eigenen Designabteilung – inklusive Prozesse, Kommunikationsstruktur und Qualitätsstandards.
            </p>
            <p>
              Dabei wurde nicht nur die operative Designproduktion übernommen, sondern auch das komplette Projektmanagement und die Kundenkommunikation durch ScaleCraft strukturiert.
            </p>
            <p>
              So konnte die neue Designabteilung eigenständig arbeiten, während der Kunde sich auf seine Kernkompetenzen PPC und Account Management konzentrierte – ohne Abstimmung über mehrere Ebenen oder zusätzlichen Managementaufwand.
            </p>
          </div>
        </div>

        <div className="mb-4 lg:mb-5 xl:mb-6 transition-all duration-300">
          <h5 className="mb-3 lg:mb-3.5 xl:mb-4 text-[14px] lg:text-[17px] xl:text-[20px] font-medium text-[#252525] leading-[20.934px] lg:leading-normal xl:leading-normal transition-all duration-200">Ergebnisse</h5>
          <div className="space-y-[6px] lg:space-y-1.5 xl:space-y-2 transition-all duration-300">
            {[
              "Aufbau einer eigenständigen Designabteilung innerhalb weniger Monate",
              "Kein operativer Aufwand für Designkoordination oder Qualitätskontrolle",
              "Direkte Integration in das bestehende Leistungsportfolio (Design + PPC + Account Management)",
              "Neue Umsatzquelle durch eigenständige, profitable Designleistungen"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-[5.623px] lg:gap-1.5 xl:gap-2 transition-all duration-200 hover:translate-x-1">
                <div className="mt-0.5 flex h-[12.651px] w-[12.651px] lg:h-[16px] lg:w-[16px] xl:h-[18px] xl:w-[18px] flex-shrink-0 items-center justify-center rounded-[7.229px] lg:rounded-[9px] xl:rounded-[10px] bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%] transition-all duration-300">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[10px] lg:text-[12px] xl:text-[14px] font-light leading-[15.225px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] transition-all duration-200">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
