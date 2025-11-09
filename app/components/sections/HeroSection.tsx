"use client";

import Image from "next/image";

// Background and texture
const imgTexture = "/assets/images/hero/hero-texture.svg";
const imgFrame2 = "/assets/images/hero/hero-frame2.svg";
const imgGroup = "/assets/images/hero/hero-group.svg";
const imgGroup1 = "/assets/images/hero/hero-group1.svg";

// Logo marquee images - NEW IMAGES
const imgImage4 = "/assets/images/hero/image 4.png";
const imgImage5 = "/assets/images/hero/image 5.png";
const imgImage6 = "/assets/images/hero/Frame 1707480419.png";
const imgImage7 = "/assets/images/hero/image 7.png";
const imgImage11 = "/assets/images/hero/image 11.png";
const imgImage13 = "/assets/images/hero/image 13.png";
const imgImage14 = "/assets/images/hero/image 14.png";

// Icons and badges
const imgIcon = "/assets/images/hero/hero-icon.svg";
const imgImage28 = "/assets/images/hero/hero-image28.png";
const imgIntersect = "/assets/images/hero/hero-intersect.svg";
const imgImage25 = "/assets/images/hero/hero-image25.png";
const imgImage27 = "/assets/images/hero/hero-image27.png";
const imgImage24 = "/assets/images/hero/hero-image24.png";
const imgImage291 = "/assets/images/hero/hero-image291.png";
const imgGroup13681 = "/assets/images/hero/hero-group13681.svg";

// Nav logo
const imgGroup2 = "/assets/images/hero/hero-nav-logo-1.svg";
const imgGroup3 = "/assets/images/hero/hero-nav-logo-2.svg";
const imgFrame = "/assets/images/hero/hero-nav-frame.svg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[560px] lg:min-h-[950px] w-full overflow-hidden bg-white pb-20 md:pb-24 lg:pb-28">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 overflow-hidden" style={{ height: '100%' }}>
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-0 h-full w-full">
            <Image 
              src={imgFrame2} 
              alt="" 
              fill 
              className="object-cover" 
              priority 
              quality={90} 
              sizes="(max-width: 768px) 100vw, 1440px"
              fetchPriority="high"
            />
          </div>
          
          {/* Texture Overlay */}
          <div 
            className="absolute left-0 top-0 h-full w-full mix-blend-overlay"
            style={{
              backgroundImage: `url('${imgTexture}')`,
              backgroundSize: '116.203px 116.203px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'top left'
            }}
          />

          {/* Border Decal */}
          <div className="absolute bottom-0 left-0 h-[152.156px] w-full overflow-hidden">
            <div 
              className="absolute left-1/2 top-1/2 h-[135.25px] w-[1442.667px] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              style={{ transform: 'translate(calc(-50% - 8.17px), calc(-50% - 0.45px))' }}
            >
              <div 
                className="absolute left-1/2 top-0 h-[282.5px] w-[2074.96px] -translate-x-1/2"
                style={{
                  maskImage: `url('${imgGroup}')`,
                  maskSize: '1442.667px 135.25px',
                  maskPosition: '261.167px 0px',
                  maskRepeat: 'no-repeat',
                  transform: 'translateX(calc(-50% + 54.81px))'
                }}
              >
                <Image src={imgGroup1} alt="" fill className="object-cover" priority quality={85} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container - Scaled for tablet */}
      <div className="relative mx-auto px-4 md:px-0 md:min-h-[560px] lg:min-h-[950px] md:flex md:justify-center lg:block">
        <div 
          className="relative w-full md:w-[1440px] md:scale-[0.533] lg:scale-100 lg:mx-auto"
          style={{ 
            transformOrigin: 'top center',
            minHeight: '950px'
          }}
        >
        {/* Navigation Bar */}
        <div 
          className="absolute left-[17px] md:left-1/2 md:-translate-x-1/2 top-[23px] md:top-[26px] h-[58px] md:h-[77px] w-[380px] md:w-[1172px]"
        >
          <div 
            className="absolute left-0 top-0 h-full w-full rounded-[20px] border border-white backdrop-blur-[4.875px] hidden md:block"
            style={{
              backgroundImage: 'linear-gradient(172.699deg, rgba(255, 249, 238, 0.1) 0.122%, rgba(255, 232, 239, 0.1) 99.544%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
            }}
          />
          
          <div className="absolute left-1/2 top-[12px] md:top-[16px] flex -translate-x-1/2 items-center gap-0 md:gap-[136px] justify-between md:justify-center w-[calc(100%-32px)] md:w-auto">
            {/* Logo */}
            <div className="relative h-[33px] w-[158px] md:h-[33px] md:w-[158px] overflow-hidden flex-shrink-0">
              <div className="absolute bottom-0 left-0 right-[81.36%] top-0">
                <Image src={imgGroup2} alt="" fill className="object-contain" priority sizes="30px" />
              </div>
              <div className="absolute bottom-[33.06%] left-[23.53%] right-0 top-[26.76%]">
                <Image src={imgGroup3} alt="" fill className="object-contain" priority sizes="120px" />
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex items-center justify-center gap-[10px] md:gap-[30px] hidden md:flex">
              <p className="whitespace-nowrap text-center text-[#404040]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', letterSpacing: 'clamp(-0.24px, -0.02vw, -0.32px)' }}>Über uns</p>
              
              <div className="flex items-center gap-0.5 md:gap-1">
                <p className="whitespace-nowrap text-center text-[#404040]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', letterSpacing: 'clamp(-0.24px, -0.02vw, -0.32px)' }}>Dienstleistung</p>
                <div className="relative" style={{ width: 'clamp(11px, 0.8vw, 14px)', height: 'clamp(11px, 0.8vw, 14px)' }}>
                  <Image src={imgFrame} alt="" fill className="object-contain" sizes="14px" loading="lazy" />
                </div>
              </div>

              <p className="whitespace-nowrap text-center text-[#404040]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', letterSpacing: 'clamp(-0.24px, -0.02vw, -0.32px)' }}>Fallstudien</p>

              <div className="flex items-center gap-0.5 md:gap-1">
                <p className="whitespace-nowrap text-center text-[#404040]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', letterSpacing: 'clamp(-0.24px, -0.02vw, -0.32px)' }}>Ressourcen</p>
                <div className="relative" style={{ width: 'clamp(11px, 0.8vw, 14px)', height: 'clamp(11px, 0.8vw, 14px)' }}>
                  <Image src={imgFrame} alt="" fill className="object-contain" sizes="14px" loading="lazy" />
                </div>
              </div>

              <p className="whitespace-nowrap text-center text-[#404040]" style={{ fontSize: 'clamp(12px, 1.1vw, 16px)', letterSpacing: 'clamp(-0.24px, -0.02vw, -0.32px)' }}>Karriere</p>
            </div>

            {/* Contact Button - Desktop only */}
            <div className="relative h-[36px] w-[100px] md:h-[44px] md:w-[136px] overflow-hidden rounded-[45px] border-2 border-[#a3e532] bg-[#e8fead] hidden md:block">
              <p className="absolute left-0 right-0 top-[calc(50%-8.5px)] whitespace-pre-wrap text-center text-[13px] font-medium text-[#404040] md:top-[calc(50%-9.5px)] md:text-[16px]">
                Kontakt
              </p>
            </div>

            {/* Hamburger Menu - Mobile only */}
            <div className="block md:hidden relative h-[24px] w-[24px]">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.75H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 12H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 17.25H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <div 
          className="absolute left-[88.34px] md:left-1/2 md:left-1/2 top-[84px] md:top-[95px] md:top-[145px] h-[32px] md:h-[45px] md:h-[71px] w-[239.324px] md:w-[350px] md:w-[531px] translate-x-0 md:-translate-x-1/2 md:-translate-x-1/2"
        >
          <div 
            className="absolute left-0 top-0 h-full w-full rounded-[9.915px] md:rounded-[16px] md:rounded-[22px] border-[0.451px] md:border-[0.7px] md:border border-[rgba(255,255,255,0.9)]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)'
            }}
          />
          
          {/* Avatars */}
          <div className="absolute left-[7.66px] md:left-[12px] md:left-[17px] top-[7.66px] md:top-[12px] md:top-[17px] flex items-center">
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.225px] md:border-[0.35px] md:border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <Image src={imgImage28} alt="" fill className="rounded-full object-cover" sizes="37px" loading="lazy" />
            </div>
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.451px] md:border-[0.7px] md:border border-[rgba(255,255,255,0.9)]">
              <Image src={imgIntersect} alt="" fill className="object-contain" sizes="37px" loading="lazy" />
            </div>
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.225px] md:border-[0.35px] md:border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <Image src={imgImage25} alt="" fill className="rounded-full object-cover" sizes="37px" loading="lazy" />
            </div>
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.225px] md:border-[0.35px] md:border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <Image src={imgImage27} alt="" fill className="rounded-full object-cover" sizes="37px" loading="lazy" />
            </div>
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.225px] md:border-[0.35px] md:border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <Image src={imgImage24} alt="" fill className="object-cover" style={{ objectPosition: '-57.98% -47.27%' }} sizes="37px" loading="lazy" />
            </div>
            <div className="relative -mr-[4.056px] md:-mr-[6.5px] md:-mr-[9px] h-[16.676px] md:h-[26px] md:h-[37px] w-[16.676px] md:w-[26px] md:w-[37px] overflow-hidden rounded-full border-[0.225px] md:border-[0.35px] md:border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <Image src={imgImage291} alt="" fill className="rounded-full object-cover" sizes="37px" loading="lazy" />
            </div>
          </div>

          {/* Rating Text */}
          <p className="absolute left-[93.3px] md:left-[148px] md:left-[207px] top-[8.11px] md:top-[12px] md:top-[18px] text-[7.211px] md:text-[11px] md:text-[16px] font-semibold capitalize leading-[1.2] text-[#252432]">
            <span>4.8 </span>
            <span className="font-normal text-[#8987a1]">Sterne aus</span>
            <span> 35+ </span>
            <span className="font-normal text-[#8987a1]">Kundenbewertungen</span>
          </p>

          {/* Stars */}
          <div className="absolute left-[93.3px] md:left-[148px] md:left-[207px] top-[18.48px] md:top-[28px] md:top-[41px] h-[5.73px] md:h-[9px] md:h-[12.714px] w-[40.113px] md:w-[63px] md:w-[89px]">
            <Image src={imgGroup13681} alt="" fill className="object-contain" sizes="89px" loading="lazy" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 
          className="absolute left-[17px] md:left-1/2 top-[126px] md:top-[256px] w-[380px] md:w-[1026px] translate-x-0 md:-translate-x-1/2 text-left md:text-center text-[30px] md:text-[55.664px] font-normal leading-[33px] md:leading-[62.7px] tracking-[-0.57px] md:tracking-[-1.11px] text-black"
        >
          Performance Design Outsourcing für
          <br />
          E-Commerce Agenturen (& DTC Brands)
        </h1>

        {/* Subheading */}
        <div 
          className="absolute left-[17px] md:left-1/2 top-[263px] md:top-[396px] w-[380px] md:w-[1026px] translate-x-0 md:-translate-x-1/2 whitespace-pre-wrap text-left md:text-center text-[14px] md:text-[16.5px] font-light leading-[20px] md:leading-[23.1px] text-black"
        >
          <p className="mb-0 leading-[20px] md:leading-[23.1px]">Scalecraft liefert dir ein eingespieltes Performance-Designteam – optimiert für Amazon / E-Commerce Agenturen und Freelancer</p>
          <p className="leading-[20px] md:leading-[23.1px]">
            <span className="font-semibold"> Ergebnis:</span>
            <span className="font-light"> Mehr Umsatz, weniger Aufwand, konstante Qualität.</span>
          </p>
        </div>

        {/* Stats Badges */}
        <div 
          className="absolute left-[17px] md:left-1/2 top-[420px] md:top-[495px] flex translate-x-0 md:-translate-x-1/2 items-start md:items-center gap-[24px] md:gap-6 flex-col md:flex-row"
        >
          <div className="flex items-center gap-[8px] md:gap-[6px] md:gap-[11px]">
            <div className="relative h-[20px] w-[20px] md:h-[20px] md:w-[20px] md:h-[30px] md:w-[30px] flex-shrink-0">
              <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
            </div>
            <div className="font-normal leading-[20px] md:leading-[19px] md:leading-[24px] text-[#404040] whitespace-nowrap">
              <span className="text-[14px] md:text-[14px] md:text-[20px] font-bold md:font-semibold md:font-semibold">x2</span>
              <span className="text-[14px] md:text-[13px] md:text-[18px] font-normal"> schneller (Laut Umfrage)</span>
            </div>
          </div>

          <div className="flex items-center gap-[8px] md:gap-[6px] md:gap-[11px]">
            <div className="relative h-[20px] w-[20px] md:h-[20px] md:w-[20px] md:h-[30px] md:w-[30px] flex-shrink-0">
              <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
            </div>
            <div className="font-normal leading-[20px] md:leading-[19px] md:leading-[24px] text-[#404040] whitespace-nowrap">
              <span className="text-[14px] md:text-[14px] md:text-[20px] font-bold md:font-semibold md:font-semibold">x2</span>
              <span className="text-[14px] md:text-[13px] md:text-[18px] font-normal"> effizienter</span>
            </div>
          </div>

          <div className="flex items-center gap-[8px] md:gap-[6px] md:gap-[11px]">
            <div className="relative h-[20px] w-[20px] md:h-[20px] md:w-[20px] md:h-[30px] md:w-[30px] flex-shrink-0">
              <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
            </div>
            <div className="font-normal leading-[20px] md:leading-[19px] md:leading-[24px] text-[#404040] whitespace-nowrap">
              <span className="text-[14px] md:text-[13px] md:text-[18px]">Umsatzsteigerung & Kostenreduktion</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="absolute left-1/2 top-[570px] md:top-[420px] md:top-[613px] flex -translate-x-1/2 items-center gap-[10.4px] md:gap-[12px] md:gap-[18px] flex-col md:flex-row md:flex-row mb-8 md:mb-0 md:mb-0"
        >
          <div className="relative h-[41.6px] md:h-[45px] md:h-[48px] w-[206.267px] md:w-[220px] md:w-[238px] rounded-[260px] md:rounded-[280px] md:rounded-[300px] border-[0.867px] md:border md:border border-black bg-[#252525] cursor-pointer hover:bg-[#404040] transition-colors">
            <p className="absolute left-1/2 top-1/2 w-[157.733px] md:w-[170px] md:w-[182px] -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-[14px] md:text-[15px] md:text-[16px] text-white">
              Erstgespräch buchen
            </p>
          </div>

          <div 
            className="relative h-[41.6px] md:h-[45px] md:h-[48px] w-[206.267px] md:w-[220px] md:w-[238px] rounded-[260px] md:rounded-[280px] md:rounded-[300px] border-[0.867px] md:border md:border border-white backdrop-blur-[4.225px] md:backdrop-blur-[4.5px] md:backdrop-blur-[4.875px] cursor-pointer hover:bg-white/20 transition-colors"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
            }}
          >
            <p className="absolute left-1/2 top-1/2 w-[185px] md:w-[195px] md:w-[210px] -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-[14px] md:text-[15px] md:text-[16px] text-[#404040]">
              Unsere Ergebnisse ansehen
            </p>
          </div>
        </div>

        {/* Logo Marquee - Tablet & Desktop */}
        <div className="absolute left-[40px] md:left-1/2 md:-translate-x-1/2 top-[748px] md:top-[748px] h-[60px] md:h-[78px] w-[688px] md:w-[1104px] overflow-hidden max-md:hidden">
          <div className="animate-marquee flex h-[78px] w-[3020px] grayscale">
            {/* First set of logos */}
            <div className="flex h-[78px] min-w-[1510px] items-center gap-[80px]">
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage4} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage5} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage6} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage7} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage11} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage13} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage14} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex h-[78px] min-w-[1510px] items-center gap-[80px]">
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage4} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage5} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage6} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage7} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage11} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage13} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <Image src={imgImage14} alt="Partner logo" fill className="object-contain" sizes="120px" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Logo Marquee - Mobile only - Outside container */}
      <div className="hidden max-md:block absolute left-0 top-[680px] h-[58.734px] w-full overflow-hidden">
        <div className="animate-marquee-mobile flex h-[58.734px] w-[2274.066px]">
          {/* First set of logos */}
          <div className="flex h-[58.734px] min-w-[1137.033px] items-center justify-around px-4">
            <Image src={imgImage6} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage5} alt="Partner logo" width={80} height={18} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage4} alt="Partner logo" width={80} height={26} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage7} alt="Partner logo" width={80} height={15} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage11} alt="Partner logo" width={80} height={59} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage13} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage14} alt="Partner logo" width={80} height={50} className="object-contain opacity-70" loading="lazy" />
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex h-[58.734px] min-w-[1137.033px] items-center justify-around px-4">
            <Image src={imgImage6} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage5} alt="Partner logo" width={80} height={18} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage4} alt="Partner logo" width={80} height={26} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage7} alt="Partner logo" width={80} height={15} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage11} alt="Partner logo" width={80} height={59} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage13} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
            <Image src={imgImage14} alt="Partner logo" width={80} height={50} className="object-contain opacity-70" loading="lazy" />
          </div>
        </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-1510px);
            }
          }
          .animate-marquee {
            animation: marquee-scroll 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-1137.033px);
            }
          }
          .animate-marquee-mobile {
            animation: marquee-scroll-mobile 15s linear infinite;
          }
        `
      }} />
    </section>
  );
}

