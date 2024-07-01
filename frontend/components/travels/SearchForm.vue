<template>
  <div class="bg-white shadow-md grid grid-cols-2 md:grid-cols-4 gap-4 p-4 m-4">
    <div class="flex items-center justify-content-center">
      <input
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-2 w-full"
        placeholder="Search"
        v-model="search"
      />
      <RoundedButton @click="clearFilter('departureDate')" class="mr-2"
        ><img src="/img/ic_close.svg"
      /></RoundedButton>
    </div>
    <div class="flex items-center justify-content-center">
      <DatePicker
        v-model="departureDate"
        placeholder="Departure date"
        class="mr-2 w-full"
      />
      <RoundedButton @click="clearFilter('departureDate')" class="mr-2"
        ><img src="/img/ic_close.svg"
      /></RoundedButton>
    </div>
    <div class="flex items-center justify-content-center">
      <DatePicker v-model="returnDate" placeholder="Return date" class="mr-2" />
      <RoundedButton @click="clearFilter('returnDate')" class="mr-2"
        ><img src="/img/ic_close.svg"
      /></RoundedButton>
    </div>
    <div class="flex items-center justify-content-center">
      <Dropdown :label="selectedRating" :options="options" placeholder="Rating"/>
      <RoundedButton @click="clearFilter('selectedRating')" class="mr-2"
        ><img src="/img/ic_close.svg"
      /></RoundedButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import Input from '~/components/form/Input.vue';
import DatePicker from '~/components/form/DatePicker.vue';
import Dropdown from '~/components/common/Dropdown.vue';
import RoundedButton from '~/components/common/RoundedButton.vue';
import { useRouter } from 'vue-router';

const search = ref();
const router = useRouter();
const departureDate = ref();
const returnDate = ref();
const selectedRating = ref();

const selectRating = (id: string) => {
  selectedRating.value = id;
};

type Filter = 'search' | 'departureDate' | 'returnDate' | 'selectedRating';

const clearFilter = (key: Filter) => {
  switch (key) {
    case 'search':
      search.value = null;
      break;
    case 'departureDate':
      departureDate.value = null;
      break;
    case 'returnDate':
      returnDate.value = null;
      break;
    case 'selectedRating':
      selectedRating.value = null;
      break;
  }
};

const options = [
  {
    label: '5',
    command: selectRating,
  },
  {
    label: '4',
    command: selectRating,
  },
  {
    label: '3',
    command: selectRating,
  },
  {
    label: '2',
    command: selectRating,
  },
  {
    label: '1',
    command: selectRating,
  },
];
watch(
  [search, departureDate, returnDate, selectedRating],
  ([search, departureDate, returnDate, selectedRating]) => {
    let query = {};
    if (search && search.length > 0) {
      query = { ...query, search };
    }
    if (departureDate) {
      query = { ...query, departureDate };
    }
    if (returnDate) {
      query = { ...query, returnDate };
    }
    if (selectedRating) {
      query = { ...query, selectedRating };
    }

    router.push({
      query,
    });
  }
);
</script>
