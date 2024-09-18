/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lignecolor: 'rgb(183, 153, 80)',
      },
    },
  },
  plugins: [],
}
