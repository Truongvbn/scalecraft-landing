import React from "react";
import Image from "next/image";

export default function CaseStudyCard1() {
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
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 lg:px-2.5 xl:px-3 transition-all duration-200 hover:bg-gray-50">
              <div className="relative h-[13px] w-[20px] lg:h-[28px] lg:w-[52px] xl:h-[36px] xl:w-[66px] transition-all duration-300">
                <Image
                  src="/assets/images/case-study/Group 345.png"
                  alt="bestseller.design"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 lg:px-2.5 xl:px-3 transition-all duration-200 hover:bg-gray-50">
              <div className="relative h-[9px] w-[68px] lg:h-[16px] lg:w-[58px] xl:h-[20px] xl:w-[62px] transition-all duration-300">
                <Image
                  src="/assets/images/case-study/image 4.png"
                  alt="amaLOGK"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center border-r border-gray-100 px-2 lg:px-2.5 xl:px-3 transition-all duration-200 hover:bg-gray-50">
              <div className="relative h-[18px] w-[70px] lg:h-[19px] lg:w-[60px] xl:h-[20px] xl:w-[62px] transition-all duration-300">
                <Image
                  src="/assets/images/case-study/image 13.png"
                  alt="ATLAS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center px-2 lg:px-2.5 xl:px-3 transition-all duration-200 hover:bg-gray-50">
              <span className="text-[11px] lg:text-[11.5px] xl:text-[12px] font-bold text-black transition-all duration-200">FREELANCER</span>
            </div>
          </div>

          {/* Tag */}
          <div className="inline-flex w-fit rounded-[27.464px] bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% px-[12.218px] lg:px-3.5 xl:px-4 py-[4.276px] lg:py-1.5 xl:py-1.5 mb-3 mt-2 lg:mt-0 xl:mt-0 lg:mb-3.5 xl:mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
            <span className="text-[9.774px] lg:text-[12px] xl:text-[14px] font-medium text-white leading-[13.684px] lg:leading-normal xl:leading-normal transition-all duration-200">Umsatzsteigerung</span>
          </div>

          {/* Title */}
          <h3 className="text-[20px] lg:text-[22px] xl:text-[24px] font-medium lg:font-semibold xl:font-semibold leading-[28.168px] lg:leading-[30px] xl:leading-[28px] text-[#252525] lg:text-white xl:text-white mb-2 transition-all duration-300">
            Erweiterung des Kundenwerts durch Value Added Design-Service
          </h3>

          {/* Description */}
          <p className="text-[10px] lg:text-[12px] xl:text-[14px] leading-[15.254px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] lg:text-white/70 xl:text-white/70 mb-6 lg:mb-0 xl:mb-0 transition-all duration-300">
            Der Kunde bietet ein hybrides Dienstleistungsmodell an – bestehend aus Videokursen und persönlicher Betreuung, um die Umsetzung der Inhalte sicherzustellen.
            Trotz guter Ergebnisse suchte das Unternehmen nach einer Möglichkeit, den Customer Lifetime Value zu erhöhen und die Kundenbindung nachhaltig zu stärken.
            Ziel war es, ein zusätzliches Leistungsmodul zu schaffen, das echten Mehrwert bietet, ohne den internen Aufwand zu erhöhen oder neue Ressourcen aufbauen zu müssen.
          </p>
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="flex w-full lg:w-[410px] xl:w-[540px] flex-col bg-transparent lg:bg-white/80 xl:bg-white/80 backdrop-blur-none lg:backdrop-blur-sm xl:backdrop-blur-sm px-6 lg:px-8 xl:px-12 py-6 lg:py-8 xl:py-11 rounded-b-[11.267px] lg:rounded-r-[18px] lg:rounded-bl-none xl:rounded-r-[20px] transition-all duration-500">
        {/* Divider Line - Mobile only */}
        <div className="border-t border-[#b3b3b3] mb-4 lg:hidden transition-opacity duration-300" />

        {/* Category */}
        <div className="mb-4 lg:mb-5 xl:mb-6 transition-all duration-300">
          <h4 className="text-[14px] lg:text-[17px] xl:text-[20px] font-medium text-[#252525] leading-[20.934px] lg:leading-normal xl:leading-normal transition-all duration-200">Lösung von ScaleCraft</h4>
          <div className="mt-2 text-[10px] lg:text-[12px] xl:text-[14px] font-light leading-[15.463px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] space-y-2 lg:space-y-3 xl:space-y-4 transition-all duration-300">
            <p>
              Gemeinsam mit dem Business-Development-Team von ScaleCraft wurde ein skalierbares Designkonzept entwickelt, das sich nahtlos in die bestehenden Prozesse des Kunden integriert.
              <br />
              Dabei lag der Fokus auf einer minimalen operativen Belastung für das bestehende Team – die gesamte Abwicklung wurde über standardisierte Abläufe und klare Kommunikationsstrukturen umgesetzt.
            </p>
            <p>Durch die Kombination aus individueller Designstrategie und effizientem Prozessmanagement entstand ein vollständig integrierter Value-Added-Service, der als Erweiterung des bestehenden Angebots fungiert.</p>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-4 lg:mb-5 xl:mb-6 transition-all duration-300">
          <h5 className="mb-3 lg:mb-3.5 xl:mb-4 text-[14px] lg:text-[17px] xl:text-[20px] font-medium text-[#252525] leading-[20.934px] lg:leading-normal xl:leading-normal transition-all duration-200">Ergebnisse</h5>
          
          {/* Achievements List */}
          <div className="space-y-[6px] lg:space-y-1.5 xl:space-y-2 transition-all duration-300">
            {[
              "+84.000 € zusätzlicher Umsatz (2024) aus Bestandskunden",
              "+140.000 € Umsatz (2025) prognostiziert auf Basis der laufenden Retainer",
              "Erhöhte Kundenzufriedenheit durch ganzheitliche Betreuung",
              "Höhere Bindung & Exklusivität, da der Service nur für aktive Kunden verfügbar ist"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-[5.623px] lg:gap-1.5 xl:gap-2 transition-all duration-200 hover:translate-x-1">
                <div className="mt-0.5 flex h-[12.651px] w-[12.651px] lg:h-[16px] lg:w-[16px] xl:h-[18px] xl:w-[18px] flex-shrink-0 items-center justify-center rounded-[7.229px] lg:rounded-[9px] xl:rounded-[10px] bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%] transition-all duration-300">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[10px] lg:text-[12px] xl:text-[14px] font-light leading-[15.225px] lg:leading-[18px] xl:leading-[21.66px] text-[#252525] transition-all duration-200">
                  {achievement.includes('€') ? (
                    <>
                      {achievement.split('€')[0]}<span className="font-semibold">€</span>{achievement.split('€')[1]}
                    </>
                  ) : achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-auto h-[64px] lg:h-[78px] xl:h-[91px] rounded-[11.246px] lg:rounded-[14px] xl:rounded-[16px] border-[0.703px] lg:border xl:border border-white bg-white/60 backdrop-blur-md px-4 lg:px-5 xl:px-6 py-3 lg:py-3.5 xl:py-4 transition-all duration-300 hover:bg-white/80 hover:shadow-lg">
          <div className="flex items-center gap-3 lg:gap-3.5 xl:gap-4 h-full">
            <div className="relative h-[49px] w-[49px] lg:h-[58px] lg:w-[58px] xl:h-[68px] xl:w-[68px] flex-shrink-0 overflow-hidden rounded-full border-[0.351px] lg:border-[0.4px] xl:border-[0.5px] border-[rgba(255,255,255,0.9)] transition-all duration-300 hover:scale-110">
              <Image
                src="https://www.figma.com/api/mcp/asset/a8e05f67-4f3e-422f-bd05-406eb3356c08"
                alt="@BanklessHQ"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-[10px] lg:text-[12px] xl:text-[14px] font-light leading-[15.225px] lg:leading-[18px] xl:leading-[21.66px] text-[#404040] transition-all duration-200">
                <span className="font-semibold">@BanklessHQ</span>
                <br />
                Dank ScaleCraft konnten wir unsere Produktbilder in Rekordzeit aktualisieren – professionell, effizient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
