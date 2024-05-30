import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state() {
    return {
      isDark: false,
      theme: 'light',
    };
  },
  actions: {
    toggleDark() {
      this.isDark = !this.isDark;
    },
  },
  persist: true,
});
