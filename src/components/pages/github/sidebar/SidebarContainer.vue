<template>
  <div class="sidebar w-1/4 space-y-4">
    <SidebarAbout />
    <SidebarTags />
    <SidebarStats />
    <hr class="border-gray-300" />
    <SidebarReleaseStats />
    <hr class="border-gray-300" />
    <SidebarPackages />
    <hr class="border-gray-300" />
    <SidebarUsedBy />
    <hr class="border-gray-300" />
    <SidebarContributors />
    <hr class="border-gray-300" />
    <SidebarLanguages />
  </div>
</template>

<script setup>
import SidebarTags from "@/components/pages/github/sidebar/tags/SidebarTags.vue";
import SidebarAbout from "@/components/pages/github/sidebar/SidebarAbout.vue";
import SidebarStats from "@/components/pages/github/sidebar/stats/SidebarStats.vue";
import SidebarUsedBy from "@/components/pages/github/sidebar/SidebarUsedBy.vue";
import SidebarContributors from "@/components/pages/github/sidebar/SidebarContributors.vue";
import SidebarReleaseStats from "@/components/pages/github/sidebar/stats/SidebarReleaseStats.vue";
import SidebarLanguages from "@/components/pages/github/sidebar/SidebarLanguages.vue";
import SidebarPackages from "@/components/pages/github/sidebar/stats/SidebarPackages.vue";
</script>
