<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <div
      class="w-8/12 bg-white shadow-md flex flex-col justify-items-center items-center py-4 px-4 md:px-8 mt-8"
    >
      <h1 class="text-lg uppercase my-8">Travels create</h1>
      <form action="." @submit.prevent="handleSubmit">
        <div class="grid-cols-1 md:grid-cols-2 grid gap-4">
          <Input
            v-model="travelName"
            label="Travel name"
            placeholder=""
            :error="errors.travelName"
          />
          <div class="grid-cols-2 grid gap-4 md:mt-0 mt-2">
            <DatePicker
              v-model="departureDate"
              label="Departure date"
              :error="errors.departureDate"
            />
            <DatePicker
              v-model="returnDate"
              label="Return date"
              :error="errors.returnDate"
            />
          </div>
          <Input
            v-model="description"
            label="Description"
            class="mt-2"
            placeholder=""
            required
            :text="true"
            :error="errors.description"
          />
          <Input
            v-model="price"
            label="Price"
            class="mt-2"
            placeholder=""
            required
            :number="true"
            :error="errors.price"
          />
        </div>
        <FileUploadButton
          @on-file-change="onFileChange"
          class="mt-2"
          :error="errors.image"
        />
        <div class="w-full flex justify-end mt-2">
          <SubmitButton
            :disabled="formInvalid"
            label="Create travel"
            class="self-end"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import * as yup from 'yup';
import Input from '@/components/form/Input.vue';
import DatePicker from '@/components/form/DatePicker.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';
import FileUploadButton from '@/components/form/FileUploadButton.vue';
import { ValidationError } from 'yup';

const travelName = ref('');
const description = ref('');
const price = ref(100);
const departureDate = ref(new Date().toISOString());
const returnDate = ref(new Date().toISOString());
const image = ref<String | null>(null);

const props = defineProps({
  initValues: {
    type: Object,
    default: () => ({
      travelName: '',
      description: '',
      price: 100,
      departureDate: new Date(),
      returnDate: new Date('2024-05-24'),
      image: null,
    }),
  },
});

watch(
  () => props,
  (newProps) => {
    travelName.value = newProps.initValues.travelName;
    description.value = newProps.initValues.description;
    price.value = newProps.initValues.price;
    departureDate.value = newProps.initValues.departureDate;
    returnDate.value = newProps.initValues.returnDate;
    image.value = newProps.initValues.image;
  },
  { immediate: true }
);

const errors = ref<{
  travelName?: string;
  description?: string;
  price?: string;
  departureDate?: string;
  returnDate?: string;
  image?: string;
}>({});

const emit = defineEmits(['submit']);

const schema = yup.object().shape({
  travelName: yup.string().required('Travel name is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .typeError('Amount is required')
    .required('Amount is required')
    .min(0.01, 'Amount must be greater than 0'),
  departureDate: yup.string().required('Departure date is required'),
  returnDate: yup.string().required('Return date is required'),
  image: yup.string().required('Image is required'),
});

watch(
  [travelName, description, price, departureDate, returnDate, image],
  ([travelName, description, price, departureDate, returnDate, image]) => {
    try {
      schema.validateSync(
        {
          travelName,
          description,
          price,
          departureDate,
          returnDate,
          image,
        },
        { abortEarly: false }
      );
      errors.value = {};
    } catch (e: any) {
      const validationErrors: Record<string, string> = {};
      e.inner.forEach((error: any) => {
        if (error.path !== undefined) {
          validationErrors[error.path] = error.errors[0];
        }
      });
      errors.value = validationErrors;
    }
  }
);

const formInvalid = computed(() => {
  return (
    !travelName.value ||
    !description.value ||
    !price.value ||
    !departureDate.value ||
    !returnDate.value ||
    !image.value
  );
});
const onFileChange = (newImg: String) => {
  image.value = newImg;
};

const handleSubmit = async () => {
  emit('submit', {
    name: travelName.value,
    description: description.value,
    price: price.value,
    departureDate: departureDate.value,
    returnDate: returnDate.value,
    image: image.value,
  });
};
</script>
