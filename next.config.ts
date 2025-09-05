import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve hydration by ensuring consistent rendering
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  
  // Configure for better SSR handling
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async headers() {
    return [
      {
        // HTML pages - short cache with revalidation
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Static assets (images, fonts, etc.) - long cache
        source: '/(.*)\\.(jpg|jpeg|png|webp|gif|svg|ico|woff|woff2|ttf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JavaScript and CSS - medium cache with revalidation
        source: '/(.*)\\.(js|css)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // API routes - no cache (if you add any)
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
      {
        // Content files (markdown, etc.) - medium cache
        source: '/(.*)\\.(md|json|txt)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=1800, stale-while-revalidate=3600',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
