<template>
  <div>
    <div class="bg-white w-screen h-16 flex items-center">
      <nuxt-link
        :to="'/travels'"
        :class="{
          '!border-blue-500': $route.path === '/travels',
        }"
        class="h-full flex items-center hover:bg-gray-100 p-4 border-b-2 border-transparent"
        >Travels</nuxt-link
      >
      <nuxt-link
        :to="'/bookings'"
        :class="{
          '!border-blue-500': $route.path === '/bookings',
        }"
        class="h-full flex items-center hover:bg-gray-100 p-4 border-b-2 border-transparent"
        >Bookings</nuxt-link
      >
    </div>
    <slot />
  </div>
</template>
<script lang="ts"></script>
