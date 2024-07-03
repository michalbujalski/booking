<template>
  <div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Input from '@/components/form/Input.vue';
import WizardFirstStep from '@/components/bookings/create/WizardFirstStep.vue';
import WizardSecondStep from '@/components/bookings/create/WizardSecondStep.vue';
import WizardThirdStep from '@/components/bookings/create/WizardThirdStep.vue';

import type { TravelItem } from '@/models/bookings/TravelItem';
import type { UserForm } from '@/models/bookings/UserForm';
import type { BookingDetailsForm } from '@/models/bookings/BookingDetailsForm';

const currentPage = ref(1);
const travelOptioins = ref([
  {
    id: '1',
    title: 'Paris',
  },
  {
    id: '2',
    title: 'Las Vegas',
  },
  {
    id: '3',
    title: 'New York',
  },
]);

const selectedTravel = ref<TravelItem>();
const userForm = ref<UserForm>();
const bookingDetailsForm = ref<BookingDetailsForm>();

watch(userForm, (value) => {
  console.log('userForm', value);
});

const setPage = (pageNum: number) => {
  currentPage.value = pageNum;
};

const handleCreateBooking = () => {
  console.log('Booking created');
};
</script>
