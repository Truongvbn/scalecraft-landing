import { ReactNode } from "react";

interface TimelineCardProps {
  year: string;
  title: string | ReactNode;
  fontSize?: string;
}

export default function TimelineCard({ year, title, fontSize = '20px' }: TimelineCardProps) {
  return (
    <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start">
      {/* SVG Background with Glass Effect */}
      <svg className="absolute left-0 top-[30.275px]" width="239" height="209" viewBox="0 0 239 209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={`filter_${year}`} x="-1.65039" y="0" width="241.816" height="208.951" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="4.05"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1.625"/>
            <feGaussianBlur stdDeviation="3.25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
          </filter>
          <linearGradient id={`paint0_${year}`} x1="8.82519" y1="10.4757" x2="253.156" y2="157.67" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id={`paint1_${year}`} x1="91.4831" y1="10.751" x2="158.796" y2="191.473" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.9"/>
            <stop offset="0.286412" stopColor="white" stopOpacity="0"/>
            <stop offset="0.790572" stopColor="white" stopOpacity="0"/>
            <stop offset="1" stopColor="white" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id={`paint2_${year}`} x1="44.9678" y1="43.9388" x2="59.6485" y2="43.9388" gradientUnits="userSpaceOnUse">
            <stop offset="0.14" stopColor="#EC6036"/>
            <stop offset="1" stopColor="#F1983F"/>
          </linearGradient>
        </defs>
        
        <g filter={`url(#filter_${year})`}>
          {/* Base rect with white opacity */}
          <rect x="8.8252" y="10.751" width="220.865" height="188" rx="17.4084" fill="white" fillOpacity="0.3" shapeRendering="crispEdges"/>
          
          {/* Gradient overlay */}
          <rect x="8.8252" y="10.751" width="220.865" height="188" rx="17.4084" fill={`url(#paint0_${year})`} fillOpacity="0.1" shapeRendering="crispEdges"/>
          
          {/* Border stroke */}
          <rect x="8.46252" y="10.3883" width="221.591" height="188.725" rx="17.771" stroke={`url(#paint1_${year})`} strokeWidth="0.725348" shapeRendering="crispEdges"/>
        </g>
        
        {/* Line */}
        <line x1="52.2719" y1="0" x2="52.2719" y2="61" stroke="#8C8C8C" strokeWidth="0.725348"/>
        
        {/* Icon Circle Background */}
        <ellipse cx="52.3095" cy="43.9383" rx="15.4154" ry="15.2322" fill="#D9D9D9"/>
        
        {/* Icon Circle Gradient */}
        <ellipse cx="52.3082" cy="43.939" rx="7.34045" ry="7.25345" fill={`url(#paint2_${year})`}/>
      </svg>

      {/* Card Content */}
      <div className="relative z-10 col-[1] row-[1] mt-[78px] h-[188px] w-[220.865px]">
        <div className="absolute left-[22px] top-[69.75px] flex w-[165px] flex-col gap-[12.331px]">
          <p className="whitespace-pre-wrap text-[#252525]" style={{ fontSize, fontWeight: 500, lineHeight: 1.2 }}>
            {title}
          </p>
        </div>
      </div>
      
      {/* Year */}
      <div className="relative z-10 col-[1] row-[1] ml-[6.85%] mt-0">
        <p className="text-[24px] font-semibold leading-[1.4] text-[#252525]">
          {year}
        </p>
      </div>
    </div>
  );
}
