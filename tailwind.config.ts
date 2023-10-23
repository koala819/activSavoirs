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
        "navbar-bg": "#F0F0F0",
        "dark-navbar-bg": "#1f2937",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
