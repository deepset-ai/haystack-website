const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "off-white": "#FEFEFD",
        "light-grey-BG": "#F3F3F7",
        "dark-blue": "#2B2F55",
        "dark-grey": "#9090B2",
        "medium-grey": "#A0A0C0",
        "light-grey": "#D8D8E5",
        "blue-light-theme": "#188BF5",
        "yellow-light-theme": "#FFC55C",
        "green-light-theme": "#03AF9D",
        "red-light-theme": "#D45549",
        "blue-dark-theme": "#48A7FF",
        "yellow-dark-theme": "#FFD78F",
        "green-dark-theme": "#06C2A0",
        "red-dark-theme": "#ED6A5E",
      },
      fontFamily: {
        sans: ["Greycliff CF", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
