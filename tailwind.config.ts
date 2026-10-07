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
        brand: {
          black: "#11100E",
          dark: "#1A1815",
          cream: "#F6F1E8",
          "cream-light": "#FCF9F3",
          "cream-dark": "#E7DFCE",
          red: "#D94528",
          "red-dark": "#B83219",
          yellow: "#F5BA27",
          "yellow-light": "#FDE68A",
          green: "#324E39",
          "green-light": "#466E50",
          blue: "#214CE5",
          olive: "#484E33",
          muted: "#7B7468",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0px #11100E",
        "brutal-sm": "2px 2px 0px #11100E",
        "brutal-lg": "6px 6px 0px #11100E",
        "brutal-xl": "8px 8px 0px #11100E",
        "brutal-red": "4px 4px 0px #D94528",
        "brutal-yellow": "4px 4px 0px #F5BA27",
        "brutal-white": "4px 4px 0px #FCF9F3",
      },
      animation: {
        "marquee-slow": "marquee 28s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
        "marquee-reverse": "marquee-rev 24s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
