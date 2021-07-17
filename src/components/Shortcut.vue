<template>
  <div
    class="shortcut font-display flex flex-col items-center rounded-md 
    hover:bg-white hover:shadow-md hover:text-primary-500 p-2"
    v-on:click="$emit('shortcut-clicked')"
  >
    <div class="w-4/12 md:w-5/12">
      <slot></slot>
    </div>
    <div>
      <span class="font-bold text-xs md:text-lg"> {{ name }} </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["name"]);
</script>

<style scoped>
.shortcut:hover {
  cursor: pointer;
}
</style>
