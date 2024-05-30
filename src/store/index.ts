import { createPinia } from 'pinia';
import { useThemeStore } from '@/store/module/theme';
import { useUserStore } from '@/store/module/user';
import { useAuthStore } from '@/store/module/auth';

export const pinia = createPinia();

export const PiniaStore = {
  Theme: () => useThemeStore(),
  User: () => useUserStore(),
  Auth: () => useAuthStore(),
};
