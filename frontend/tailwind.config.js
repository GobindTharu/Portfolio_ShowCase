/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
        },
        secondary: {
          DEFAULT: "#10b981",
          dark: "#059669",
        },
        background: {
          DEFAULT: "#ffffff",
          dark: "#0f172a",
          light: "#f8fafc",
          "light-dark": "#1e293b",
        },
        text: {
          DEFAULT: "#0f172a",
          dark: "#f8fafc",
          "dark-secondary": "#cbd5e1",
          "light-secondary": "#475569",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
