<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-10"
  >
    <div class="bg-white px-4  rounded-lg shadow-md">
      <div class="mt-4 mb-8">{{ text }}</div>
      <div class="flex justify-between">
        <OutlineButton label="Cancel" @click="close"/>
        <Button label="Confirm" @click="accept"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import OutlineButton from '@/components/common//OutlineButton.vue';
import Button from '@/components/common/Button.vue';
import { useConfirmationDialog } from '../../hooks/useConfirmationDialog';

const { close, text, accept } = useConfirmationDialog();

</script>
