/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/img/image-header.jpg')",
        map: "url('./src/assets/img/bg-page.png')",
        map2: "url('./src/assets/img/bg-page2.png')",
        map3: "url('./src/assets/img/bg-page3.png')",
        map5: "url('./src/assets/img/bg-page5.png')",
        map6: "url('./src/assets/img/bg-page6.png')",
        map7: "url('./src/assets/img/bg-page7.png')",
        
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
