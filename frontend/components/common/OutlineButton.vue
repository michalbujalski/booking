<template>
  <button
    type="button"
    class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-primary hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
  >
    {{ label }}
  </button>
</template>
<script lang="ts" setup>
const { label } = defineProps<{ label: string }>();
</script>