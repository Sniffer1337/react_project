/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      yellow: '#FCB72B',
      darkNavy: '#495567',
      dimGrey: '#939CAA',
      lGrey: '#E5ECF4',
      Snow: '#F2F5F9',
      lYellow: '#FFF4DF',
      mwvane: '#1ba80c'
    }
  },
  plugins: []
}
