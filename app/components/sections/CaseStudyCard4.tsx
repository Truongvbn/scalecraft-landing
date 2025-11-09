import React from "react";
import Image from "next/image";

export default function CaseStudyCard4() {
  return (
    <div className="flex h-[700px] w-full overflow-hidden rounded-[20px]">
      {/* Left Side - Image Background */}
      <div className="relative w-[540px] overflow-hidden rounded-l-[20px] bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/assets/images/case-study/Listitem.png')"
          }}
        />
      </div>

      {/* Right Side - Transparent Details */}
      <div className="flex w-[540px] flex-col bg-white/80 backdrop-blur-sm px-12 py-11 rounded-r-[20px]">
        <div className="mb-6">
          <h4 className="text-[20px] font-medium text-[#252525]">Brand Strategy</h4>
          <p className="mt-2 text-[14px] font-light leading-[21.66px] text-[#252525]">
            Komplettes Rebranding und strategische Neupositionierung führt zu 300% mehr Markenbekanntheit und Premium-Pricing.
          </p>
        </div>

        <div className="mb-6">
          <h5 className="mb-4 text-[20px] font-medium text-[#252525]">Ergebnisse</h5>
          <div className="space-y-2">
            {[
              "Markenbekanntheit um 300% gesteigert",
              "Premium-Pricing erfolgreich durchgesetzt (+45%)",
              "Kundenloyalität von 60% auf 89% erhöht",
              "Expansion in 5 neue Märkte"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[14px] font-light leading-[21.66px] text-[#252525]">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-8">
          {[
            { label: "Brand Awareness", value: "+300%" },
            { label: "Pricing Power", value: "+45%" },
            { label: "Projektdauer", value: "12 Monate" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-[12px] text-[#8c8c8c]">{stat.label}</div>
              <div className="mt-1 text-[24px] font-bold text-[#252525]">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

