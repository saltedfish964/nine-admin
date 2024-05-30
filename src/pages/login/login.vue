<script setup lang="ts">
import {
  Form as AForm,
  FormItem as AFormItem,
  Input as AInput,
  InputPassword as AInputPassword,
  Button as AButton,
} from 'ant-design-vue';
import { useLogin } from '@/pages/login/login.ts';

const { isDark, toggleDark } = useLogin();
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden root-bg">
    <div class="bg hidden flex-grow xl:block"></div>
    <div class="flex-none w-full flex flex-col xl:w-[450px]">
      <div class="flex-none p-6 flex justify-between items-center">
        <span class="font-bold"> Nine Admin </span>
        <label class="switch">
          <input type="checkbox" :checked="!isDark" @click="toggleDark" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="flex-grow flex items-center justify-center p-6">
        <div
          class="bg-[#ffffffaa] w-full max-w-[450px] p-6 rounded-lg shadow-2xl"
        >
          <div class="text-2xl">登录</div>
          <div class="pt-4">
            <a-form>
              <a-form-item>
                <a-input placeholder="账号"></a-input>
              </a-form-item>
              <a-form-item>
                <a-input-password placeholder="密码"></a-input-password>
              </a-form-item>
              <a-form-item>
                <a-button class="w-full" type="primary">登录</a-button>
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
.root-bg {
  background: -webkit-linear-gradient(
    90deg,
    #458cfb,
    #f2f6fe
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    90deg,
    #458cfb,
    #f2f6fe
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
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
  --background: #28096b;
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

input:checked + .slider {
  background-color: #522ba7;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
</style>
