<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <TravelForm
      formTitle="Edit travel"
      @submit="handleSubmit"
      :initValues="initValues"
      submitLabel="Save changes"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TravelForm from '@/components/travels/TravelForm.vue';
import type { Travel } from '@/models/travels/Travel';
import { fetchTravelDetails, updateTravel } from '../../../api';
const route = useRoute();
const router = useRouter();
const travelId = computed(() => {
  if (Array.isArray(route.params.id)) {
    return route.params.id[0];
  }
  return route.params.id;
});
const initValues = ref<Travel>({
  id: '',
  title: '',
  description: '',
  price: 0,
  departureDate: new Date().toISOString(),
  returnDate: new Date().toISOString(),
  rating: 0,
  image: null,
});

const { data, status, error } = await useAsyncData(
  'travelDetails',
  async () => {
    return await fetchTravelDetails(travelId.value);
  },
  {
    server: false,
    watch: [route],
  }
);
watch(data, (newData) => {
  if (!newData) {
    return;
  }
  initValues.value = newData;
});

const handleSubmit = async (e) => {
  const { title, description, price, departureDate, returnDate, image } = e;
  await updateTravel(travelId.value, {
    title,
    description,
    price,
    departureDate,
    returnDate,
    image,
  });
  router.replace(`/travels/${travelId.value}/edit`);
};
</script>
