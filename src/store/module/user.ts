import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state() {
    return {
      name: 'nine',
    };
  },
  persist: {
    storage: sessionStorage,
  },
});
