<template>
  <div>
    <SearchForm />
    <LoadingScreen :status="status">
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
      <template #error>{{ error }}</template>
    </LoadingScreen>
    <AddButton
      class="fixed bottom-8 right-8"
      @click="$router.push('/travels/create')"
      >Create travel</AddButton
    >
  </div>
</template>
<script setup lang="ts">
import TravelListItem from '@/components/travels/TravelListItem.vue';
import SearchForm from '@/components/travels/SearchForm.vue';
import AddButton from '@/components/common/AddButton.vue';
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import { fetchTravels } from '../../api';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { filterData } from '@/helpers/filter';

definePageMeta({
  layout: 'home',
});

const route = useRoute();

const filteredData = computed(() => {
  const { search, departureDate, returnDate, selectedRating } = route.query;
  if (!data.value) return [];

  return filterData(data.value, {
    search : search as string,
    departureDate : departureDate as string,
    returnDate: returnDate as string,
    selectedRating: selectedRating as string,
  });
});

const { data, status, error } = await useAsyncData(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);
</script>
