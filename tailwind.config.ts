import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   mobile: { max: "639px" },
    //   tablet: { min: "640px", max: "1023px" },
    //   desktop: { min: "1024px", max: "1439px" },
    //   wide: { min: "1440px" },
    // },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        black: {
          "50": "#e7e7e7",
          "100": "#b3b3b3",
          "200": "#8e8e8e",
          "300": "#5b5b5b",
          "400": "#3b3b3b",
          "500": "#0a0a0a",
          "600": "#090909",
          "700": "#070707",
          "800": "#060606",
          "900": "#040404",
        },
        blue: {
          "50": "#e6ebff",
          "100": "#b0c2fe",
          "200": "#a0b9e1",
          "300": "#547bfd",
          "400": "#3361fd",
          "500": "#003afc",
          "600": "#0035e5",
          "700": "#0029b3",
          "800": "#00208b",
          "900": "#00186a",
        },
        lightGray: {
          "50": "#fefefe",
          "100": "#fbfbfb",
          "200": "#f9f9f9",
          "300": "#f7f7f7",
          "400": "#f5f5f5",
          "500": "#f3f3f3",
          "600": "#dddddd",
          "700": "#adadad",
          "800": "#868686",
          "900": "#666666",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
