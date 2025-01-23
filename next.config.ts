import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  // i18n configuration
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  // Image domains configuration
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "www.rmt-usa.com",
      },
      {
        protocol: "http",
        hostname: "rmt-usa.com",
      },
      {
        protocol: "https",
        hostname: "admin.rmt-usa.com",
      },
      {
        protocol: "http",
        hostname: "admin.rmt-usa.com",
      },
    ],
  },
};

export default nextConfig;
