/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        parchment: {
          50: "#FBF6E8",
          100: "#F5ECD7",
          200: "#EADDB8",
          300: "#D9C68E",
          400: "#C4A865",
        },
        ochre: {
          400: "#A67B42",
          500: "#8B5A2B",
          600: "#724A22",
          700: "#5A3B1B",
          800: "#432C14",
        },
        teabrown: {
          500: "#3E2723",
          600: "#2E1D1A",
          700: "#1F1412",
        },
        sutra: {
          blue: "#1565C0",
          green: "#2E7D32",
          gold: "#F9A825",
          red: "#C62828",
          white: "#FAFAFA",
        },
      },
      fontFamily: {
        serif: [
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          '"Songti SC"',
          '"SimSun"',
          "serif",
        ],
        display: [
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          '"Songti SC"',
          "serif",
        ],
      },
      backgroundImage: {
        "parchment-texture":
          "radial-gradient(ellipse at 20% 30%, rgba(139,90,43,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(62,39,35,0.06) 0%, transparent 50%)",
        "grain-overlay":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        vintage:
          "0 1px 1px rgba(62,39,35,0.08), 0 2px 4px rgba(62,39,35,0.06), 0 8px 24px rgba(62,39,35,0.08)",
        photo:
          "0 2px 2px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.15)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        "fade-in-left": "fadeInLeft 0.8s ease-out both",
        "fade-in-right": "fadeInRight 0.8s ease-out both",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.24, 0, 0.38, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "80%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--rot, 0deg))" },
          "50%": { transform: "translateY(-12px) rotate(var(--rot, 0deg))" },
        },
      },
    },
  },
  plugins: [],
};
