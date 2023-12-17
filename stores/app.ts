import { defineStore } from "pinia";

interface State {
  theme: "dark" | "light"
}

export const useCounterStore = defineStore("app", {
  state: (): State => ({ theme: "light" }),
  getters: {},
  actions: {
    setTheme(theme?: "dark" | "light") {
      if (theme)
        this.theme = theme;
      else
        this.theme = this.theme === "dark" ? "light" : "dark";
    },
  },
});
