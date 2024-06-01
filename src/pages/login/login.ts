import { computed, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { Rule, FormInstance } from 'ant-design-vue/es/form';
import { PiniaStore } from '@/store';
import { RouterPaths } from '@/router';

const themeStore = PiniaStore.Theme();
const authStore = PiniaStore.Auth();

export function useLogin(formRef: Ref<FormInstance | undefined>) {
  const router = useRouter();
  const isDark = computed(() => themeStore.isDark);
  const formState = ref({
    username: '',
    password: '',
  });
  const rules: Record<string, Rule[]> = {
    username: [
      {
        required: true,
        message: '请输入账号',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur',
      },
    ],
  };

  function toggleDark() {
    themeStore.toggleDark();
  }

  async function handleLogin() {
    try {
      await formRef.value?.validate();
      authStore.setToken('token');
      router.replace(RouterPaths.DefaultLayout.Dashboard);
    } catch {
      message.error('账号或密码错误');
    }
  }

  return {
    isDark,
    formState,
    rules,
    toggleDark,
    handleLogin,
  };
}
