/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./src/assets/img/image-header.jpg')",
        'sec-three-left': "url('./src/assets/img/image-photography.jpg')",
        'sec-three-right':"url('./src/assets/img/image-graphic-design.jpg')",
      }
    },
  },
  plugins: [ require('tw-elements/dist/plugin')],
  plugins: [ require("daisyui")]
}