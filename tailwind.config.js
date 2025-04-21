/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        primary: {
          DEFAULT: "var(--primary)",
          30: "var(--primary-30)",
          60: "var(--primary-60)",
          70: "var(--primary-70)",
        },
        secondary: "var(--secondary)",
        background: {
          DEFAULT: "var(--background)",
          80: "var(--background-80)",
        },
        foreground: "var(--foreground)",
        decoration: {
          DEFAULT: "var(--decoration)",
          muted: "var(--decoration-muted)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          80: "var(--muted-80)",
        },
        border: {
          DEFAULT: "var(--border)",
          foreground: "var(--border-foreground)",
        },

        gray: {
          300: "#525252",
          600: "#313134",
          900: "#202023",
        },
        white: {
          100: "#FFFFFF",
          200: "#F0E7DB",
          300: "#CFCFCF",
        },

        teal: {
          200: "#81e6d9",
          400: "#38B2AC",
          600: "#2c7a7b",
        },

        pink: {
          600: "#ff63c3",
        },

        yellow: {
          300: "#ffd379",
          500: "#ff985e",
        },
      },

      screens: {
        xs: "330px",
      },

      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', "sans-serif"],
        serif: ["-apple-system", "sans-serif"],
      },

      animation: {
        ButtonThemeFall: "ButtonThemeFall 0.3s ease-in-out",
        ButtonThemeFall2: "ButtonThemeFall2 0.3s ease-in-out",
        ToggleMenu: "ToggleMenu 0.3s ease-in-out",
      },

      keyframes: {
        ButtonThemeFall: {
          "0%": { transform: "translateY(-50%)", opacity: "0.1" },
        },
        "100%": {
          transform: "translateY(0deg)",
          opacity: "1",
        },

        ButtonThemeFall2: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": {
            transform: "translateY(0deg)",
            opacity: "1",
          },
        },

        ToggleMenu: {
          "0%": { opacity: "0.1" },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
