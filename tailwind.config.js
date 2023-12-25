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
        padding: "1rem",
      },
      zIndex: themeConfig.zIndex,
      height: {
        header: themeConfig.spacing.header,
      },
      spacing: {
        header: themeConfig.spacing.header,
        section: themeConfig.spacing.section,
      },
    },
  },
  plugins: [
    createThemes({
      ...themeConfig.colors,
    }, { defaultTheme: "light" }),
  ],
};
