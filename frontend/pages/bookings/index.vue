<template>
  <div>
    <LoadingScreen :status="status">
      <BookingsList :data="data" />
      <template #error>{{ error }}</template>
    </LoadingScreen>
  </div>
</template>
<script setup lang="ts">
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import BookingsList from '@/components/bookings/BookingsList.vue';
import { fetchBookings } from '@/api';
import { watch } from 'vue';

const { data, status, error } = await useAsyncData<Booking[]>(
  'travelslist',
  async () => fetchBookings(),
  {
    server: false,
  }
);
watch(data, (newData) => {
  console.log(newData);
}, {
  immediate: true
});
</script>
