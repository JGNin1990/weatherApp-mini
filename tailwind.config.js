/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Slab', 'sans-serif'],
        'nor': ['Roboto', 'serif']
      }
    },
  },
  plugins: [],
}
