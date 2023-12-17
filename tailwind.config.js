/** @type {import('tailwindcss').Config} */
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
      colors: themeConfig.colors.light,
      zIndex: themeConfig.zIndex,
    },
  },
  plugins: [],
};
