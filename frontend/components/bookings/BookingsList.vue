<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <BookingListItem
        v-for="booking in data"
        :key="booking.id"
        :booking="booking"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { BookingListItemModel } from '@/models/bookings/BookingListItemModel';
import BookingListItem from '@/components/bookings/BookingListItem.vue';
import { watch } from 'vue';
const { data } = defineProps<{
  data: BookingListItemModel[];
}>();

</script>
