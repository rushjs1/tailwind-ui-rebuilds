<template>
  <div class="parent space-y-2">
    <div
      class="child flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <BookIcon />
      <span> Readme </span>
    </div>
    <div
      class="child flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <MITIcon />
      <span> MIT License </span>
    </div>
    <div
      class="child flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <ConductIcon />
      <span> Code of Conduct </span>
    </div>
    <div
      class="child flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <StarIcon />
      <span> <span class="font-semibold"> 57.4k </span> stars </span>
    </div>
    <div
      class="child flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <EyeIcon />
      <span>
        <span class="font-semibold"> 572 </span>
        watching
      </span>
    </div>
    <div
      class="flex items-center text-gray-600 space-x-3 hover:text-blue-500 cursor-pointer"
    >
      <ForkIcon />
      <span>
        <span class="font-semibold" f> 2.9K </span>
        forks
      </span>
    </div>
  </div>
</template>

<script setup>
import BookIcon from "@/components/icons/github/BookIcon.vue";
import MITIcon from "@/components/icons/github/MITIcon.vue";
import ConductIcon from "@/components/icons/github/ConductIcon.vue";
import StarIcon from "@/components/icons/github/StarIcon.vue";
import EyeIcon from "@/components/icons/github/EyeIcon.vue";
import ForkIcon from "@/components/icons/github/ForkIcon.vue";
</script>
