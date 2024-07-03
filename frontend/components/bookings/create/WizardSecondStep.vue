<template>
  <Card>
    <template #title>Create Booking 2/3</template>
    <div class="relative w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      <Input
        placeholder="Name"
        v-model="name"
        class="w-full mb-4"
        :error="errors.name"
      />
      <Input
        placeholder="Email"
        v-model="email"
        class="w-full mb-4"
        :error="errors.email"
      />
      <Input
        placeholder="Phone number"
        v-model="phone"
        class="w-full mb-4"
        :error="errors.phone"
      />
      <Input
        placeholder="Age"
        v-model="age"
        number
        class="w-full mb-4"
        :error="errors.age"
      />
      <Dropdown
        :label="gender"
        :options="GENDER_OPTIONS"
        placeholder="Select gender"
        :error="errors.gender"
      />
    </div>
    <div class="w-full flex mt-4">
      <Button @click="handlePrev" label="Prev" class="grow"></Button>
      <Button
        @click="handleNext"
        label="Next"
        class="grow"
        :disabled="formInvalid"
      ></Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
import Input from '@/components/form/Input.vue';
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
import Dropdown from '@/components/common/Dropdown.vue';
import { Gender } from '@/models/bookings/Gender';
import type { BookingDetailsForm } from '@/models/bookings/BookingDetailsForm';
import { ref, watch, computed } from 'vue';
import * as yup from 'yup';
import 'yup-phone-lite';

const emit = defineEmits(['next', 'previous', 'update:modelValue']);

const { modelValue } = defineProps<{
  modelValue: BookingDetailsForm | undefined;
}>();
const gender = ref<Gender>(modelValue?.gender);
const name = ref(modelValue?.name);
const email = ref(modelValue?.email);
const phone = ref(modelValue?.phone);
const age = ref(modelValue?.age);

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .phone('IN', 'Phone number is invalid')
    .required('Phone number is required'),
  age: yup
    .number()
    .typeError('Age is required')
    .required('Age is required')
    .min(18, 'Age must be greater than 18'),
  gender: yup
    .string()
    .oneOf([Gender.FEMALE, Gender.MALE, Gender.OTHER])
    .required('Gender is required'),
});
const errors = ref<Partial<BookingDetailsForm>>({});

const formInvalid = ref(true);

watch(
  [name, email, phone, age, gender],
  ([name, email, phone, age, gender]) => {
    emit('update:modelValue', {
      name,
      email,
      phone,
      age,
      gender,
    });
    try {
      schema.validateSync(
        {
          name,
          email,
          phone,
          age,
          gender,
        },
        { abortEarly: false }
      );
      errors.value = {};
      formInvalid.value = false;
    } catch (e: any) {
      const validationErrors: Record<string, string> = {};
      e.inner.forEach((error: any) => {
        if (error.path !== undefined) {
          validationErrors[error.path] = error.errors[0];
        }
      });
      errors.value = validationErrors;
    }
  },
  {
    immediate: true,
  }
);

const setGender = (newGender: Gender) => {
  gender.value = newGender;
};

const GENDER_OPTIONS = [
  {
    label: Gender.MALE,
    command: setGender,
  },
  {
    label: Gender.FEMALE,
    command: setGender,
  },
  {
    label: Gender.OTHER,
    command: setGender,
  },
];

const handleNext = () => {
  emit('next');
};
const handlePrev = () => {
  emit('previous');
};
</script>
