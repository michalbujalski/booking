<template>
  <div class="w-full flex flex-col justify-items-center items-center">
    <div
      class="w-8/12 bg-white shadow-md flex flex-col justify-items-center items-center py-4 px-4 md:px-8 mt-8"
    >
      <h1 class="text-lg uppercase my-8"><slot name="title"></slot></h1>
      <slot></slot>
    </div>
  </div>
</template>
