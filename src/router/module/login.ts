import { RouteRecordRaw } from 'vue-router';

export const LoginRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/login.vue'),
  },
];
