<template>
  <!-- repo stats start -->
  <div class="bg-gray-100/50 transition-spacing duration-300">
    <RepoStats />
    <!-- repo stats end -->
    <!-- repo nav start -->
    <RepoNav />
  </div>
  <!-- repo nav end -->
</template>

<script setup>
import RepoStats from "@/components/pages/github/repo-section/RepoStats.vue";
import RepoNav from "@/components/pages/github/repo-section/RepoNav.vue";
</script>
