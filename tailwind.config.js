module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        vmmain: {
          light: '#45DACE',
          default: '#1F1C2A',
          dark: '#405C6E'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
