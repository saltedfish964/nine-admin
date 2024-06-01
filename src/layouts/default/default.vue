<script setup lang="ts">
import { h, ref } from 'vue';
import {
  Menu as AMenu,
  MenuItem as AMenuItem,
  Dropdown as ADropdown,
  Button as AButton,
  Space as ASpace,
  MenuProps,
} from 'ant-design-vue';
import { VDarkSwitch } from '@/components';

const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'mail',
    icon: () =>
      h('div', [h('span', { class: 'iconfont icon-dashboard text-lg' })]),
    label: '仪表盘',
    title: '仪表盘',
  },
]);
</script>

<template>
  <div
    class="h-screen w-screen overflow-auto flex flex-col dark:bg-[#111827] dark:text-[#dcdcdc]"
  >
    <div
      class="flex-none h-[46px] flex border-b border-solid border-gray-300 dark:bg-[#141414]"
    >
      <div class="flex-none h-full w-[46px] flex items-center justify-center">
        <img class="h-[28px]" src="@/assets/vue.svg" alt="logo" />
      </div>
      <div class="flex-grow overflow-hidden">
        <a-menu
          class="border-none"
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
        />
      </div>
      <div class="flex-none flex items-center px-2">
        <a-space>
          <div class="h-full flex items-center">
            <v-dark-switch :size="10"></v-dark-switch>
          </div>
          <a-button type="text">
            <template #icon>
              <div class="w-full h-full flex items-center justify-center">
                <span class="iconfont icon-mail text-lg"></span>
              </div>
            </template>
          </a-button>
          <a-button type="text">
            <template #icon>
              <div class="w-full h-full flex items-center justify-center">
                <span class="iconfont icon-github-fill text-lg"></span>
              </div>
            </template>
          </a-button>
          <a-dropdown trigger="click">
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">
                  <div class="flex items-center h-full">
                    <span class="iconfont icon-user text-lg"></span>
                    <span class="mx-2">个人中心</span>
                  </div>
                </a-menu-item>
                <a-menu-item key="2">
                  <div class="flex items-center h-full">
                    <span class="iconfont icon-poweroff text-lg"></span>
                    <span class="mx-2">退出登录</span>
                  </div>
                </a-menu-item>
              </a-menu>
            </template>
            <a-button type="text">
              <div class="flex items-center h-full">
                <span class="iconfont icon-user text-lg"></span>
                <span class="mx-2">管理员</span>
                <span class="iconfont icon-down text-lg"></span>
              </div>
            </a-button>
          </a-dropdown>
        </a-space>
      </div>
    </div>
    <div class="flex-grow overflow-auto flex">
      <div class="flex-none"></div>
      <div class="flex-grow overflow-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
