<template>
  <div>{{ route.params.id }}
  <button @click="handleDelete">Delete</button>
  </div>
</template>
<script setup lang="ts">
import { deleteTravel } from "../../../api"

const route = useRoute()
const router = useRouter()

const handleDelete = async () => {
  console.log('delete')
  await deleteTravel(route.params.id)
  router.replace('/travels')
}

</script>