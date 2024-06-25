<template>
  <div>
    <h1>Travels list</h1>
    <div v-if="status === 'success'">
      <ul>
        <li v-for="travel in data" :key="travel.id">
          <nuxt-link :to="`/travels/${travel.id}`">{{
            travel.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
  </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
import { fetchTravels } from '../../api';

const { data, status, error } = await useAsyncData(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);

watch(status, () => {
  console.log(status.value);
});

watch(data, () => {
  console.log(data);
});
</script>
