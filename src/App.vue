<script setup lang="ts">
import { ConfigProvider as AConfigProvider } from 'ant-design-vue';
</script>

<template>
  <a-config-provider>
    <router-view></router-view>
  </a-config-provider>
</template>
