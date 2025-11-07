import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  pointRight?: boolean;
  height?: 'small' | 'large';
}

export default function GlassCard({ children, pointRight = false, height = 'large' }: GlassCardProps) {
  const cardId = React.useId();
  const cardHeight = height === 'small' ? 256 : 278;
  const cardWidth = height === 'small' ? 474 : 497;
  
  // Mobile dimensions from Figma: 384px x 240px (w-96 h-60)
  const mobileHeight = 240;
  
  return (
    <div 
      className="relative w-full max-w-[384px] lg:max-w-none" 
      style={{ 
        height: `${mobileHeight}px`
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 1024px) {
            .glass-card-${cardId} {
              width: ${cardWidth}px !important;
              height: ${cardHeight}px !important;
              max-width: none !important;
            }
          }
        `
      }} />
      <div className={`glass-card-${cardId} relative h-full w-full`}>
      <svg 
        className="absolute inset-0 h-full w-full" 
        viewBox={`0 0 ${cardWidth} ${cardHeight}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <defs>
          <filter 
            id={`filter_${cardId}`} 
            x="-9.75" 
            y="-9.75" 
            width="516.5" 
            height="297.5" 
            filterUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1.625"/>
            <feGaussianBlur stdDeviation="3.25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
          </filter>
          <clipPath id={`bgblur_${cardId}_clip`}>
            <path 
              transform="translate(9.75 9.75)" 
              d={pointRight 
                ? "M39 0C30.163 0 23 7.16345 23 16V73.9092L0 85.5381L23 97.166V262C23 270.837 30.163 278 39 278H481C489.837 278 497 270.837 497 262V16C497 7.16344 489.837 0 481 0H39Z"
                : "M458 0C466.837 0 474 7.16345 474 16V73.9092L497 85.5381L474 97.166V262C474 270.837 466.837 278 458 278H16C7.16345 278 0 270.837 0 262V16C0 7.16344 7.16344 0 16 0H458Z"
              }
            />
          </clipPath>
          <linearGradient id={`gradient_${cardId}`} x1="0" y1="0" x2="407.154" y2="372.264" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
        </defs>
        
        <g filter={`url(#filter_${cardId})`} style={{ backdropFilter: 'blur(4.88px)' }}>
          <path 
            d={pointRight 
              ? height === 'small'
                ? "M39 0C30.163 0 23 7.16345 23 16V73.9092L0 85.5381L23 97.166V240C23 248.837 30.163 256 39 256H435C443.837 256 451 248.837 451 240V16C451 7.16344 443.837 0 435 0H39Z"
                : "M39 0C30.163 0 23 7.16345 23 16V73.9092L0 85.5381L23 97.166V262C23 270.837 30.163 278 39 278H481C489.837 278 497 270.837 497 262V16C497 7.16344 489.837 0 481 0H39Z"
              : height === 'small'
                ? "M435 0C443.837 0 451 7.16345 451 16V73.9092L474 85.5381L451 97.166V240C451 248.837 443.837 256 435 256H16C7.16345 256 0 248.837 0 240V16C0 7.16344 7.16344 0 16 0H435Z"
                : "M458 0C466.837 0 474 7.16345 474 16V73.9092L497 85.5381L474 97.166V262C474 270.837 466.837 278 458 278H16C7.16345 278 0 270.837 0 262V16C0 7.16344 7.16344 0 16 0H458Z"
            }
            fill="white" 
            fillOpacity="0.15"
          />
          <path 
            d={pointRight 
              ? height === 'small'
                ? "M39 0C30.163 0 23 7.16345 23 16V73.9092L0 85.5381L23 97.166V240C23 248.837 30.163 256 39 256H435C443.837 256 451 248.837 451 240V16C451 7.16344 443.837 0 435 0H39Z"
                : "M39 0C30.163 0 23 7.16345 23 16V73.9092L0 85.5381L23 97.166V262C23 270.837 30.163 278 39 278H481C489.837 278 497 270.837 497 262V16C497 7.16344 489.837 0 481 0H39Z"
              : height === 'small'
                ? "M435 0C443.837 0 451 7.16345 451 16V73.9092L474 85.5381L451 97.166V240C451 248.837 443.837 256 435 256H16C7.16345 256 0 248.837 0 240V16C0 7.16344 7.16344 0 16 0H435Z"
                : "M458 0C466.837 0 474 7.16345 474 16V73.9092L497 85.5381L474 97.166V262C474 270.837 466.837 278 458 278H16C7.16345 278 0 270.837 0 262V16C0 7.16344 7.16344 0 16 0H458Z"
            }
            fill={`url(#gradient_${cardId})`}
            fillOpacity="0.1"
          />
        </g>
      </svg>
      <div className="relative p-8">
        {children}
      </div>
      </div>
    </div>
  );
}
