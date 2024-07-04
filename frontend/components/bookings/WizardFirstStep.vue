<template>
  <Card>
    <template #title>Create Booking 1/3</template>
    <div class="relative w-full">
      <Input placeholder="Search travel" v-model="search" class="w-full" />
      <div
        :class="{ hidden: !isOpen }"
        class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 w-full"
      >
        <ul
          class="py-2 text-sm text-gray-700 border border-gray-300 hover:bg-primary rounded-lg"
        >
          <li
            v-for="option in filtered"
            @click="handleSelectTravel(option.id)"
            :key="option.id"
            class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ option.title }}
          </li>
        </ul>
      </div>
      <Button
        @click="handleNext"
        :disabled="!selectedTravel"
        label="Next"
        class="mt-4 w-full"
      ></Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
import Input from '@/components/form/Input.vue';
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
import { vOnClickOutside } from '@vueuse/components';
import type { TravelItem } from '@/models/bookings/TravelItem';
import { ref, watch, computed, nextTick } from 'vue';
import { is } from 'date-fns/locale';

const { data, modelValue } = defineProps<{
  modelValue: TravelItem | null;
  data: TravelItem[];
}>();
const search = ref(modelValue?.title || '');
const selectedTravel = ref<TravelItem>(modelValue);
const isOpen = ref(false);
const isSelected = ref(false);

const emit = defineEmits(['next', 'update:modelValue']);

const filtered = computed(() => {
  const searchQuery = search.value;
  if (isSelected.value) {
    isSelected.value = false;
    return [];
  }
  return data.filter((item) =>item.title.toLowerCase().includes(searchQuery.toLowerCase()))
});

watch(filtered, (filtered) => {
  if (filtered.length === 0) {
    isOpen.value = false;
  } else {
    isOpen.value = true;
  }
});

const handleSelectTravel = (id: string) => {
  const travel = data.find((item) => item.id === id);
  selectedTravel.value = travel;
  emit('update:modelValue', travel);
  isOpen.value = false;
  search.value = travel.title;
  isSelected.value = true;
};

const handleNext = () => {
  emit('next');
};
</script>
