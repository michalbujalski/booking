<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <TravelForm
      formTitle="Create travel"
      submitLabel="Create travel"
      @submit="handleSubmit"
      :initValues="{
        travelName: '',
        description: '',
        price: 0.01,
        departureDate: new Date().toISOString(),
        returnDate: new Date().toISOString(),
        image: null,
      }"
    />
  </div>
</template>
<script setup lang="ts">
import TravelForm from '@/components/travels/TravelForm.vue';
import { useRouter } from 'vue-router';
import { createTravel } from '../../api';

const router = useRouter();
const handleSubmit = async (e) => {
  const { title, description, price, departureDate, returnDate, image } = e;
  const { id } = await createTravel({
    title,
    description,
    price,
    departureDate,
    returnDate,
    image,
  });
  router.replace(`/travels/${id}/edit`);
};
</script>
