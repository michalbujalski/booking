<template>
  <div class="w-screen fixed top-0 left-0">
  <div class="border border-red-300 bg-red-200 py-2 px-4 text-red-500 w-[500px] mx-auto mt-2 flex">
    <span class="grow"> {{ errorText }}</span>
     <img src="/img/ic_close_red.svg" alt="close" class="cursor-pointer" @click="close"/>
  </div>
  </div>
</template>
<script lang="ts" setup>
import { useErrorNotification } from '@/hooks/useErrorNotification';
const { errorText, close } = useErrorNotification()
</script>
<style>
img > svg{
  fill: red;
  color: red;
}
</style>