<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useFetch } from '@vueuse/core';


const {data, error} = useFetch('http://localhost:3333/travels')

watch(data, () => {
  console.log(data.value)
})

</script>

<template>
  <h1>Travels list</h1>
</template>
