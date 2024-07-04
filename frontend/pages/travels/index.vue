<template>
  <div>
    <SearchForm />
    <div
      v-if="status === 'success'"
      class="px-8 py-2 grid sm:grid-cols-1 md:grid-cols-2 gap-4"
    >
      <nuxt-link
        :to="`/travels/${travel.id}`"
        v-for="travel in filteredData"
        :key="travel.id"
      >
        <TravelListItem :travel="travel" />
      </nuxt-link>
    </div>
    <div v-else-if="status === 'pending' || status === 'idle'">Loading...</div>
    <div v-else-if="status === 'error'">{{ error }}</div>
    <div v-else>Error</div>
    <AddButton class="fixed bottom-8 right-8" @click="$router.push('/travels/create')">Create travel</AddButton>
  </div>
</template>
<script setup lang="ts">
import TravelListItem from '@/components/travels/TravelListItem.vue';
import SearchForm from '@/components/travels/SearchForm.vue';
import AddButton from '@/components/common/AddButton.vue';
import { fetchTravels } from '../../api';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Travel } from '@/models/travels/Travel';

definePageMeta({
  layout: 'home',
})

const route = useRoute();

const filteredData = computed(() => {
  const { search, departureDate, returnDate } = route.query;
  if (!data.value) return [];
  let filtered = data.value;
  if (search) {
    filtered = filtered.filter((travel: Travel) =>
      travel.title.toLowerCase().includes(search.toString().toLowerCase())
    );
  }
  if (departureDate) {
    const dd = Date.parse(departureDate.toString());
    filtered = filtered.filter((travel: Travel) => {
      const tdd = Date.parse(travel.departureDate);
      return dd >= tdd;
    });
  }
  if(returnDate){
    const rd = Date.parse(returnDate.toString());
    filtered = filtered.filter((travel:Travel)=>{
      const trd = Date.parse(travel.returnDate);
      return rd <= trd
    })
  }
  return filtered
});

const { data, status, error } = await useAsyncData(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);
</script>