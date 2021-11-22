module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
          "vm-main": "#1F1C2A"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
