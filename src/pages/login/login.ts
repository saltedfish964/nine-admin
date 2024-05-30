import { computed } from 'vue';
import { PiniaStore } from '@/store';

const themeStore = PiniaStore.Theme();

export function useLogin() {
  const isDark = computed(() => themeStore.isDark);

  function toggleDark() {
    themeStore.toggleDark();
  }

  return {
    isDark,
    toggleDark,
  };
}
