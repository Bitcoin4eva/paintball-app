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
        // Washed charcoal base — not pure black, keeps the "distressed" feel
        ink: {
          950: "#0B0B0C",
          900: "#111113",
          850: "#161619",
          800: "#1C1C20",
          750: "#232328",
          700: "#2B2B31",
          600: "#3A3A42",
        },
        // Desert-bone text
        bone: {
          DEFAULT: "#ECE7DB",
          muted: "#9A958A",
          dim: "#6E6A61",
        },
        // Desert tan — structural accent / brand
        tan: {
          DEFAULT: "#C79A54",
          bright: "#DCB667",
          deep: "#9C7838",
        },
        // Intensity signals (required: green / yellow / red)
        signal: {
          green: "#4FA65E",
          "green-soft": "#2E5F38",
          yellow: "#E8B23A",
          "yellow-soft": "#6A5220",
          red: "#DB3540",
          "red-soft": "#63232A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Oswald", "sans-serif"],
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        stencil: "0.14em",
        widelabel: "0.22em",
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 30px -18px rgba(0,0,0,0.8)",
        glow: "0 0 0 1px rgba(199,154,84,0.25), 0 0 24px -6px rgba(199,154,84,0.35)",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "flash-in": {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "tick-pop": {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 1.4s ease-in-out infinite",
        "flash-in": "flash-in 0.28s ease-out",
        "tick-pop": "tick-pop 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
