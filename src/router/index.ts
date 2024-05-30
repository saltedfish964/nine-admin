import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { RootRoute, RootRouterPath } from '@/router/module/root';
import { NotFoundRoute } from '@/router/module/not-found';
import { LoginRoute, LoginRouterPath } from '@/router/module/login';

const routes: RouteRecordRaw[] = [
  ...LoginRoute,
  ...RootRoute,
  ...NotFoundRoute,
];

export const RouterPaths = {
  Root: RootRouterPath,
  Login: LoginRouterPath,
};

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
