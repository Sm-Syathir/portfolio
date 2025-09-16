import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",   // nama repo kamu
  assetPrefix: "/portfolio/",
};

export default nextConfig;
