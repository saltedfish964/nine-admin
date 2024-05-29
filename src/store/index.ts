import { createPinia } from 'pinia';
import { useThemeStore } from '@/store/module/theme';
import { useUserStore } from '@/store/module/user';

export const pinia = createPinia();

export const PiniaStore = {
  Theme: () => useThemeStore(),
  User: () => useUserStore(),
};
