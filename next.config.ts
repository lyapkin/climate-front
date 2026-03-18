import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  cacheComponents: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "klimov-climat.ru",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "klimov-climat.ru",
        pathname: "/media/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
