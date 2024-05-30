<script setup lang="ts">
import { computed, watch } from 'vue';
import { ConfigProvider as AConfigProvider, theme } from 'ant-design-vue';
import { PiniaStore } from '@/store';

const themeStore = PiniaStore.Theme();

const algorithm = computed(() =>
  themeStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
);

watch(
  () => themeStore.isDark,
  () => {
    document.documentElement.className = themeStore.isDark ? 'dark' : 'light';
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: algorithm,
    }"
  >
    <router-view></router-view>
  </a-config-provider>
</template>
