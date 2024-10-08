/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#17192D",
        neutral: "#FFF",
        bluefocus: "#2188FF",
        container: "#D8DFE6",
        maincontainer: "#E3EAEF",
        blueBtn: "#023B78",
        bordercontainer: "#D8DFE6",
        bgbox: "#F2F8FF",
        boxborder: "#55A6FF",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },

  plugins: [],
};
