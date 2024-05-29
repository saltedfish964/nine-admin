import { createApp } from 'vue';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import App from '@/App.vue';
import { router } from '@/router';
import { pinia } from '@/store';

import '@/styles/tailwind.css';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

pinia.use(
  createPersistedState({
    key: (id) => `store:${id}`,
  }),
);

app.use(pinia);
app.use(router);

app.mount('#app');
