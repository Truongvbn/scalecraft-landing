import Image from "next/image";

const imgImage25 = "/assets/images/hero/hero-image25.png";
const imgImage27 = "/assets/images/hero/hero-image27.png";
const imgImage24 = "/assets/images/hero/hero-image24.png";
const imgImage28 = "/assets/images/hero/hero-image28.png";
const imgImage291 = "/assets/images/hero/hero-image291.png";
const imgImage9 = "/assets/images/hero/image 10.png";
const imgGroup13681 = "/assets/images/hero/hero-group13681.svg";

export default function RatingBadge() {
  return (
    <div 
      className="h-[60px] w-auto inline-flex items-center gap-3 px-4 rounded-full border border-[rgba(255,255,255,0.6)] backdrop-blur-sm max-sm:h-[38px] max-sm:gap-2 max-sm:px-3 transition-transform duration-300 hover:scale-150 cursor-pointer"
      style={{
        backgroundImage: 'linear-gradient(172.699deg, rgba(255, 249, 238, 0.1) 0.122%, rgba(255, 232, 239, 0.1) 99.544%), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)',
        boxShadow: 'inset 0px 1px 4px 0px rgba(255,255,255,0.4)'
      }}
    >
      {/* Avatars */}
      <div className="flex items-center">
        <div className="relative -mr-[8px] h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:-mr-[6px] max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage25} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:-mr-[6px] max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage27} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:-mr-[6px] max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage24} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:-mr-[6px] max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage28} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
        <div className="relative -mr-[8px] h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:-mr-[6px] max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage291} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
        <div className="relative h-[34px] w-[34px] overflow-hidden rounded-full border border-white max-sm:h-[24px] max-sm:w-[24px]">
          <Image src={imgImage9} alt="" fill className="rounded-full object-cover" sizes="34px" loading="lazy" />
        </div>
      </div>

      {/* Rating Text */}
      <div className="flex flex-col">
        <p className="text-[13px] font-semibold text-[#252432] whitespace-nowrap max-sm:text-[9px]">
          <span>4.8 </span>
          <span className="font-normal text-[#8987a1]">Sterne aus</span>
          <span> 35+ </span>
          <span className="font-normal text-[#8987a1]">Kundenerfahrungen</span>
        </p>
        
        {/* Stars */}
        <div className="relative h-[8px] w-[50px] mt-1 max-sm:h-[5px] max-sm:w-[32px]">
          <Image src={imgGroup13681} alt="" fill className="object-contain" sizes="50px" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
