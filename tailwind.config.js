const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [join(__dirname, "./projects/**/!(*.spec).{ts,html}")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e1e1e1",
          400: "#cfcfcf",
          500: "#b1b1b1",
          600: "#9e9e9e",
          700: "#7e7e7e",
          800: "#4d4d4d",
          900: "#2a2a2a",
          1000: "#0f0f0f",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", visibility: "hidden", transform: "translateY(-10px)" },
          "100%": { opacity: "1", visibility: "visible", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "1", visibility: "visible", transform: "translateY(0)" },
          "100%": { opacity: "0", visibility: "hidden", transform: "translateY(-10px)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideUp: "slideUp 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
};
