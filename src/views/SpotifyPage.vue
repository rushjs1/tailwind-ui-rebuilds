<template>
  <div class="flex justify-center">
    <div class="grid h-screen w-full grid-cols-12">
      <LeftPanel />
      <div class="col-span-8 border border-gray-500">
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
