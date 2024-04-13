module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rainforest: {
          light: '#34d399', // Example green color
          DEFAULT: '#059669', // Example green color
          dark: '#065f46' // Example green color
        }
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        start: '#34d399',
        end: '#065f46'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
