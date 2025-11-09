import React from "react";
import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  description: string;
  category: string;
  categoryDescription?: string;
  tag: string;
  imagePath: string;
  industry: string;
  location: string;
  logoUrl?: string;
  achievements: string[];
  testimonial?: {
    author: string;
    text: string;
    avatar: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function CaseStudyCard({
  title,
  description,
  category,
  categoryDescription,
  tag,
  imagePath,
  industry,
  location,
  logoUrl,
  achievements,
  testimonial,
  stats,
}: CaseStudyCardProps) {
  return (
    <div className="relative flex h-[700px] w-full overflow-visible rounded-[20px]">
      {/* Left Side - Image & Info */}
      <div className="relative w-[540px] bg-[#1a1a1a] rounded-l-[20px] overflow-hidden">
        {/* Background Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/assets/images/case-study/Listitem.png')"
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col p-3">
          {/* Main Image */}
          <div className="relative h-[520px] overflow-hidden rounded-[16px] bg-white">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-contain"
            />
          </div>

          {/* Spacer for info box */}
          <div className="h-[42px]" />

          {/* Tag */}
          <div className="mt-6 inline-flex w-fit rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] px-4 py-1.5">
            <span className="text-[14px] font-medium text-white">{tag}</span>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-[20px] font-semibold leading-[28px] text-white">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-[14px] leading-[21.66px] text-white/70 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Info Box - Positioned absolutely to overlap both sides */}
      <div className="absolute left-[15px] top-[490px] z-30 w-[520px]">
        <div className="flex h-[84px] overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_12.2px_0px_rgba(0,0,0,0.2)]">
              {/* Logo 1 - bestseller.design */}
              <div className="flex w-[125px] items-center justify-center border-r border-gray-100">
                <div className="relative h-[48px] w-[90px]">
                  <Image
                    src="/assets/images/case-study/Group 345.png"
                    alt="bestseller.design"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Logo 2 - amaLOGK */}
              <div className="flex w-[98px] items-center justify-center border-r border-gray-100">
                <div className="relative h-[22px] w-[89px]">
                  <Image
                    src="/assets/images/case-study/image 4.png"
                    alt="amaLOGK"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Logo 3 - ATLAS */}
              <div className="flex w-[98px] items-center justify-center border-r border-gray-100">
                <div className="relative h-[22px] w-[89px]">
                  <Image
                    src="/assets/images/case-study/image 13.png"
                    alt="ATLAS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

          {/* Text - FREELANCER */}
          <div className="flex flex-1 items-center justify-center">
            <span className="text-[12px] font-bold text-black">FREELANCER</span>
          </div>
        </div>
      </div>

      {/* Right Side - Details */}
      <div className="flex w-[540px] flex-col bg-white/80 backdrop-blur-sm px-12 py-11">
        {/* Category */}
        <div className="mb-6">
          <h4 className="text-[20px] font-medium text-[#252525]">{category}</h4>
          {categoryDescription && (
            <p className="mt-2 text-[14px] font-light leading-[21.66px] text-[#252525] whitespace-pre-line">
              {categoryDescription}
            </p>
          )}
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <h5 className="mb-4 text-[20px] font-medium text-[#252525]">Ergebnisse</h5>
          
          {/* Achievements List */}
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#ec6036] from-[14%] to-[#f1983f] to-[100%]">
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
                <p className="text-[14px] font-light leading-[21.66px] text-[#252525]">
                  {achievement.split('€')[0]}
                  {achievement.includes('€') && (
                    <>
                      <span className="font-bold">€</span>
                      {achievement.split('€')[1]}
                    </>
                  )}
                  {!achievement.includes('€') && achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {testimonial && (
          <div className="mt-auto rounded-[16px] border border-white bg-gradient-to-b from-[rgba(233,232,248,0.6)] from-[66.461%] to-[rgba(255,255,255,0.6)] to-[33.409%] p-6">
            <div className="flex items-start gap-4">
              <div className="relative h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-full border-[0.5px] border-[rgba(255,255,255,0.9)]">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-light leading-[21.66px] text-[#404040]">
                  <span className="font-semibold">{testimonial.author}</span>
                  <br />
                  {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats - if provided */}
        {stats && stats.length > 0 && (
          <div className="mt-6 flex gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-[12px] text-[#8c8c8c]">{stat.label}</div>
                <div className="mt-1 text-[24px] font-bold text-[#252525]">{stat.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

