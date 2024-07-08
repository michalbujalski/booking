<template>
  <div>
    <label v-if="label" for="input" class="block mb-2 text-sm font-medium text-gray-900">{{
      label
    }}</label>

    <input
      v-if="!text"
      :type="number ? 'number' : 'text'"
      step="0.01"
      id="input"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      v-model="model"
    />
    <textarea
      v-if="text"
      rows="4"
      cols="50"
      type="text"
      id="input"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      v-model="model"
    ></textarea>
    <ErrorField :error="error" />
  </div>
</template>
<script setup lang="ts">
import ErrorField from '@/components/form/ErrorField.vue';
const model = defineModel<string | number>();
const { label, placeholder, text, number, error } = defineProps<{
  label?: string;
  placeholder: string;
  error?: string | undefined;
  number?: boolean;
  text?: boolean;
}>();
</script>
