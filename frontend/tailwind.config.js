/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          700: "#424c5d",
          900: "#262b35",
        },
        red: { 700: "#d03329" },
        blue: { A700: "#0a58ff", A700_01: "#0061ff" },
        gray: {
          50: "#f4f8ff",
          900: "#11142d",
          "700_0c": "#5555550c",
          "700_11": "#55555511",
        },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { gilroy: "Gilroy", opensans: "Open Sans" },
      boxShadow: {
        bs: "0px 0px  10px 4px #5555550c",
        bs1: "0px 0px  10px 4px #55555511",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
