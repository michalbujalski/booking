<template>
  <nuxt-link
    :to="to"
    class="w-8 h-8 rounded-[50%] flex block justify-center items-center hover:bg-gray-100 cursor-pointer"
  >
    <slot></slot>
  </nuxt-link>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const { to } = defineProps<{ to?: string }>();
</script>
