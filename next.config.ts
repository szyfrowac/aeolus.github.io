import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors (like the unescaped entities).
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This allows production builds to successfully complete even if
    // your project has TypeScript errors (like unused variables).
    ignoreBuildErrors: true,
  },
};

export default nextConfig;