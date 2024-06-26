<template>
  <div>
    {{ route.params.id }}
    <button @click="handleDelete"><img src="~/assets/img/ic_delete.svg"/></button>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useConfirmationDialog } from '~/hooks/useConfirmationDialog';
import { deleteTravel } from '../../../api';
const { open } = useConfirmationDialog();
const route = useRoute();
const router = useRouter();

const onConfirmDelete = async () => {
  console.log('delete');
  await deleteTravel(route.params.id.toString());
  router.replace('/travels');
};

const handleDelete = () => {
  open(onConfirmDelete, 'Are you sure you want to delete this travel?');
};
</script>
