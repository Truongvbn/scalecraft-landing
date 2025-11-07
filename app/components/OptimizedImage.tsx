"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  fadeIn?: boolean;
  priority?: boolean;
}

/**
 * Optimized Image component với:
 * - Progressive loading
 * - Blur placeholder
 * - Fade-in animation
 * - Lazy loading by default
 */
export default function OptimizedImage({ 
  fadeIn = true,
  priority = false,
  className = "",
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={fadeIn ? { opacity: 0 } : false}
      animate={fadeIn ? { opacity: isLoaded ? 1 : 0 } : false}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      <Image
        {...props}
        priority={priority}
        quality={85}
        onLoad={() => setIsLoaded(true)}
        className="transition-transform duration-300"
        style={{
          ...props.style,
          willChange: "transform", // GPU acceleration hint
        }}
      />
    </motion.div>
  );
}
