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
  
  // Mobile: no arrow, just rectangle
  const mobileCardWidth = 384;
  const mobileCardHeight = 240;
  
  // Calculate aspect ratio for responsive scaling
  const aspectRatio = cardWidth / cardHeight; // ~1.79
  
  return (
    <div 
      className="relative w-full max-w-[384px] md:max-w-none" 
      style={{ 
        minHeight: '220px',
        aspectRatio: `${aspectRatio}`
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .glass-card-${cardId} {
              width: ${cardWidth}px !important;
              height: ${cardHeight}px !important;
            }
          }
        `
      }} />
      <div className={`glass-card-${cardId} relative h-full w-full`}>
      {/* Mobile SVG - no arrow */}
      <svg 
        className="absolute inset-0 h-full w-full md:hidden" 
        viewBox={`0 0 ${mobileCardWidth} ${mobileCardHeight}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="none"
      >
        <defs>
          <filter 
            id={`filter_mobile_${cardId}`} 
            x="-9.75" 
            y="-9.75" 
            width="403.5" 
            height="259.5" 
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
          <linearGradient id={`gradient_mobile_${cardId}`} x1="0" y1="0" x2="384" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
        </defs>
        <g filter={`url(#filter_mobile_${cardId})`} style={{ backdropFilter: 'blur(4.88px)' }}>
          {/* Simple rectangle - no arrow */}
          <path 
            d="M368 0C376.837 0 384 7.16344 384 16V224C384 232.837 376.837 240 368 240H16C7.16344 240 0 232.837 0 224V16C0 7.16344 7.16344 0 16 0H368Z"
            fill="white" 
            fillOpacity="0.15"
          />
          <path 
            d="M368 0C376.837 0 384 7.16344 384 16V224C384 232.837 376.837 240 368 240H16C7.16344 240 0 232.837 0 224V16C0 7.16344 7.16344 0 16 0H368Z"
            fill={`url(#gradient_mobile_${cardId})`}
            fillOpacity="0.1"
          />
        </g>
      </svg>
      
      {/* Tablet/Desktop SVG - with arrow */}
      <svg 
        className="absolute inset-0 h-full w-full hidden md:block" 
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
      <div className="relative p-6 md:p-8">
        {children}
      </div>
      </div>
    </div>
  );
}
