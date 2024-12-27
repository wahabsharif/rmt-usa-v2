import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig: NextConfig = {
  // Enables React strict mode for better development warnings
  reactStrictMode: true,

  // Optionally adds a trailing slash to URLs
  trailingSlash: true,

  // i18n configuration
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      // Customize Terser minification
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console statements in production
            },
            mangle: true, // Mangle variable and function names
          },
        }),
      ];
    }
    return config;
  },
};

export default nextConfig;
