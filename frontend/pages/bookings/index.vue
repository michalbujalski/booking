<template>
  <div>
    <LoadingScreen :status="status">
      <BookingsList :data="data" />
      <template #error>{{ error }}</template>
    </LoadingScreen>
    <AddButton class="fixed bottom-8 right-8" @click="$router.push('/bookings/create')">Create booking</AddButton>
  </div>
</template>
<script setup lang="ts">
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import BookingsList from '@/components/bookings/BookingsList.vue';
import AddButton from '@/components/common/AddButton.vue';
import { fetchBookings, fetchTravelDetails } from '@/api';
import { watch } from 'vue';
import type { Booking } from '@/models/bookings/Booking';
import type { BookingListItemModel } from '@/models/bookings/BookingListItemModel';

const { data, status, error } = await useAsyncData<BookingListItemModel[]>(
  'travelslist',
  async () => {
    const bookings = await fetchBookings();
    const travelIds = bookings.map((booking) => booking.travelId);
    const travels = await Promise.all(
      travelIds.map((travelId) => fetchTravelDetails(travelId)),
    );
    const bookingListItems = bookings.map((booking) => {
      const travel = travels.find((travel) => travel.id === booking.travelId);
      if (travel) {
        booking.travelName = travel.name;
        booking.price = travel.price;
        booking.departureDate = travel.departureDate;
        booking.returnDate = travel.returnDate;
        return {
          ...booking,
          title: travel.title,
          price: travel.price,
          departureDate: travel.departureDate,
          returnDate: travel.returnDate,
        };
      }
      return booking;
    });
    return bookingListItems;
  },
  {
    server: false,
  }
);
</script>
