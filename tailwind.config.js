module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '102': '1.02',
        '103': '1.03'
      },
      animation: {
        'card-scale': 'card-scale 0.5s ease',
        'loading-fade': 'loading-fade 0.5s',
        pulsefast: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      },
      keyframes: {
        'card-scale': {
          '0%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' }
        },
        'loading-fade': {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
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
