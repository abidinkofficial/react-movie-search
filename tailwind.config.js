module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '102': '1.02',
        '103': '1.03'
      }
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'Sans-Serif']
    }
  },
  variants: {
    extend: {
      scale: ['group-hover']
    },
  },
  plugins: [],
}
