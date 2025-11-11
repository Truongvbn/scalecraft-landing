"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imgGroup2 = "/assets/images/hero/hero-nav-logo-1.svg";
const imgGroup3 = "/assets/images/hero/hero-nav-logo-2.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
      className={`relative w-full transition-all duration-300 
        max-md:h-[60px] max-md:bg-white/95 max-md:backdrop-blur-sm 
        md:h-[77px] md:w-[1172px] 
        ${isScrolled ? 'max-md:shadow-md md:shadow-lg' : ''}`}
    >
      {/* Glass Background - Desktop Only (floating card style) */}
      <div 
        className={`absolute left-0 top-0 h-full w-full rounded-[20px] border border-white max-md:hidden transition-all duration-300 ${isScrolled ? 'backdrop-blur-[12px]' : 'backdrop-blur-[4.875px]'}`}
        style={{
          backgroundImage: 'linear-gradient(172.699deg, rgba(255, 249, 238, 0.1) 0.122%, rgba(255, 232, 239, 0.1) 99.544%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)',
          boxShadow: isScrolled 
            ? 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4), 0px 4px 20px rgba(0,0,0,0.1)' 
            : 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
        }}
      />
      
      {/* Mobile Layout - Simple full width bar */}
      <div className="absolute left-0 right-0 top-0 flex h-full items-center justify-between px-4 md:hidden">
        {/* Logo */}
        <div className="relative h-[30px] w-[140px] overflow-hidden flex-shrink-0">
          <div className="absolute bottom-0 left-0 right-[81.36%] top-0">
            <Image src={imgGroup2} alt="" fill className="object-contain" priority sizes="30px" />
          </div>
          <div className="absolute bottom-[33.06%] left-[23.53%] right-0 top-[26.76%]">
            <Image src={imgGroup3} alt="" fill className="object-contain" priority sizes="110px" />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="relative h-[24px] w-[24px]">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.75H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 17.25H21" stroke="#373A40" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Desktop Layout - Grid 3 columns */}
      <div className="absolute left-0 right-0 top-[16px] px-[40px] hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
        {/* Left: Logo */}
        <div className="relative h-[33px] w-[158px] overflow-hidden">
          <div className="absolute bottom-0 left-0 right-[81.36%] top-0">
            <Image src={imgGroup2} alt="" fill className="object-contain" priority sizes="30px" />
          </div>
          <div className="absolute bottom-[33.06%] left-[23.53%] right-0 top-[26.76%]">
            <Image src={imgGroup3} alt="" fill className="object-contain" priority sizes="120px" />
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="flex items-center justify-center gap-[30px]">
          <a 
            href="#team" 
            onClick={(e) => handleNavClick(e, "#team")}
            className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040] hover:text-[#252525] transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Über uns
          </a>
          
          <a 
            href="#benefits" 
            onClick={(e) => handleNavClick(e, "#benefits")}
            className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040] hover:text-[#252525] transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Dienstleistung
          </a>

          <a 
            href="#case-study" 
            onClick={(e) => handleNavClick(e, "#case-study")}
            className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040] hover:text-[#252525] transition-all duration-200 cursor-pointer hover:scale-105"
          >
            Fallstudien
          </a>
        </div>

        {/* Right: Contact Button */}
        <div className="flex justify-end">
          <div className="relative h-[44px] w-[136px] overflow-hidden rounded-[45px] border-2 border-[#a3e532] bg-[#e8fead] cursor-pointer hover:bg-[#d8ee9d] transition-colors">
            <p className="absolute left-0 right-0 top-[calc(50%-9.5px)] whitespace-pre-wrap text-center text-[16px] font-medium text-[#404040]">
              Kontakt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
