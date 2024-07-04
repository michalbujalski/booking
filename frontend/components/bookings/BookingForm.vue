<template>
  <div>
    <WizardFirstStep
      :data="travelOptioins"
      v-model="selectedTravel"
      v-if="currentPage === FIRST_STEP"
      @next="setPage(2)"
    />
    <WizardSecondStep
      v-else-if="currentPage === SECOND_STEP"
      v-model="userForm"
      @next="setPage(3)"
      @previous="setPage(1)"
    />
    <WizardThirdStep
      v-else-if="currentPage === THIRD_STEP"
      v-model="bookingDetailsForm"
      @next="handleCreateBooking"
      @previous="setPage(2)"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import WizardFirstStep from '@/components/bookings/WizardFirstStep.vue';
import WizardSecondStep from '@/components/bookings/WizardSecondStep.vue';
import WizardThirdStep from '@/components/bookings/WizardThirdStep.vue';
import type { TravelItem } from '@/models/bookings/TravelItem';
import type { Travel } from '@/models/travels/Travel';
import type { Gender } from '@/model/bookings/Gender';
import type { UserForm } from '@/models/bookings/UserForm';
import type { BookingDetailsForm } from '@/models/bookings/BookingDetailsForm';
import type { BookingForm as BookingFormModel } from '@/models/bookings/BookingForm';
import { fetchTravels } from '@/api';
const FIRST_STEP = 1;
const SECOND_STEP = 2;
const THIRD_STEP = 3;

const currentPage = ref(FIRST_STEP);

const { data } = defineProps<{
  data: Travel[];
}>();

const emit = defineEmits<{
  (
    e: 'submit',
    value: BookingFormModel
  ): void;
}>();

const travelOptioins = computed<TravelItem[]>(() => {
  return (data || []).map((travel: TravelItem) => ({
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
  emit('submit', {
    travelId: selectedTravel.value?.id || '',
    name: userForm.value?.name || '',
    email: userForm.value?.email || '',
    phone: userForm.value?.phone || '',
    age: userForm.value?.age || 0,
    gender: userForm.value?.gender || Gender.MALE,
  });
};
</script>
