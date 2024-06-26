<template>
  <button
    :class="{
      '!bg-blue-300': disabled,
      '!cursor-auto': disabled,
    }"
    :disabled="disabled"
    class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  >
    {{ label }}
  </button>
</template>
<script setup lang="ts">
const { label, disabled } = defineProps<{
  label: string;
  disabled?: boolean | undefined;
}>();
</script>
