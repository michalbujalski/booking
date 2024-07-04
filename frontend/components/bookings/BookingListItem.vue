<template>
  <div class="grid grid-cols-2 sm:max-lg:grid-cols-4 shadow-md bg-white p-4">
    <div class="text-2xl sm:max-lg:hidden inline col-span-2 mb-4">
      {{ booking.name }}
    </div>
    <span class="align-middle sm:max-lg:inline hidden">
      <ItemLabel>Place</ItemLabel>
      <div>{{ booking.title }}</div>
    </span>
    <span class="sm:max-lg:inline hidden">
      <ItemLabel>Email</ItemLabel>
      <div class="text-xs">
        {{ booking.email }}
      </div>
      <ItemLabel>Phone</ItemLabel>
      <div class="text-xs">
        {{ booking.phone }}
      </div>
    </span>
    <span class="sm:max-lg:inline hidden">
      <ItemLabel>Departure date</ItemLabel>
      <div class="text-xs">
        {{ booking.departureDate }}
      </div>
      <ItemLabel>Return date</ItemLabel>
      <div class="text-xs">
        {{ booking.returnDate }}
      </div>
    </span>
    <span class="sm:max-lg:hidden inline">
      <ItemLabel>Email</ItemLabel>
      <div>{{ booking.email }}</div>
    </span>
    <span>
      <ItemLabel>Price</ItemLabel>
      <div>{{ booking.price }}</div>
    </span>
    <span class="sm:max-lg:hidden inline">
      <ItemLabel>Departure date</ItemLabel>
      <div class="text-xs">
        {{ booking.departureDate }}
      </div>
    </span>
    <span class="sm:max-lg:hidden inline">
      <ItemLabel>Return date</ItemLabel>
      <div class="text-xs">
        {{ booking.returnDate }}
      </div>
    </span>
  </div>
</template>
<script lang="ts" setup>
import ItemLabel from '@/components/common/ItemLabel.vue';
import type { BookingListItemModel } from '@/models/bookings/BookingListItemModel';
const { booking } = defineProps<{
  booking: BookingListItemModel;
}>();
</script>
