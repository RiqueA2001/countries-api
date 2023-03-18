/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkModeElements: 'hsl(209, 23%, 22%)', // Dark Mode Elements
        darkModeBg: 'hsl(207, 26%, 17%)', // Dark Mode Background
        lightModeText: 'hsl(200, 15%, 8%)', // Light Mode Text
        lightModeInput: 'hsl(0, 0%, 52%)', // Light Mode Input
        lightModeBg: 'hsl(0, 0%, 98%)', // Light Mode Background
        darkModeText: 'hsl(0, 0%, 100%)' // Dark Mode Text & Light Mode Elements
      }
    }
  },
  plugins: []
}
