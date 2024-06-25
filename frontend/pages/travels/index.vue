<template>
  <div>
    <div
      v-if="status === 'success'"
      class="px-8 py-2 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
    >
      <nuxt-link
        :to="`/travels/${travel.id}`"
        class=""
        v-for="travel in data"
        :key="travel.id"
      >
        <TravelListItem :travel="travel" />
      </nuxt-link>
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
  </div>
</template>
<script setup lang="ts">
import TravelListItem from '@/components/travels/TravelListItem.vue';
import { fetchTravels } from '../../api';

const { data, status, error } = await useAsyncData(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);
</script>
