import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables React strict mode for better development warnings
  reactStrictMode: true,
  trailingSlash: true, // Optionally adds a trailing slash to URLs

  // i18n configuration
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  // Image domains configuration
  images: {
    domains: ["localhost"], // Add your backend domain here
  },
};

export default nextConfig;
