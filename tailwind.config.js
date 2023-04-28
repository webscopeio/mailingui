/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-basier-circle)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "pink-to-purple-gradient":
          "linear-gradient(85.07deg, #C81679 0%, #7D4BF9 100%);",
      },
      colors: {
        dark: {
          100: "#5C5C5C",
          200: "#525252",
          300: "#474747",
          400: "#474747",
          600: "#292929",
          700: "#1F1F1F",
          800: "#141414",
          900: "#171717",
          950: "#101010",
        },
        pink: {
          text: "#C71679",
          background: "#1E0312",
        },
      },
    },
  },
  plugins: [],
};
