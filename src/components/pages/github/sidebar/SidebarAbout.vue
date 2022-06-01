<template>
  <div class="about">
    <span class="text-base font-semibold">About</span>
    <div class="text-base mt-4">
      A utility-first CSS framework for rapid UI Development.
    </div>
    <div class="mt-4 flex items-center space-x-2">
      <span>
        <LinkIcon />
      </span>
      <span class="text-blue-600 hover:underline cursor-pointer">
        tailwindcss.com/
      </span>
    </div>
  </div>
</template>

<script setup>
import LinkIcon from "@/components/icons/github/LinkIcon.vue";
</script>
