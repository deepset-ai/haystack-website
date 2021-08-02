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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
