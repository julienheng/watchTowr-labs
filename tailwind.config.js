/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "Playfair Display Variable, sans-serif",
        lato: "Lato, sans-serif",
      },
      screens: {
        mobile: { min: "320px", max: "567px" },
        tablet: { min: "568px", max: "1023px" },
        laptop: { min: "1024px", max: "1279px" },
        desktop: { min: "1280px", max: "1535px" },
      },
    },
  },
  plugins: [nextui()],
};
