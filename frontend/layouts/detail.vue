<template>
  <div>
    <div class="bg-white w-screen h-16 flex items-center">
      <nuxt-link
        :to="'/'"
        class="h-full flex items-center hover:bg-gray-100 p-4 border-b-2 border-transparent"
        ><img src="/img/ic_back.svg" class="mr-2"/><span>Back</span></nuxt-link
      >
    </div>
    <slot />
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";

</script>
