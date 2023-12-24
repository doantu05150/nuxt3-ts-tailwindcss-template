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
      height: {
        header: themeConfig.spacing.header,
      },
      spacing: {
        header: themeConfig.spacing.header,
      },
    },
  },
  plugins: [
    createThemes({
      ...themeConfig.colors,
    }, { defaultTheme: "light" }),
  ],
};
