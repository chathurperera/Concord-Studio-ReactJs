/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "xxl":{'max': '1700px'},
      "xl":{'max': '1020px'},
      "lg":{'max': '992px'},
      "md":{'max': '768px'},
      "sm":{'max': '478px'},
    }
  },
  plugins: [],
}
