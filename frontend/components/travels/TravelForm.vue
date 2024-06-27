<template>
  <Card>
    <template #title>
      {{ formTitle }}
    </template>
    <form action="." @submit.prevent="handleSubmit">
      <div class="grid-cols-1 md:grid-cols-2 grid gap-4">
        <Input
          v-model="title"
          label="Travel name"
          placeholder=""
          :error="errors.title"
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
          :label="submitLabel"
          class="self-end"
        />
      </div>
    </form>
  </Card>
</template>
<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import * as yup from 'yup';
import Input from '@/components/form/Input.vue';
import DatePicker from '@/components/form/DatePicker.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';
import FileUploadButton from '@/components/form/FileUploadButton.vue';
import Card from '@/components/common/Card.vue';

const title = ref('');
const description = ref('');
const price = ref(100);
const departureDate = ref(new Date().toISOString());
const returnDate = ref(new Date().toISOString());
const image = ref<String | null>(null);

const props = defineProps<{
  submitLabel: string;
  formTitle: string;
  initValues: {
    title: string;
    description: string;
    price: number;
    departureDate: string;
    returnDate: string;
    image: string | null;
  };
}>();

watch(
  () =>  props.initValues,
  (initValues) => {
    title.value = initValues.title;
    description.value = initValues.description;
    price.value = initValues.price;
    departureDate.value = initValues.departureDate;
    returnDate.value = initValues.returnDate;
    image.value = initValues.image;
  },{
    immediate: true
  
  }
);

const errors = ref<{
  title?: string;
  description?: string;
  price?: string;
  departureDate?: string;
  returnDate?: string;
  image?: string;
}>({});

const emit = defineEmits(['submit']);

const schema = yup.object().shape({
  title: yup.string().required('Travel title is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .typeError('Amount is required')
    .required('Amount is required')
    .min(0.01, 'Amount must be greater than 0'),
  departureDate: yup.string().required('Departure date is required'),
  returnDate: yup.string().required('Return date is required'),
  image: yup.string().nullable(),
});

watch(
  [title, description, price, departureDate, returnDate, image],
  ([title, description, price, departureDate, returnDate, image]) => {
    try {
      schema.validateSync(
        {
          title,
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
    !title.value ||
    !description.value ||
    !price.value ||
    !departureDate.value ||
    !returnDate.value
  );
});
const onFileChange = (newImg: String) => {
  image.value = newImg;
};

const handleSubmit = async () => {
  emit('submit', {
    title: title.value,
    description: description.value,
    price: price.value,
    departureDate: departureDate.value,
    returnDate: returnDate.value,
    image: image.value,
  });
};
</script>
