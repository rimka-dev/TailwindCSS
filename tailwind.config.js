/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        geant:['12rem', {lineHeight:'1'}]
      },
      colors:{
        primary: "#FF6363",
        secondary: {
          100:"#E2E2D5",
          200:"#888883"
        }
      },
      fontFamily:{
        body: ["Nunito"]
      }
    },
  },
  plugins: [],
}

