import {
  createWebHashHistory,
  createRouter,
  RouteRecordRaw,
  Router,
} from 'vue-router';
import { RootRoute, RootRouterPath } from '@/router/module/root';
import { NotFoundRoute } from '@/router/module/not-found';
import {
  DefaultLayoutRoute,
  DefaultLayoutRouterPaths,
} from '@/router/module/default-layout';
import { LoginRoute, LoginRouterPath } from '@/router/module/login';
import { PiniaStore } from '@/store';

const routes: RouteRecordRaw[] = [
  ...LoginRoute,
  ...RootRoute,
  ...DefaultLayoutRoute,
  ...NotFoundRoute,
];

export const RouterPaths = {
  Root: RootRouterPath,
  Login: LoginRouterPath,
  DefaultLayout: DefaultLayoutRouterPaths,
};

function routerBeforeEach(router: Router) {
  const authStore = PiniaStore.Auth();
  const whiteList = [RouterPaths.Login];

  router.beforeEach((to, from, next) => {
    if (authStore.token) {
      if (whiteList.includes(to.path)) {
        next(from.path);
        return;
      }
      next();
    } else {
      if (whiteList.includes(to.path)) {
        next();
        return;
      }
      next(RouterPaths.Login);
    }
  });
}

export function routerConfiguration(router: Router) {
  routerBeforeEach(router);
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
