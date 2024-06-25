<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <TravelForm @submit="handleSubmit" :initValues="{
      travelName: 'travelName',
      description: 'description',
      price: 123,
      departureDate: new Date('2021-10-10T00:00:00Z').toISOString(),
      returnDate: new Date('2021-10-10T00:00:00Z').toISOString(),
      image: null,
    }"/>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import TravelForm from '@/components/travels/TravelForm.vue';
import { createTravel } from '../../api';

const handleSubmit = async (e) => {
  const { travelName, description, price, departureDate, returnDate, image } = e;
  await createTravel({
    title: travelName,
    description: description,
    price: price,
    departureDate: departureDate,
    returnDate: returnDate,
    image: image,
  });
};
</script>
