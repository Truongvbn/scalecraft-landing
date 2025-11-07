// Next.js Performance Optimization Config

// Image optimization
export const imageConfig = {
  quality: 85, // Balance giữa quality và file size
  formats: ['image/avif', 'image/webp'], // Modern formats
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
};

// Animation optimization
export const animationConfig = {
  // Framer Motion transitions
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
  
  ease: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1], // Custom easing
    duration: 0.5,
  },
  
  // Fast animations cho interactions
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  
  // Smooth scroll animations
  scroll: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  }
};

// Viewport config cho lazy loading
export const viewportConfig = {
  once: true, // Animate chỉ 1 lần
  margin: "-100px", // Trigger trước khi vào viewport
  amount: 0.3, // 30% visible thì trigger
};

// Performance thresholds
export const performanceThresholds = {
  LCP: 2500, // Largest Contentful Paint < 2.5s
  FID: 100,  // First Input Delay < 100ms
  CLS: 0.1,  // Cumulative Layout Shift < 0.1
};

// GPU acceleration classes
export const gpuAcceleration = {
  transform3d: "transform-gpu",
  willChange: "will-change-transform",
  backfaceHidden: "backface-hidden",
};
