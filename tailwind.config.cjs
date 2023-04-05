/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('./assets/img/Banner1.png')",
        banner2: "url('./assets/img/Banner2.png')",
        banner3: "url('./assets/img/Banner3.png')",
        banner4: "url('./assets/img/Banner4.png')",
        NewArrival1: "url('./assets/img/newArrive/Product1.png')",
        NewArrival2: "url('./assets/img/newArrive/Product2.png')",
        NewArrival3: "url('./assets/img/newArrive/Product3.png')",
        NewArrival4: "url('./assets/img/newArrive/Product4.png')",
        NewArrival5: "url('./assets/img/newArrive/Product5.png')",
        NewArrival6: "url('./assets/img/newArrive/Product6.png')",
      
        
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
