<template>
  <div>{{ route.params.id }}
  <button @click="handleDelete">Delete</button>
  </div>
</template>
<script setup lang="ts">
import { useConfirmationDialog } from "~/hooks/useConfirmationDialog";
import { deleteTravel } from "../../../api"
const { open } = useConfirmationDialog()
const route = useRoute()
const router = useRouter()

const onConfirmDelete = async () => {
  console.log('delete')
  await deleteTravel(route.params.id)
  router.replace('/travels')
}

const handleDelete = () => {
  open(onConfirmDelete, 'Are you sure you want to delete this travel?')
}

</script>