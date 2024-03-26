/** @type {import('tailwindcss').Config} */

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    gridTemplateRows: {
      "[auto,auto,1fr]": "auto auto 1fr",
    },
    colors: {
      "gray-20": "#F5F5F5",
      "gray-50": "#EFE6E6",
      "gray-100": "#DFCCCC",

      "primary-100": "#FFFFFF",
      "primary-300": "#f29b6d",
      "secondary-500": "#ec702f",
      "black-900": "#000000",
    },
    backgroundImage: (theme) => ({
      "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      "mobile-home": "url('./assets/HomePageGraphic.png')",
    }),
    //TODO
    fontFamily: {
      dmsans: ["sans-serif"],
    },
    content: {},
  },
  screens: {
    xxs: "320px",
    xs: "480px",
    sm: "768px",
    md: "1060px",
    lg: "2560px",
  },
};
export const plugins = [require("@tailwindcss/aspect-ratio")];
