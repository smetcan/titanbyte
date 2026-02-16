import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class", "light"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          light: 'var(--secondary-light)',
          dark: 'var(--secondary-dark)',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        surface: {
          DEFAULT: 'var(--surface)',
          hover: 'var(--surface-hover)'
        },
        border: 'hsl(var(--border))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
      },
      borderRadius: {
        DEFAULT: '0.375rem', // rounded-md
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-light)'
              }
            },
            strong: {
              color: 'var(--foreground)'
            },
            'ol > li::marker': {
              color: 'var(--primary)'
            },
            'ul > li::marker': {
              color: 'var(--primary)'
            },
            hr: {
              borderColor: 'var(--border)'
            },
            blockquote: {
              color: 'var(--muted)',
              borderLeftColor: 'var(--primary)'
            },
            h1: {
              color: 'var(--foreground)',
              letterSpacing: '-0.025em'
            },
            h2: {
              color: 'var(--foreground)',
              letterSpacing: '-0.02em'
            },
            h3: {
              color: 'var(--foreground)'
            },
            h4: {
              color: 'var(--foreground)'
            },
            code: {
              color: 'var(--foreground)',
              fontFamily: 'JetBrains Mono, monospace'
            },
            pre: {
              color: 'var(--foreground)',
              backgroundColor: 'var(--surface)',
              border: '1px solid hsl(215.4 16.3% 25%)'
            }
          }
        }
      }
    }
  },
  plugins: [typography, require("tailwindcss-animate")],
};
export default config;
