import { RouteRecordRaw } from 'vue-router';

export const LoginRouterPath = '/login';

export const LoginRoute: RouteRecordRaw[] = [
  {
    path: LoginRouterPath,
    name: 'Login',
    component: () => import('@/pages/login/login.vue'),
  },
];
