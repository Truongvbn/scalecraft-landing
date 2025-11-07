"use client";

import { useTransform, useScroll, MotionValue } from "framer-motion";
import { useRef, useMemo } from "react";

/**
 * useParallax hook for smooth parallax scroll effects
 * @param speed - Parallax speed multiplier (0.3 = slow, 1.0 = normal, 2.0 = fast)
 * @param offset - Starting offset for parallax (default: 0)
 * @returns MotionValue for y-axis transform
 */
export function useParallax(speed: number = 0.5, offset: number = 0): MotionValue<number> {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [offset, offset + (-1000 * speed)]);
  return y;
}

/**
 * useParallaxElement - Parallax for specific element
 * @param speed - Parallax speed multiplier
 * @returns ref and y motion value
 */
export function useParallaxElement(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  
  return { ref, y };
}

/**
 * useParallaxMultiLayer - Multi-layer parallax effect
 * @param layers - Array of speed multipliers for each layer
 * @returns Array of y motion values
 */
export function useParallaxMultiLayer(layers: number[]): MotionValue<number>[] {
  const { scrollY } = useScroll();
  
  return useMemo(() => {
    return layers.map(speed => 
      useTransform(scrollY, [0, 1000], [0, -1000 * speed])
    );
  }, [scrollY, layers]);
}
