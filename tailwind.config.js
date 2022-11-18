/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-pn':'#334155',
        'dark-bg': '#0f172a'
      }
    },
  },
  plugins: [],
}
