import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#111111",
          pure: "#0B0B0C",
          surface: "#18181B",
          card: "#141416",
        },
        cream: {
          DEFAULT: "#F5F3EF",
          muted: "rgba(245, 243, 239, 0.65)",
          subtle: "rgba(245, 243, 239, 0.35)",
        },
        rose: {
          DEFAULT: "#E0284F",
          glow: "rgba(224, 40, 79, 0.35)",
          subtle: "rgba(224, 40, 79, 0.15)",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.16)",
          highlight: "rgba(255, 255, 255, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        tighter: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
