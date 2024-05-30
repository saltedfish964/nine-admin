import { RouteRecordRaw } from 'vue-router';

export const RootRouterPath = '/';

export const RootRoute: RouteRecordRaw[] = [
  {
    path: RootRouterPath,
    name: 'Root',
    component: () => import('@/pages/root/root.vue'),
  },
];
