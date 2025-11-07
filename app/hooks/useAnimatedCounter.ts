"use client";

import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseAnimatedCounterOptions {
  target: number;
  duration?: number; // milliseconds
  delay?: number; // milliseconds
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * useAnimatedCounter - Animate numbers counting up
 * @param options - Counter configuration
 * @returns Formatted counter value
 */
export function useAnimatedCounter({
  target,
  duration = 2000,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = ""
}: UseAnimatedCounterOptions): string {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now < startTime) return;
      
      if (now >= endTime) {
        setCount(target);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Smooth easing
      const currentCount = target * easeOutQuart;
      
      setCount(currentCount);
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [isInView, target, duration, delay]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return `${prefix}${formattedCount}${suffix}`;
}

/**
 * Simple counter hook without formatting
 */
export function useCounter(target: number, duration: number = 2000): number {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      
      if (now >= endTime) {
        setCount(target);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(target * easeOutQuart);
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}
