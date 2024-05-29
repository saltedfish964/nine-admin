import { RouteRecordRaw } from 'vue-router';

export const NotFoundRoute: RouteRecordRaw[] = [
  {
    path: '/404',
    component: () => import('@/pages/not-found/not-found.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
];
