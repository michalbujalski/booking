<template>
  <Card>
    <template #title>Create Booking 3/3</template>
    <div class="relative w-full grid grid-cols-1 gap-2">
      <Dropdown
        :label="paymentMethod"
        :options="PAYMENT_METHODS"
        placeholder="Select payment method"
        :error="errors.paymentMethod"
      />
      <Input
          v-model="notes"
          class="mt-2"
          placeholder="Addtional notes"
          :text="true"
        />
    </div>
    <div class="w-full flex mt-4">
      <Button @click="handlePrev" label="Prev" class="grow"></Button>
      <Button @click="handleNext" label="Create" class="grow" :disabled="formInvalid"></Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
import Input from '@/components/form/Input.vue';
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
import Dropdown from '@/components/common/Dropdown.vue';
import { PaymentMethods } from '@/models/bookings/PaymentMethods';
import type { BookingDetailsForm } from '@/models/bookings/BookingDetailsForm';
import { ref, watch, computed } from 'vue';
import * as yup from 'yup';
import 'yup-phone-lite'
import { set } from 'date-fns';

const { modelValue } = defineProps<{
  modelValue?: BookingDetailsForm;
}>();
const emit = defineEmits(['next', 'previous', 'update:modelValue']);
const paymentMethod = ref<PaymentMethods>(modelValue?.paymentMethod);
const notes = ref(modelValue?.notes);

const schema = yup.object().shape({
  paymentMethod: yup.string().oneOf([PaymentMethods.CREDIT_CARD, PaymentMethods.PAYPAL, PaymentMethods.REVOLUT]).required('Payment method is required')
});
const errors = ref<Partial<BookingDetailsForm>>({});

const formInvalid = ref(true)

watch(
  [paymentMethod, notes],
  ([paymentMethod, notes]) => {
    console.log(paymentMethod, notes)
    emit('update:modelValue', {
      paymentMethod: paymentMethod,
      notes: notes
    })
    try {
      schema.validateSync(
        {
          paymentMethod
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
    immediate: true
  }
);

const setPaymentMethod = (method: PaymentMethods) => {
  paymentMethod.value = method;
};

const PAYMENT_METHODS = [
  {
    label: PaymentMethods.CREDIT_CARD,
    command: setPaymentMethod
  },
  {
    label: PaymentMethods.PAYPAL,
    command: setPaymentMethod
  },
  {
    label: PaymentMethods.REVOLUT,
    command: setPaymentMethod
  },
];

const handleNext = () => {
  emit('next',{
    paymentMethod: paymentMethod.value,
    notes: notes.value
  });
};
const handlePrev = () => {
  emit('previous');
};
</script>
