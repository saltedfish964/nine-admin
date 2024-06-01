<script setup lang="ts">
import { computed } from 'vue';
import { PiniaStore } from '@/store';

const props = defineProps<{
  size?: number;
}>();

const themeStore = PiniaStore.Theme();

const isDark = computed(() => themeStore.isDark);

function toggleDark() {
  themeStore.toggleDark();
}
</script>

<template>
  <label
    class="switch"
    :style="[props.size ? { fontSize: `${props.size}px` } : {}]"
  >
    <input type="checkbox" :checked="!isDark" @click="toggleDark" />
    <span class="slider"></span>
  </label>
</template>

<style scoped>
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
