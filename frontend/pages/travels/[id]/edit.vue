<template>
  <div>Travels edit {{ route.params.id }}</div>
</template>
<script setup lang="ts">
import { fetchTravelDetails } from '../../../api';
const route = useRoute();

const { data, status, error } = await useAsyncData(
  'travelDetails',
  async () => {
    return await fetchTravelDetails(route.params.id);
  },
  {
    server: false,
    watch: [route],
  }
);
</script>
