import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { RootRoute } from '@/router/module/root';
import { NotFoundRoute } from '@/router/module/not-found';
import { LoginRoute } from '@/router/module/login';

const routes: RouteRecordRaw[] = [
  ...LoginRoute,
  ...RootRoute,
  ...NotFoundRoute,
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
