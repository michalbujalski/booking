<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ConfirmDialog v-if="isOpen" />
    <ErrorNotification v-if="isErrorOpen"/>
  </div>
</template>
<script setup lang="ts">
import ConfirmDialog from '@/components/common/ConfirmDialog.vue';
import ErrorNotification from '@/components/common/ErrorNotification.vue';
import { useConfirmationDialog } from '@/hooks/useConfirmationDialog';
import { useErrorNotification } from '@/hooks/useErrorNotification';
const { isErrorOpen } = useErrorNotification();
const { isOpen } = useConfirmationDialog();
</script>
