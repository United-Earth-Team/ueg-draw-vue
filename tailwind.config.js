/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./index.html", "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'ueg-gray-1': '#D8D8D8',
        'ueg-gray-2': '#7B7B7B',
        'ueg-gray-3': '#3D3D3D',
        'ueg-blue': '#247F9D'
      },
      fontFamily: {
        'ueg': ['Rajdhani', 'Noto Sans SC', 'ui-sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
}

