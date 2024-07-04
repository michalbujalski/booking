<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ConfirmDialog v-if="isOpen" />
  </div>
</template>
<script setup lang="ts">
import ConfirmDialog from '@/components/common/ConfirmDialog.vue';
import { useConfirmationDialog } from '@/hooks/useConfirmationDialog';

const { isOpen } = useConfirmationDialog();
</script>
