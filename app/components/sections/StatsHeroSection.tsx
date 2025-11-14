"use client";

import Image from "next/image";

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
    <section className="relative w-full overflow-hidden bg-[#f0f0f0] pt-4 pb-[122px] max-md:pt-4 max-md:pb-12">
      <div className="mx-auto max-w-[1440px] px-3 md:px-[clamp(2rem,3vw,3rem)] lg:px-[135px]">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-10 lg:mb-12">
          <h2 className="text-[30px] font-normal leading-[1.25] tracking-[-1.2px] text-[#020202] md:text-[32px] md:tracking-[-1.3px] lg:text-[44px] lg:tracking-[-1.92px]">
            Warum wir das können?
            <br />
            <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
              Zahlen sagen mehr als Worte
            </span>
          </h2>
        </div>

        {/* Stats Card */}
        <div className="relative h-[236px] w-full overflow-hidden rounded-[20px] border-2 border-white max-md:h-auto max-md:min-h-[320px] max-md:w-full max-md:max-w-[382px] max-md:mx-auto max-md:rounded-[12.511px] max-md:border-[1.251px]"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)'
          }}
        >
          {/* Gradient Background Right */}
          <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[400px] w-[400px] opacity-60">
            <Image src={imgGradient} alt="" fill className="object-contain" loading="lazy" unoptimized />
          </div>

          {/* Gradient Background Left */}
          <div className="pointer-events-none absolute -bottom-[150px] -left-[100px] h-[400px] w-[400px] opacity-60">
            <Image src={imgGradient1} alt="" fill className="object-contain" loading="lazy" unoptimized />
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
          <div className="relative z-10 flex h-full items-center justify-center gap-[50px] px-8 max-md:grid max-md:grid-cols-2 max-md:gap-x-[38px] max-md:gap-y-[30px] max-md:px-4 max-md:py-6 md:gap-[35px] lg:gap-[50px]">
            {/* Stat 1 */}
            <div className="flex flex-col items-center gap-[8px] text-center max-md:gap-[16.265px] md:gap-[6px] lg:gap-[8px] transition-transform duration-300 hover:scale-105 cursor-default">
              <div className="h-12 w-12 max-md:h-[27.414px] max-md:w-[31.278px] md:h-[38px] md:w-[38px] lg:h-12 lg:w-12 transition-transform duration-300 hover:rotate-12">
                <Image src={imgIcon1} alt="" width={48} height={48} className="h-full w-full object-contain" unoptimized />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:text-[32px] lg:text-[40px]">
                +100
              </p>
              <p className="text-[20px] font-normal leading-[20.202px] text-[#404040] whitespace-nowrap max-md:text-[12px] max-md:leading-[12.638px] max-md:whitespace-normal md:text-[15px] md:leading-[18px] lg:text-[20px] lg:leading-[20.202px]">
                Projekte{" "}
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  abgeschlossen
                </span>
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-[8px] text-center max-md:gap-[16.265px] md:gap-[6px] lg:gap-[8px] transition-transform duration-300 hover:scale-105 cursor-default">
              <div className="h-12 w-12 max-md:h-[27.414px] max-md:w-[31.278px] md:h-[38px] md:w-[38px] lg:h-12 lg:w-12 transition-transform duration-300 hover:rotate-12">
                <Image src={imgIcon4} alt="" width={48} height={48} className="h-full w-full object-contain" unoptimized />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:text-[32px] lg:text-[40px]">
                +50
              </p>
              <p className="text-[20px] font-normal leading-[20.202px] text-[#404040] whitespace-nowrap max-md:text-[12px] max-md:leading-[12.638px] max-md:whitespace-normal md:text-[15px] md:leading-[18px] lg:text-[20px] lg:leading-[20.202px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  zufriedene Kunden
                </span>
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center gap-[8px] text-center max-md:gap-[16.265px] md:gap-[6px] lg:gap-[8px] transition-transform duration-300 hover:scale-105 cursor-default">
              <div className="h-12 w-12 max-md:h-[27.414px] max-md:w-[31.278px] md:h-[38px] md:w-[38px] lg:h-12 lg:w-12 transition-transform duration-300 hover:rotate-12">
                <Image src={imgIcon3} alt="" width={48} height={48} className="h-full w-full object-contain" unoptimized />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:text-[32px] lg:text-[40px]">
                +20 Mio. €
              </p>
              <p className="text-[20px] font-normal leading-[24px] max-md:text-[12px] max-md:leading-[15.013px] md:text-[15px] md:leading-[18px] lg:text-[20px] lg:leading-[24px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  Generierter Umsatz{" "}
                </span>
                <span className="text-neutral-700">für unsere Kunden</span>
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center gap-[8px] text-center max-md:gap-[16.265px] md:gap-[6px] lg:gap-[8px] transition-transform duration-300 hover:scale-105 cursor-default">
              <div className="h-12 w-12 max-md:h-[27.414px] max-md:w-[31.278px] md:h-[38px] md:w-[38px] lg:h-12 lg:w-12 transition-transform duration-300 hover:rotate-12">
                <Image src={imgIcon2} alt="" width={48} height={48} className="h-full w-full object-contain" unoptimized />
              </div>
              <p className="text-[40px] font-medium leading-[1.3] text-black max-md:text-[24px] md:text-[32px] lg:text-[40px]">
                +500
              </p>
              <p className="text-[20px] font-normal leading-[20.202px] text-[#404040] max-md:text-[12px] max-md:leading-[12.638px] md:text-[15px] md:leading-[18px] lg:text-[20px] lg:leading-[20.202px]">
                <span className="bg-gradient-to-r from-[#ec6036] from-14% to-[#f1983f] to-100% bg-clip-text text-transparent">
                  Entwickelte Creatives
                </span>
                {" "}& 3D-Renderings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

