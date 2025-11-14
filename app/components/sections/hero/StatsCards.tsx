import Image from "next/image";

const imgIcon = "/assets/images/hero/hero-icon.svg";

export default function StatsCards() {
  return (
    <div 
      className="flex flex-col items-start gap-[24px] sm:flex-row sm:items-center sm:gap-6"
    >
      <div className="flex items-center gap-[8px] sm:gap-[11px]">
        <div className="relative h-[20px] w-[20px] flex-shrink-0 sm:h-[30px] sm:w-[30px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[20px] text-[#404040] whitespace-nowrap sm:leading-[24px]">
          <span className="text-[14px] font-bold sm:text-[20px] sm:font-semibold">x2</span>
          <span className="text-[14px] font-normal sm:text-[18px]"> schneller (Laut Umfrage)</span>
        </div>
      </div>

      <div className="flex items-center gap-[8px] sm:gap-[11px]">
        <div className="relative h-[20px] w-[20px] flex-shrink-0 sm:h-[30px] sm:w-[30px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[20px] text-[#404040] whitespace-nowrap sm:leading-[24px]">
          <span className="text-[14px] font-bold sm:text-[20px] sm:font-semibold">x2</span>
          <span className="text-[14px] font-normal sm:text-[18px]"> effizienter</span>
        </div>
      </div>

      <div className="flex items-center gap-[8px] sm:gap-[11px]">
        <div className="relative h-[20px] w-[20px] flex-shrink-0 sm:h-[30px] sm:w-[30px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[20px] text-[#404040] whitespace-nowrap sm:leading-[24px]">
          <span className="text-[14px] sm:text-[18px]">Umsatzsteigerung & Kostenreduktion</span>
        </div>
      </div>
    </div>
  );
}
