<template>
  <div class="flex flex-wrap items-center w-2/3">
    <SidebarBubble v-for="(item, index) in items" :key="index" :text="item" />
  </div>
</template>

<script setup>
import SidebarBubble from "@/components/pages/github/sidebar/SidebarBubble.vue";
import { ref } from "vue";

const items = ref([
  "css",
  "postcss",
  "responsive",
  "css framework",
  "functional-css",
  "utility-classes",
  "tailwindcss",
]);
</script>
