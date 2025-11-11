import Image from "next/image";

const imgImage25 = "/assets/images/hero/hero-image25.png";
const imgImage27 = "/assets/images/hero/hero-image27.png";
const imgImage24 = "/assets/images/hero/hero-image24.png";
const imgImage28 = "/assets/images/hero/hero-image28.png";
const imgImage291 = "/assets/images/hero/hero-image291.png";
const imgGroup13681 = "/assets/images/hero/hero-group13681.svg";

export default function RatingBadge() {
  return (
    <div 
      className="h-[50px] w-auto inline-flex items-center gap-3 px-4 rounded-full border border-[rgba(255,255,255,0.6)] backdrop-blur-sm max-md:h-[32px] max-md:gap-2 max-md:px-3"
      style={{
        backgroundImage: 'linear-gradient(172.699deg, rgba(255, 249, 238, 0.1) 0.122%, rgba(255, 232, 239, 0.1) 99.544%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
        boxShadow: 'inset 0px 1px 4px 0px rgba(255,255,255,0.4)'
      }}
    >
      {/* Avatars */}
      <div className="flex items-center">
        <div className="relative -mr-[8px] h-[28px] w-[28px] overflow-hidden rounded-full border border-white max-md:-mr-[6px] max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgImage25} alt="" fill className="rounded-full object-cover" sizes="28px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[28px] w-[28px] overflow-hidden rounded-full border border-white max-md:-mr-[6px] max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgImage27} alt="" fill className="rounded-full object-cover" sizes="28px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[28px] w-[28px] overflow-hidden rounded-full border border-white max-md:-mr-[6px] max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgImage24} alt="" fill className="rounded-full object-cover" sizes="28px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[28px] w-[28px] overflow-hidden rounded-full border border-white max-md:-mr-[6px] max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgImage28} alt="" fill className="rounded-full object-cover" sizes="28px" loading="lazy" />
        </div>
        <div className="relative h-[28px] w-[28px] overflow-hidden rounded-full border border-white max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgImage291} alt="" fill className="rounded-full object-cover" sizes="28px" loading="lazy" />
        </div>
      </div>

      {/* Rating Text */}
      <div className="flex flex-col">
        <p className="text-[13px] font-semibold text-[#252432] whitespace-nowrap max-md:text-[9px]">
          <span>4.8 </span>
          <span className="font-normal text-[#8987a1]">sterne aus</span>
          <span> 35+ </span>
          <span className="font-normal text-[#8987a1]">kundenerfahrungen</span>
        </p>
        
        {/* Stars */}
        <div className="relative h-[8px] w-[50px] mt-1 max-md:h-[5px] max-md:w-[32px]">
          <Image src={imgGroup13681} alt="" fill className="object-contain" sizes="50px" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
