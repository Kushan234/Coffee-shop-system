/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#a15f2c",
        secondary:"#6D4C41;",
        background:" #bda18b",
        text_primary: "#ffe4c4",
        text_header: "#000000",
        footer_Color: "#a77956"
      },
      boxShadow:{
        panelShadow:'rgba(17,12,46,0.15) 0px 48px 100px 0px;',
      },
    },
  },
  plugins: [],
}
