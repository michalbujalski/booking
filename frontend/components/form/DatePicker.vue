<template>
  <div class="relative">
    <p class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</p>
    <OutlineButton :label="dateLabel" @click="toggleDate" />
    <VCalendarDatePicker
      v-if="show"
      v-model.string="model"
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
import OutlineButton from '@/components/form/OutlineButton.vue';
import ErrorField from '@/components/form/ErrorField.vue';
import { DatePicker as VCalendarDatePicker } from 'v-calendar';
import { format } from 'date-fns';
import 'v-calendar/dist/style.css';
const model = defineModel<string>();
const { label, error } = defineProps({
  label: String,
  error: String,
});
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
    if (newDate) {
      dateLabel.value = format(Date.parse(newDate), 'yyyy-MM-dd');
    }
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
