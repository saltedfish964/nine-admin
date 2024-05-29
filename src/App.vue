<script setup lang="ts">
import { ConfigProvider as AConfigProvider } from 'ant-design-vue';
import { PiniaStore } from '@/store';

const themeStore = PiniaStore.Theme();

console.log(themeStore.theme);
</script>

<template>
  <a-config-provider>
    <router-view></router-view>
  </a-config-provider>
</template>
