<template>
  <div>
    <LoadingScreen :status="status">
      <BookingForm :data="data" @submit="handleSubmit" />
      <template #error>{{ error }}</template>
    </LoadingScreen>
  </div>
</template>

<script setup lang="ts">
import BookingForm from '@/components/bookings/BookingForm.vue';
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import type { BookingForm as BookingFormModel } from '@/models/bookings/BookingForm';
import { fetchTravels, createBooking } from '@/api';
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'detail',
})

const router = useRouter();

const { data, status, error } = await useAsyncData<Travel[]>(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);

const handleSubmit = async (form: BookingFormModel) => {
  await createBooking(form)
  router.replace('/bookings');
};
</script>
