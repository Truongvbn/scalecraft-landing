import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  
  // Safe experimental features
  experimental: {
    optimizePackageImports: ['framer-motion', 'swiper', '@heroui/react'],
    optimizeCss: true,
    webpackBuildWorker: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    qualities: [75, 80, 85, 90], // Support multiple quality levels
  },
  
  // Turbopack config (Next.js 16+)
  turbopack: {
    // Empty config to acknowledge Turbopack usage
  },
};

export default nextConfig;
