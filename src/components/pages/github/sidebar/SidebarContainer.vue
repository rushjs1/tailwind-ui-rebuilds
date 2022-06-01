<template>
  <div class="sidebar w-1/4 space-y-4">
    <SidebarAbout />
    <SidebarTags />
  </div>
</template>

<script setup>
import SidebarTags from "@/components/pages/github/sidebar/SidebarTags.vue";
import SidebarAbout from "@/components/pages/github/sidebar/SidebarAbout.vue";
</script>
