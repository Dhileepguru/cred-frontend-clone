/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        credDark: '#0a0a0a',
        credGray: '#151517',
        credNeonBlue: '#3d5afe',
        credNeonGreen: '#00e676',
      },
    },
  },
  plugins: [],
}