import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables React strict mode for better development warnings
  reactStrictMode: true,

  // i18n configuration
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
};

export default nextConfig;
