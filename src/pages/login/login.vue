<script setup lang="ts">
import { ref } from 'vue';
import {
  Form as AForm,
  FormItem as AFormItem,
  Input as AInput,
  InputPassword as AInputPassword,
  Button as AButton,
  FormInstance,
} from 'ant-design-vue';
import { VDarkSwitch } from '@/components';
import { useLogin } from '@/pages/login/login.ts';

const formRef = ref<FormInstance>();

const { rules, formState, handleLogin } = useLogin(formRef);
</script>

<template>
  <div
    class="bg-gradient-to-r from-[#458cfb] dark:from-[#111827] to-[#f2f6fe] dark:to-[#111827] flex h-screen w-screen overflow-auto"
  >
    <div class="bg hidden flex-grow xl:block"></div>
    <div class="flex-none w-full flex flex-col xl:w-1/2">
      <div class="flex-none p-6 flex justify-between items-center">
        <span class="font-bold dark:text-gray-300"> Nine Admin </span>
        <v-dark-switch></v-dark-switch>
      </div>
      <div class="flex-grow flex items-center justify-center p-6">
        <div
          class="bg-[#ffffffaa] dark:bg-[#111827] w-full max-w-[360px] p-6 rounded-lg shadow-2xl dark:shadow-none"
        >
          <div class="text-2xl dark:text-gray-300">登录</div>
          <div class="pt-4">
            <a-form ref="formRef" :rules="rules" :model="formState">
              <a-form-item name="username">
                <a-input
                  v-model:value="formState.username"
                  placeholder="账号"
                ></a-input>
              </a-form-item>
              <a-form-item name="password">
                <a-input-password
                  v-model:value="formState.password"
                  placeholder="密码"
                ></a-input-password>
              </a-form-item>
              <a-form-item>
                <a-button
                  class="w-full"
                  type="primary"
                  html-type="submit"
                  @click="handleLogin"
                >
                  <span>登录</span>
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
      <div class="flex-none p-6 text-center text-sm text-slate-500">
        MIT Licensed | Copyright © 2024
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url('@/assets/login-bg.svg');
  @apply bg-no-repeat bg-auto bg-center;
}
</style>
