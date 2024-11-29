/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        hover: "rgb(25, 40, 70)",
        navbar_bg: "var(--navbar_bg)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
