/*
 * @Description:
 * @Author: Devin
 * @Date: 2025-07-14 10:23:35
 */
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only use basePath and assetPrefix in production
  ...(isDev
    ? {}
    : {
        basePath: "/react",
        assetPrefix: "/react",
      }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
