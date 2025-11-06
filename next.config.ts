import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/app/components"),
      "@data": path.resolve(__dirname, "src/app/data"),
      "@hooks": path.resolve(__dirname, "src/app/hooks"),
      "@lib": path.resolve(__dirname, "src/app/lib")
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
