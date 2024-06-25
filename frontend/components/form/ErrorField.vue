<template>
  <p v-show="error" class="text-red-500 text-xs">{{ error }}</p>
</template>
<script setup lang="ts">
const { error } = defineProps({
  error: {
    type: String,
  },
});
</script>
