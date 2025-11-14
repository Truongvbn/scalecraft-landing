"use client";

import Image from "next/image";
import RatingBadge from "./hero/RatingBadge";
import HeroContent from "./hero/HeroContent";
import Subheading from "./hero/Subheading";
import StatsCards from "./hero/StatsCards";
import CTAButton from "./hero/CTAButton";
import LogoMarquee from "./hero/LogoMarquee";
import HeroBackground from "./hero/HeroBackground";

// Logo marquee images - Mobile
const imgImage4 = "/assets/images/hero/image 4.png";
const imgImage5 = "/assets/images/hero/image 5.png";
const imgImage6 = "/assets/images/hero/Frame 1707480419.png";
const imgImage7 = "/assets/images/hero/image 7.png";
const imgImage11 = "/assets/images/hero/image 11.png";
const imgImage13 = "/assets/images/hero/image 13.png";
const imgImage14 = "/assets/images/hero/image 14.png";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-4 sm:pb-0 lg:pb-4">
      <HeroBackground />

      {/* Content Container */}
      <div className="relative mx-auto px-4 sm:flex sm:max-h-[550px] sm:justify-center sm:overflow-hidden sm:px-0 md:max-h-[620px] lg:block lg:min-h-[750px] lg:max-h-none lg:overflow-visible">
        <div 
          className="relative flex w-full flex-col sm:w-[1440px] sm:scale-[0.65] md:scale-[0.75] lg:mx-auto lg:scale-100"
          style={{ 
            transformOrigin: 'top center'
          }}
        >
          {/* Add spacing for navbar - mobile: spacing for absolute navbar, tablet/desktop: space for fixed navbar */}
          <div className="mt-[94px] flex max-sm:justify-start sm:mt-[160px] sm:justify-center lg:mt-[150px]"><HeroContent /></div>
          <div className="mt-[20px] flex max-sm:justify-start sm:mt-[31px] sm:justify-center"><RatingBadge /></div>
          <div className="mt-[20px] flex max-sm:justify-start sm:mt-[34px] sm:justify-center"><Subheading /></div>
          <div className="mt-[28px] flex max-sm:justify-start sm:mt-[44px] sm:justify-center"><StatsCards /></div>
          <div className="mt-[36px] flex justify-center sm:mt-[67px]"><CTAButton /></div>
          <div className="mt-[36px] hidden sm:mt-[19px] sm:mb-[25px] sm:flex sm:justify-center lg:mt-[50px] lg:mb-0"><LogoMarquee /></div>
          
          {/* Mobile Marquee - Inside content flow */}
          <div className="mt-[36px] flex w-full justify-center overflow-hidden max-sm:flex sm:hidden">
            <div className="h-[58.734px] w-full overflow-hidden">
              <div className="animate-marquee-mobile flex h-[58.734px] w-[2274.066px]">
                <div className="flex h-[58.734px] min-w-[1137.033px] items-center justify-around px-4">
                  <Image src={imgImage6} alt="Partner logo" width={107} height={31} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage5} alt="Partner logo" width={80} height={18} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage4} alt="Partner logo" width={80} height={26} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage7} alt="Partner logo" width={130} height={25} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage11} alt="Partner logo" width={80} height={59} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage13} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage14} alt="Partner logo" width={80} height={50} className="object-contain opacity-70" loading="lazy" />
                </div>
                <div className="flex h-[58.734px] min-w-[1137.033px] items-center justify-around px-4">
                  <Image src={imgImage6} alt="Partner logo" width={107} height={31} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage5} alt="Partner logo" width={80} height={18} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage4} alt="Partner logo" width={80} height={26} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage7} alt="Partner logo" width={130} height={25} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage11} alt="Partner logo" width={80} height={59} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage13} alt="Partner logo" width={80} height={23} className="object-contain opacity-70" loading="lazy" />
                  <Image src={imgImage14} alt="Partner logo" width={80} height={50} className="object-contain opacity-70" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-1510px); }
          }
          .animate-marquee {
            animation: marquee-scroll 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll-mobile {
            0% { transform: translateX(0); }
            100% { transform: translateX(-1137.033px); }
          }
          .animate-marquee-mobile {
            animation: marquee-scroll-mobile 15s linear infinite;
          }
        `
      }} />
    </section>
  );
}

