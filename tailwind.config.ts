const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-bg": "#2845AD",
        "black-bg": "#141414",
        "navbar-bg": "#F0F0F0",
        "dark-navbar-bg": "#1f2937",
        "step-one-bg": "#d2e4d6",
        "step-two-bg": "#d1dbe4",
        "step-three-bg": "#ded1e3",
        "step-four-bg": "#e5e4d2",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
