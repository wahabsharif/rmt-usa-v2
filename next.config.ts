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
    domains: [
      "localhost",
      "admin.rmt-usa.com",
      "https://admin.rmt-usa.com/",
      "https://admin.rmt-usa.com",
      "http://admin.rmt-usa.com/",
      "http://admin.rmt-usa.com",
    ],
  },
};

export default nextConfig;
