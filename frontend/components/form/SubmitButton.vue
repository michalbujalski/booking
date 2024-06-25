<template>
  <input
    type="submit"
    :class="{
      '!bg-blue-300': disabled,
      '!cursor-auto': disabled
    }"
    :value="label"
    :disabled="disabled"
    class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
  />
</template>
<script setup lang="ts">
const { label } = defineProps<{
  label: string;
  disabled: boolean;
}>();
</script>