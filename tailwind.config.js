const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "./projects/**/!(*.spec).{ts,html}")],
  theme: {
    extend: {
      colors: {
        mono: {
          100: "#f5f5f5", // Slightly off-white
          200: "#ebebeb", // Very light gray
          300: "#e1e1e1", // Light gray
          400: "#cfcfcf", // Medium light gray
          500: "#b1b1b1", // Neutral gray
          600: "#9e9e9e", // Slightly darker gray
          700: "#7e7e7e", // Dark gray
          800: "#4d4d4d", // Darker gray
          900: "#2a2a2a", // Almost black
          1000: "#0f0f0f", // Very close to pure black
        },
        primary: {
          100: "#f5f3f9", // Very light gray with a hint of purple
          200: "#e3d8f0", // Light grayish purple
          300: "#cbb8e0", // Soft gray-purple
          400: "#b397d1", // Medium light gray-purple
          500: "#9b78c1", // Neutral gray-purple
          600: "#7c5ba6", // Darker gray-purple
          700: "#63458b", // Dark gray-purple
          800: "#4a326f", // Very dark gray-purple
          900: "#2f2150", // Near-black gray-purple
          1000: "#1a1033", // Almost black with a purple tint
        },
      },
    },
  },
  plugins: [],
};
