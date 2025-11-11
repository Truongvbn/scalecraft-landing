import Image from "next/image";

const imgImage4 = "/assets/images/hero/image 4.png";
const imgImage5 = "/assets/images/hero/image 5.png";
const imgImage6 = "/assets/images/hero/Frame 1707480419.png";
const imgImage7 = "/assets/images/hero/image 7.png";
const imgImage11 = "/assets/images/hero/image 11.png";
const imgImage13 = "/assets/images/hero/image 13.png";
const imgImage14 = "/assets/images/hero/image 14.png";

export default function LogoMarquee() {
  return (
    <>
      {/* Logo Marquee - Tablet & Desktop */}
      <div className="h-[78px] w-[1104px] overflow-hidden">
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
    </>
  );
}
