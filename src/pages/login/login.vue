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
import { useLogin } from '@/pages/login/login.ts';

const formRef = ref<FormInstance>();

const { isDark, rules, formState, toggleDark, handleLogin } = useLogin(formRef);
</script>

<template>
  <div
    class="bg-gradient-to-r from-[#458cfb] dark:from-[#111827] to-[#f2f6fe] dark:to-[#111827] flex h-screen w-screen overflow-hidden"
  >
    <div class="bg hidden flex-grow xl:block"></div>
    <div class="flex-none w-full flex flex-col xl:w-1/2">
      <div class="flex-none p-6 flex justify-between items-center">
        <span class="font-bold dark:text-gray-300"> Nine Admin </span>
        <label class="switch">
          <input type="checkbox" :checked="!isDark" @click="toggleDark" />
          <span class="slider"></span>
        </label>
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
                <a-button class="w-full" type="primary" @click="handleLogin">
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
  background: url('/login-bg.svg');
  @apply bg-no-repeat bg-auto bg-center;
}

/* The switch - the box around the slider */
.switch {
  font-size: 12px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: #1677ff;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  background: var(--background);
  transition: 0.5s;
}

/* input:checked + .slider {
  background-color: #1677ff;
} */

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
</style>
