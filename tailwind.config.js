/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inclusive: ['Inclusive Sans'],
        generis: ['Generis Simple W04 Heavy'],
        mono: ['monospace']
      }
    },
  },
  plugins: [],
}

