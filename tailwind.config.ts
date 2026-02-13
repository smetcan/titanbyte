import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: "var(--accent)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
        },
        border: "var(--border)",
        muted: "var(--muted)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--foreground)",
            a: {
              color: "var(--primary)",
              "&:hover": {
                color: "var(--primary-dark)",
              },
            },
            strong: {
              color: "var(--foreground)",
            },
            "ol > li::marker": {
              color: "var(--primary)",
            },
            "ul > li::marker": {
              color: "var(--primary)",
            },
            hr: {
              borderColor: "var(--border)",
            },
            blockquote: {
              color: "var(--muted)",
              borderLeftColor: "var(--primary)",
            },
            h1: {
              color: "var(--foreground)",
            },
            h2: {
              color: "var(--foreground)",
            },
            h3: {
              color: "var(--foreground)",
            },
            h4: {
              color: "var(--foreground)",
            },
            code: {
              color: "var(--foreground)",
            },
            pre: {
              color: "var(--foreground)",
              backgroundColor: "var(--surface)",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
