import { RouteRecordRaw } from 'vue-router';

export const DefaultLayoutRouterPaths = {
  Dashboard: '/default-layout/dashboard',
};

export const DefaultLayoutRoute: RouteRecordRaw[] = [
  {
    path: '/default-layout',
    name: 'DefaultLayout',
    component: () => import('@/layouts/default/default.vue'),
    children: [
      {
        path: DefaultLayoutRouterPaths.Dashboard,
        name: 'DefaultLayoutDashboard',
        component: () =>
          import('@/pages/default-layout/dashboard/dashboard.vue'),
      },
    ],
  },
];
