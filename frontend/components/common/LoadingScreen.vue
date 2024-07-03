<template>
  <div v-if="status === 'success'">
    <slot></slot>
  </div>
  <div v-else-if="status === 'pending' || status === 'idle'">
    <div class="w-screen h-screen flex justify-center items-center">
      <div class="shadow-lg bg-white p-8 w-30 h-30">
        <div class="loader"></div>
      </div>
    </div>
  </div>
  <div v-else-if="status === 'error'"><slot name="error"></slot></div>
  <div v-else>Unhandeled error</div>
</template>
<script lang="ts" setup>
import type { LoadingStatus } from '@/models/common/LoadingStatus';
const { status } = defineProps<{ status: LoadingStatus }>();
</script>
<style scoped>
.loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#1d4ed8 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  0% {
    background-size: 20% 100%, 20% 100%, 20% 100%;
  }
  33% {
    background-size: 20% 10%, 20% 100%, 20% 100%;
  }
  50% {
    background-size: 20% 100%, 20% 10%, 20% 100%;
  }
  66% {
    background-size: 20% 100%, 20% 100%, 20% 10%;
  }
  100% {
    background-size: 20% 100%, 20% 100%, 20% 100%;
  }
}
</style>
