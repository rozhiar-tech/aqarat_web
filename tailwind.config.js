/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      newBlack: "#011f13",
      gold: "#ffda96",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      robotoCondensed: ["Roboto Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
