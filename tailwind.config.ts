import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1F3D",
          50: "#EEF2F7",
          100: "#D6E0EC",
          200: "#AEC2DA",
          300: "#7F9BBC",
          400: "#4E6F97",
          500: "#2C4A73",
          600: "#173257",
          700: "#0F2647",
          800: "#0A1F3D",
          900: "#071730",
          950: "#040D1D",
        },
        emerald: {
          DEFAULT: "#0E6B4F",
          50: "#E8F5F0",
          100: "#CBEADC",
          200: "#98D5BA",
          300: "#5FBB97",
          400: "#2F9C79",
          500: "#0E6B4F",
          600: "#0C5C44",
          700: "#0A4B38",
          800: "#083A2B",
          900: "#052A1F",
        },
        gold: {
          DEFAULT: "#B8933E",
          50: "#FAF4E7",
          100: "#F1E1BC",
          200: "#E3C888",
          300: "#D2AC5C",
          400: "#B8933E",
          500: "#997A33",
          600: "#7A6129",
        },
        ink: "#1E2A38",
        muted: "#5B6B7A",
        surface: "#F7F9FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "dash-flow": {
          to: { strokeDashoffset: "-200" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "dash-flow": "dash-flow 6s linear infinite",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
