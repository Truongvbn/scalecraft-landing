import Image from "next/image";

const imgIcon = "/assets/images/hero/hero-icon.svg";

export default function StatsCards() {
  return (
    <div 
      className="flex items-center gap-6 flex-row max-md:items-start max-md:gap-[24px] max-md:flex-col"
    >
      <div className="flex items-center gap-[11px] max-md:gap-[8px]">
        <div className="relative h-[30px] w-[30px] flex-shrink-0 max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[24px] text-[#404040] whitespace-nowrap max-md:leading-[20px]">
          <span className="text-[20px] font-semibold max-md:text-[14px] max-md:font-bold">x2</span>
          <span className="text-[18px] font-normal max-md:text-[14px]"> schneller (Laut Umfrage)</span>
        </div>
      </div>

      <div className="flex items-center gap-[11px] max-md:gap-[8px]">
        <div className="relative h-[30px] w-[30px] flex-shrink-0 max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[24px] text-[#404040] whitespace-nowrap max-md:leading-[20px]">
          <span className="text-[20px] font-semibold max-md:text-[14px] max-md:font-bold">x2</span>
          <span className="text-[18px] font-normal max-md:text-[14px]"> effizienter</span>
        </div>
      </div>

      <div className="flex items-center gap-[11px] max-md:gap-[8px]">
        <div className="relative h-[30px] w-[30px] flex-shrink-0 max-md:h-[20px] max-md:w-[20px]">
          <Image src={imgIcon} alt="" fill className="object-contain" sizes="30px" loading="lazy" />
        </div>
        <div className="font-normal leading-[24px] text-[#404040] whitespace-nowrap max-md:leading-[20px]">
          <span className="text-[18px] max-md:text-[14px]">Umsatzsteigerung & Kostenreduktion</span>
        </div>
      </div>
    </div>
  );
}
