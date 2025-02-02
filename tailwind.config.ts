import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          50: "#e7e7e7",
          100: "#b3b3b3",
          200: "#8e8e8e",
          300: "#5b5b5b",
          400: "#3b3b3b",
          500: "#0a0a0a",
          600: "#090909",
          700: "#070707",
          800: "#060606",
          900: "#040404",
        },
        blue: {
          50: "#eaf0f9",
          100: "#bfd0eb",
          200: "#a0b9e1",
          300: "#7498d3",
          400: "#5985cb",
          500: "#3066be",
          600: "#2c5dad",
          700: "#224887",
          800: "#1a3869",
          900: "#142b50",
        },
        lightGray: {
          50: "#fefefe",
          100: "#fbfbfb",
          200: "#f9f9f9",
          300: "#f6f6f6",
          400: "#f5f5f5",
          500: "#f2f2f2",
          600: "#dcdcdc",
          700: "#acacac",
          800: "#858585",
          900: "#666666",
        },
      },
      fontFamily: {
        aspekta: ["Aspekta", "sans-serif"],
      },
      fontSize: {
        h1: "61px",
        h2: "49px",
        h3: "39px",
        h4: "31px",
        h5: "25px",
        h6: "20px",
        bodyLarge: "16px",
        bodyMedium: "13px",
        bodySmall: "10px",
      },
      fontWeight: {
        regular: "400",
        medium: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;
