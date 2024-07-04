<template>
  <div>
    <div v-for="booking in data" :key="booking.id">
    {{ booking.id }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Booking } from '@/models/bookings/Booking';
import { watch } from 'vue';
const { data } = defineProps<{
  data: Booking[];
}>();

watch(data, (newData) => {
  console.log(newData);
},{
  immediate: true
});
</script>
