<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <TravelForm
      formTitle="Create travel"
      submitLabel="Create travel"
      @submit="handleSubmit"
      :initValues="{
        title: '',
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
import { createTravel, uploadImage } from '@/api';
import { CreateTravelForm } from '~/models/travels/CreateTravelForm';

definePageMeta({
  layout: 'detail',
});

const router = useRouter();
const handleSubmit = async (
  e: Omit<CreateTravelForm, 'image'> & { image: File | null }
) => {
  const { title, description, price, departureDate, returnDate, image } = e;

  let imageUrl = null;
  if (image) {
    imageUrl = await uploadImage(image);
  }
  const { id } = await createTravel({
    title,
    description,
    price,
    departureDate,
    returnDate,
    image: imageUrl,
  });
  router.replace(`/travels/${id}`);
};
</script>
