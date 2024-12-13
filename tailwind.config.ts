import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "Manrope", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        thDarkBlue: "#013550",
        thLightBlue: "#00b6c6",
        thRed: "#DC3332",
        white: "#f9fafb",
        black: "#030712",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "3xl": "0 20px 50px rgba(0, 0, 0, 0.5)", // Custom shadow
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
