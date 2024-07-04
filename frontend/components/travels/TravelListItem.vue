<template>
  <div class="grid grid-cols-2 sm:max-lg:grid-cols-4 shadow-md bg-white p-4">
    <div class="text-2xl sm:max-lg:hidden inline col-span-2 mb-4">
      {{ travel.title }}
    </div>
    <span class="align-middle sm:max-lg:inline hidden">
      <ItemLabel>Name</ItemLabel>
      <div>{{ travel.title }}</div>
    </span>
    <span class="sm:max-lg:inline hidden">
      <ItemLabel>Departure date</ItemLabel>
      <div class="text-xs">
        {{ travel.departureDate }}
      </div>
      <ItemLabel>Return date</ItemLabel>
      <div class="text-xs">
        {{ travel.returnDate }}
      </div>
    </span>
    <span>
      <ItemLabel>Price</ItemLabel>
      <div>{{ formattedPrice }}</div>
    </span>
    <span>
      <ItemLabel>Rating</ItemLabel>
      <div>{{ travel.rating }}</div>
    </span>
    <span class="sm:max-lg:hidden inline">
      <ItemLabel>Departure date</ItemLabel>
      <div class="text-xs">
        {{ formattedDepartureDate }}
      </div>
    </span>
    <span class="sm:max-lg:hidden inline">
      <ItemLabel>Return date</ItemLabel>
      <div class="text-xs">
        {{ formattedReturnDate }}
      </div>
    </span>
  </div>
</template>
<script setup lang="ts">
import ItemLabel from '@/components/common/ItemLabel.vue';
import { formatCurrency } from '@/helpers/formatters/currencyFormatter';
import { computed } from 'vue';
import { formatDate } from '@/helpers/formatters/dateFormatter';

const formattedDepartureDate = computed(()=>{
  return formatDate(travel.departureDate);
})

const formattedReturnDate = computed(()=>{
  return formatDate(travel.returnDate);
})

const { travel } = defineProps<{
  travel: {
    title: string;
    departureDate: string;
    returnDate: string;
    price: number;
    rating: number;
  };
}>();
const formattedPrice = computed(() => {
  return formatCurrency(travel.price, 'USD');
});
</script>
