import { RouteRecordRaw } from 'vue-router';

export const RootRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/pages/root/root.vue'),
  },
];
