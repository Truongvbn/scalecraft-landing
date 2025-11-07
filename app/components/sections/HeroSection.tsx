"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, viewport } from "@/app/lib/animations";

// Background and texture
const imgTexture = "/assets/images/hero/hero-texture.svg";
const imgFrame2 = "/assets/images/hero/hero-frame2.svg";
const imgGroup = "/assets/images/hero/hero-group.svg";
const imgGroup1 = "/assets/images/hero/hero-group1.svg";

// Logo marquee images - NEW IMAGES
const imgImage4 = "/assets/images/hero/image 4.png";
const imgImage5 = "/assets/images/hero/image 5.png";
const imgImage6 = "/assets/images/hero/image 6.png";
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
    <section className="relative h-[1400px] w-full overflow-hidden bg-white">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-0 h-[1167px] w-full">
            <img src={imgFrame2} alt="" className="h-full w-full object-cover" />
          </div>
          
          {/* Texture Overlay */}
          <div 
            className="absolute left-0 top-0 h-[1167px] w-full mix-blend-overlay"
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
                <img src={imgGroup1} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto h-[900px] w-[1440px]">
        {/* Navigation Bar */}
        <motion.div 
          className="absolute left-[134px] top-[26px] h-[77px] w-[1172px] transform-gpu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div 
            className="absolute left-0 top-0 h-[77px] w-[1172px] rounded-[20px] border border-white backdrop-blur-[4.875px]"
            style={{
              backgroundImage: 'linear-gradient(172.699deg, rgba(255, 249, 238, 0.1) 0.122%, rgba(255, 232, 239, 0.1) 99.544%), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
            }}
          />
          
          <div className="absolute left-1/2 top-[16px] flex -translate-x-1/2 items-center gap-[136px]">
            {/* Logo */}
            <div className="relative h-[33px] w-[158px] overflow-hidden">
              <div className="absolute bottom-0 left-0 right-[81.36%] top-0">
                <img src={imgGroup2} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="absolute bottom-[33.06%] left-[23.53%] right-0 top-[26.76%]">
                <img src={imgGroup3} alt="" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* Nav Links */}
            <div className="flex items-center justify-center gap-[30px]">
              <p className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040]">Über uns</p>
              
              <div className="flex items-center gap-1">
                <p className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040]">Dienstleistung</p>
                <div className="h-[14px] w-[14px]">
                  <img src={imgFrame} alt="" className="h-full w-full object-contain" />
                </div>
              </div>

              <p className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040]">Fallstudien</p>

              <div className="flex items-center gap-1">
                <p className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040]">Ressourcen</p>
                <div className="h-[14px] w-[14px]">
                  <img src={imgFrame} alt="" className="h-full w-full object-contain" />
                </div>
              </div>

              <p className="whitespace-nowrap text-center text-[16px] tracking-[-0.32px] text-[#404040]">Karriere</p>
            </div>

            {/* Contact Button */}
            <div className="relative h-[44px] w-[136px] overflow-hidden rounded-[45px] border-2 border-[#a3e532] bg-[#e8fead]">
              <p className="absolute left-0 right-0 top-[calc(50%-9.5px)] whitespace-pre-wrap text-center text-[16px] font-medium text-[#404040]">
                Kontakt
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rating Badge */}
        <motion.div 
          className="absolute left-1/2 top-[145px] h-[71px] w-[531px] -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="absolute left-0 top-0 h-[71px] w-[531px] rounded-[22px] border border-[rgba(255,255,255,0.9)]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)'
            }}
          />
          
          {/* Avatars */}
          <div className="absolute left-[17px] top-[17px] flex items-center">
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <img src={imgImage28} alt="" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border border-[rgba(255,255,255,0.9)]">
              <img src={imgIntersect} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <img src={imgImage25} alt="" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <img src={imgImage27} alt="" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <img src={imgImage24} alt="" className="h-full w-full object-cover" style={{ objectPosition: '-57.98% -47.27%', width: '286.03%', height: '286.03%' }} />
            </div>
            <div className="relative -mr-[9px] h-[37px] w-[37px] overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
              <img src={imgImage291} alt="" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>

          {/* Rating Text */}
          <p className="absolute left-[207px] top-[18px] text-[16px] font-semibold capitalize leading-[1.2] text-[#252432]">
            <span>4.8 </span>
            <span className="font-normal text-[#8987a1]">Sterne aus</span>
            <span> 35+ </span>
            <span className="font-normal text-[#8987a1]">Kundenbewertungen</span>
          </p>

          {/* Stars */}
          <div className="absolute left-[207px] top-[41px] h-[12.714px] w-[89px]">
            <img src={imgGroup13681} alt="" className="h-full w-full object-contain" />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="absolute left-1/2 top-[256px] w-[1026px] -translate-x-1/2 text-center text-[55.664px] font-normal leading-[62.7px] tracking-[-0.57px] text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Performance Design Outsourcing für
          <br />
          E-Commerce Agenturen (& DTC Brands)
        </motion.h1>

        {/* Subheading */}
        <motion.div 
          className="absolute left-1/2 top-[396px] w-[1026px] -translate-x-1/2 whitespace-pre-wrap text-center text-[16.5px] font-light leading-[23.1px] text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-0 leading-[23.1px]">Scalecraft liefert dir ein eingespieltes Performance-Designteam – optimiert für Amazon / E-Commerce Agenturen und Freelancer</p>
          <p className="leading-[23.1px]">
            <span className="font-semibold"> Ergebnis:</span>
            <span className="font-light"> Mehr Umsatz, weniger Aufwand, konstante Qualität.</span>
          </p>
        </motion.div>

        {/* Stats Badges */}
        <motion.div 
          className="absolute left-1/2 top-[495px] flex -translate-x-1/2 items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-[11px]">
            <div className="h-[30px] w-[30px] flex-shrink-0">
              <img src={imgIcon} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="font-normal leading-[24px] text-[#404040]">
              <span className="text-[20px] font-semibold">x2</span>
              <span className="text-[18px]"> schneller (Laut Umfrage)</span>
            </div>
          </div>

          <div className="flex items-center gap-[11px]">
            <div className="h-[30px] w-[30px] flex-shrink-0">
              <img src={imgIcon} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="font-normal leading-[24px] text-[#404040]">
              <span className="text-[20px] font-semibold">x3</span>
              <span className="text-[18px]"> effizienter</span>
            </div>
          </div>

          <div className="flex items-center gap-[11px]">
            <div className="h-[30px] w-[30px] flex-shrink-0">
              <img src={imgIcon} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="font-normal leading-[24px] text-[#404040]">
              <span className="text-[18px]">Umsatzsteigerung & Kostenreduktion</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="absolute left-1/2 top-[613px] flex -translate-x-1/2 items-center gap-[18px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="relative h-[48px] w-[238px] rounded-[300px] border border-black bg-[#252525]">
            <p className="absolute left-1/2 top-1/2 w-[182px] -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-[16px] text-white">
              Erstgespräch buchen
            </p>
          </div>

          <div 
            className="relative h-[48px] w-[238px] rounded-[300px] border border-white backdrop-blur-[4.875px]"
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
              boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.4)'
            }}
          >
            <p className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 whitespace-pre-wrap text-center text-[16px] text-[#404040]">
              Unsere Ergebnisse ansehen
            </p>
          </div>
        </motion.div>

        {/* Logo Marquee - Updated with new logos */}
        <div className="absolute left-[136px] top-[748px] h-[78px] w-[1104px] overflow-hidden">
          <div className="animate-marquee flex h-[78px] w-[3020px] grayscale">
            {/* First set of logos */}
            <div className="flex h-[78px] min-w-[1510px] items-center gap-[80px]">
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage4} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage5} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage6} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage7} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage11} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage13} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage14} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex h-[78px] min-w-[1510px] items-center gap-[80px]">
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage4} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage5} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage6} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage7} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage11} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage13} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
              <div className="relative h-[60px] w-[120px]">
                <img src={imgImage14} alt="Partner logo" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video - Below marquee, overlapping connector */}
      <motion.div 
        className="absolute left-1/2 top-[860px] z-20 -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-[450px] w-[800px] overflow-hidden rounded-[20px] shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </motion.div>

      {/* Connector Divider - Always at bottom, links to section 2 */}
      <div className="absolute bottom-0 left-1/2 z-10 h-24 w-[2074.96px] -translate-x-1/2 rounded-t-[50%] bg-[#f0f0f0] shadow-[0px_-7px_24.4px_0px_rgba(0,0,0,0.10)]" />

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
        `
      }} />
    </section>
  );
}
