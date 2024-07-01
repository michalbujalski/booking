<template>
  <div class="relative">
    <OutlineButton @click="isOpen = !isOpen">
      <div class="flex items-center">
        <span class="w-full">{{ label || placeholder }}</span>
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
    </OutlineButton>
    <div
      id="dropdownHover"
      :class="{ hidden: !isOpen }"
      v-on-click-outside="() => isOpen = false"
      class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2"
    >
      <ul
        class="py-2 text-sm text-gray-700 border border-gray-300 hover:bg-primary rounded-lg"
        aria-labelledby="dropdownHoverButton"
      >
        <li
          v-for="option in options"
          @click="isOpen = false, option.command(option.label)"
          :key="option.label"
          class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import OutlineButton from '~/components/common/OutlineButton.vue';
import { ref, watch } from 'vue';
const { label, options, placeholder } = defineProps<{
  label: string;
  options: {
    label: string;
    command: (id: string) => unknown;
  }[];
  placeholder: string;
}>();
const isOpen = ref(false);

</script>
