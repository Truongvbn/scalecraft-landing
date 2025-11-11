"use client";

import { useEffect, useState } from "react";

export default function RotationPrompt() {
  const [promptType, setPromptType] = useState<'none' | 'portrait' | 'landscape'>('none');

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPortrait = height > width;
      
      // Use the smaller dimension to determine device type (so rotation doesn't change device type)
      const minDimension = Math.min(width, height);
      const isMobile = minDimension < 640; // < sm breakpoint
      const isTablet = minDimension >= 640 && minDimension < 1024; // sm to lg breakpoint

      // On mobile: show prompt if landscape, ask to rotate to portrait
      if (isMobile && !isPortrait) {
        setPromptType('portrait');
      }
      // On tablet: show prompt if portrait, ask to rotate to landscape
      else if (isTablet && isPortrait) {
        setPromptType('landscape');
      }
      // Otherwise, don't show any prompt
      else {
        setPromptType('none');
      }
    };

    // Check on mount
    checkOrientation();

    // Listen for resize and orientation changes
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (promptType === 'none') return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#252525]/95 backdrop-blur-md">
      <div className="relative mx-6 max-w-md overflow-hidden rounded-[20px] border-2 border-white/20 p-8 text-center"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)',
          boxShadow: 'inset 0px 1.625px 6.5px 0px rgba(255,255,255,0.3)'
        }}
      >
        {/* Background Gradient Blurs */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ec6036]/30 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#f1983f]/30 opacity-60 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Rotation Icon with Animation */}
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#ec6036] to-[#f1983f] shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-10 w-10 animate-pulse ${promptType === 'portrait' ? 'rotate-90' : ''}`}
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </div>
            {/* Rotating Circle Animation */}
            <div className="absolute -right-1 -top-1 h-6 w-6">
              <div className="h-full w-full animate-spin rounded-full border-2 border-white/40 border-t-white" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              Für das beste Erlebnis
            </h2>
            <p className="text-base font-normal leading-relaxed text-white/90">
              Bitte drehen Sie Ihr Gerät ins{" "}
              <span className="bg-gradient-to-r from-[#ec6036] to-[#f1983f] bg-clip-text font-semibold text-transparent">
                {promptType === 'landscape' ? 'Querformat' : 'Hochformat'}
              </span>
            </p>
          </div>

          {/* Arrow Indicator */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 animate-bounce opacity-70"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
            <div className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
