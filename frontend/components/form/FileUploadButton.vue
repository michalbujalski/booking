<template>
  <div
    class="w-full flex flex-col md:flex-row justify-items-center items-center"
  >
    <div class="">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        alt=""
        class="w-64 md:w-24 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg border-1 text-gray-900 text-sm rounded-lg"
      />
      <img
        v-else
        src="~assets/img/placeholder.png"
        alt=""
        class="w-64 md:w-24 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg border-1 text-gray-900 text-sm rounded-lg"
      />
    </div>
    <button
      :class="{
        '!bg-blue-300': disabled,
        '!cursor-auto': disabled,
      }"
      :disabled="disabled"
      @click.prevent="$refs.fileInput.click()"
      class="cursor-pointer mt-2 md:ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      Upload photo
    </button>
    <ErrorField :error="error" />
    <input
      type="file"
      :class="{
        '!bg-blue-300': disabled,
        '!cursor-auto': disabled,
      }"
      :disabled="disabled"
      @change.prevent="onChangeFileUpload($event)"
      class="hidden"
      ref="fileInput"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ErrorField from '@/components/form/ErrorField.vue';
const { label, error } = defineProps({
  label: String,
  disabled: Boolean,
  error: String,
});
const emit = defineEmits(['onFileChange']);
const onChangeFileUpload = (e) => {
  const file = e.target.files[0];
  imgSrc.value = URL.createObjectURL(file);
  const reader = new FileReader();
  reader.onloadend = () => {
    emit('onFileChange', reader.result);
  };
  reader.readAsDataURL(file);
};
const imgSrc = ref();
</script>
