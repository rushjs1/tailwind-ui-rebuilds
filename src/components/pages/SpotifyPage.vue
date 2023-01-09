<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-12 w-full h-screen">
      <LeftPanel />
      <div class="border border-gray-500 col-span-8">
        <CenterPanel />
      </div>
      <RightPanel />
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "@/components/pages/spotify/LeftPanel.vue";
import RightPanel from "@/components/pages/spotify/RightPanel.vue";
import CenterPanel from "@/components/pages/spotify/CenterPanel.vue";
</script>
