/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        palePink: '#F8EDED',
        brightOrange: '#FF8225',
        deepRed: '#B43F3F',
        darkBlue: '#173B45',
      },
    },
  },
  plugins: [],
}
