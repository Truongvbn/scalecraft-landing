import Image from "next/image";

const imgFrame2 = "/assets/images/hero/hero-frame2.svg";
const imgTexture = "/assets/images/hero/hero-texture.svg";
const imgGroup = "/assets/images/hero/hero-group.svg";
const imgGroup1 = "/assets/images/hero/hero-group1.svg";

export default function HeroBackground() {
  return (
    <>
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 overflow-hidden">
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
    </>
  );
}
