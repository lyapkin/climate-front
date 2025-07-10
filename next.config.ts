import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      // {
      //   protocol: "http",
      //   hostname: "stroy-technology.ru",
      //   pathname: "/media/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "stroy-technology.ru",
      //   pathname: "/media/**",
      // },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
