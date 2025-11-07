// Optimized Framer Motion animations với GPU acceleration

import { Variants, Transition } from "framer-motion";

// Viewport config cho tất cả animations
export const viewport = {
  once: true,
  margin: "-50px", // Trigger sớm hơn một chút
  amount: 0.2, // 20% visible
};

// Fast easing cho smooth animations
const easeOut = [0.22, 1, 0.36, 1] as const;
const easeOutCubic = [0.33, 1, 0.68, 1] as const;
const easeInOutCubic = [0.65, 0, 0.35, 1] as const;
const easeOutQuart = [0.25, 1, 0.5, 1] as const;
const liquidEasing = [0.22, 1, 0.36, 1] as const; // Premium liquid feel
const springEasing = [0.68, -0.55, 0.265, 1.55] as const; // Bouncy spring, 
const spring: Transition = { 
  type: "spring" as const, 
  stiffness: 100, 
  damping: 15 
};

// ============ FADE ANIMATIONS ============
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

// ============ SCALE ANIMATIONS ============
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: easeOut }
  }
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: spring
  }
};

// ============ STAGGER ANIMATIONS ============
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  }
};

// Fast stagger cho nhiều items
export const fastStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// ============ SLIDE ANIMATIONS ============
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: easeOut }
  }
};

// ============ HOVER/TAP ANIMATIONS ============
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const cardHover = {
  y: -8,
  scale: 1.02,
  transition: { duration: 0.3, ease: easeOut }
};

// ============ OPTIMIZED MARQUEE ============
export const marqueeAnimation = {
  x: [0, -1920], // Adjust based on content width
  transition: {
    x: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 25,
      ease: "linear"
    }
  }
};

// ============ ROTATION ANIMATIONS ============
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.7, ease: easeOut }
  }
};

// ============ COMPLEX ANIMATIONS ============
export const heroAnimation: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easeOut,
      staggerChildren: 0.2
    }
  }
};

// Grid layout animations
export const gridContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

export const gridItem: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: easeOut }
  }
};

// ============ ADVANCED PREMIUM ANIMATIONS ============

// Liquid reveal animation (premium feel)
export const liquidReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: liquidEasing
    }
  }
};

// 3D tilt effect variants
export const tiltHover = {
  scale: 1.05,
  rotateX: 5,
  rotateY: 5,
  transition: { duration: 0.3, ease: easeOut }
};

// Card lift on hover
export const cardLift = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  transition: { duration: 0.3, ease: easeOut }
};

// Image zoom on hover
export const imageZoom = {
  scale: 1.1,
  transition: { duration: 0.6, ease: easeOut }
};

// Pulse animation (for timeline dots, badges)
export const pulse: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Icon bounce animation
export const iconBounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 0, -5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Shimmer effect for glass cards
export const shimmer = {
  backgroundPosition: ["200% 0", "-200% 0"],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }
};

// Flip reveal animation
export const flipReveal: Variants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut }
  }
};

// Magnetic button effect (spring physics)
export const magneticSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20
};

// Preview reveal on hover (for case studies)
export const previewHover = {
  scale: 1.02,
  y: -5,
  boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
  transition: { duration: 0.4, ease: easeOut }
};

// Gradient shift animation
export const gradientShift = {
  backgroundPosition: ["0% 50%", "100% 50%"],
  transition: { duration: 0.5, ease: easeOut }
};

// Bento grid staggered reveal
export const bentoStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const bentoItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateZ: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 0.6,
      ease: liquidEasing
    }
  }
};

// ============ HELPER FUNCTIONS ============
export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};

export const getCustomTransition = (duration: number = 0.5, delay: number = 0) => ({
  duration,
  delay,
  ease: easeOut
});
