<template>
  <div>
    <LoadingScreen :status="status">
      <WizardFirstStep
        :data="travelOptioins"
        v-model="selectedTravel"
        v-if="currentPage === 1"
        @next="setPage(2)"
      />
      <WizardSecondStep
        v-else-if="currentPage === 2"
        v-model="userForm"
        @next="setPage(3)"
        @previous="setPage(1)"
      />
      <WizardThirdStep
        v-else-if="currentPage === 3"
        v-model="bookingDetailsForm"
        @next="handleCreateBooking"
        @previous="setPage(2)"
      />
      <template #error>{{ error }}</template>
    </LoadingScreen>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Input from '@/components/form/Input.vue';
import WizardFirstStep from '@/components/bookings/create/WizardFirstStep.vue';
import WizardSecondStep from '@/components/bookings/create/WizardSecondStep.vue';
import WizardThirdStep from '@/components/bookings/create/WizardThirdStep.vue';
import LoadingScreen from '@/components/common/LoadingScreen.vue';
import type { TravelItem } from '@/models/bookings/TravelItem';
import type { Travel } from '@/models/travels/Travel';
import type { UserForm } from '@/models/bookings/UserForm';
import type { BookingDetailsForm } from '@/models/bookings/BookingDetailsForm';
import { fetchTravels } from '@/api';

const currentPage = ref(1);

const { data, status, error } = await useAsyncData<Travel[]>(
  'travelslist',
  async () => fetchTravels(),
  {
    server: false,
  }
);

const travelOptioins = computed<TravelItem[]>(() => {
  return (data?.value || []).map((travel: TravelItem) => ({
    title: travel.title,
    id: travel.id,
  }));
});

const selectedTravel = ref<TravelItem>();
const userForm = ref<UserForm>();
const bookingDetailsForm = ref<BookingDetailsForm>();

const setPage = (pageNum: number) => {
  currentPage.value = pageNum;
};

const handleCreateBooking = () => {
  console.log('Booking created');
};
</script>
