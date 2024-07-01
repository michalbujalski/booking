<template>
  <div class="relative w-full" v-on-click-outside="() => (show = false)">
    <p class="block text-sm font-medium text-gray-900" :class="{
      'mb-2':label
    }">{{ label }}</p>
    <OutlineButton class="w-full" @click="toggleDate">{{ dateLabel || placeholder }}</OutlineButton>
    <VCalendarDatePicker
      v-if="show"
      v-model="model"
      mode="date"
      v-bind="{ ...attrs, ...$attrs }"
      class="!absolute left-[0px] top-[70px]"
      @close="show = false"
      range="false"
    />
    <ErrorField :error="error" />
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import OutlineButton from '@/components/common/OutlineButton.vue';
import ErrorField from '@/components/form/ErrorField.vue';
import { DatePicker as VCalendarDatePicker } from 'v-calendar';
import { format } from 'date-fns';
import 'v-calendar/dist/style.css';
const model = defineModel<string>();

const { label, error, placeholder } = defineProps<{
  label?: string;
  error?: string;
  placeholder?: string;
}>();

const attrs = {
  transparent: false,
  borderless: false,
};

const show = ref(false);
const closeListener = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    show.value = false;
    window.removeEventListener('keydown', closeListener);
  }
};
const toggleDate = () => {
  show.value = !show.value;
  if (show.value) {
    window.addEventListener('keydown', closeListener);
  }
};
const dateLabel = ref('');

watch(
  model,
  (newDate) => {
    // if () {
      dateLabel.value = newDate ? format(Date.parse(newDate), 'yyyy-MM-dd') : null;
    // }
    show.value = false;
  },
  {
    immediate: true,
  }
);
</script>
<style scoped>
.date-picker {
  margin-top: 1rem;
}
</style>
