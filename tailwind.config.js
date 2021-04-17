const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#05678B",
        dark: "#04162C",
        light: "#329BA9",
        danger: "#F2622D",
        warning: "#F9F4D4",
      },
      inset: {
        "-16": "-4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
