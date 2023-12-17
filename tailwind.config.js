/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";
import themeConfig from "./constants/theme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      zIndex: themeConfig.zIndex,
    },
  },
  plugins: [
    createThemes({
      ...themeConfig.colors,
    }, { defaultTheme: "light" }),
  ],
};
