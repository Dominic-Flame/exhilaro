import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let Next optimize images from Unsplash and Pexels
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
