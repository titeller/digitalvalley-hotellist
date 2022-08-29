/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#27272A',
      'sky': '#1A94FF',
      'green': '#43C241',
      'yellow': '#FFC400',
      'gray-light': '#F5F5FA'
    },
    extend: {},
  },
  plugins: [],
}
