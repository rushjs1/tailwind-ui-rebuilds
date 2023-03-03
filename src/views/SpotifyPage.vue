<script setup>
import LeftPanel from "@/components/pages/spotify/panels/LeftPanel.vue";
import RightPanel from "@/components/pages/spotify/panels/RightPanel.vue";
import CenterPanel from "@/components/pages/spotify/panels/CenterPanel.vue";
import SongPlaybackBar from "@/components/pages/spotify/SongPlaybackBar.vue";
</script>

<template>
  <div class="flex min-h-screen w-full sm:min-w-[800px]">
    <LeftPanel class="hidden shrink-0 sm:block lg:col-span-2" />
    <div class="grid grid-cols-12">
      <CenterPanel class="col-span-12 xl:col-span-10" />
      <RightPanel class="col-span-2 hidden xl:block" />
    </div>
    <SongPlaybackBar class="fixed bottom-0" />
  </div>
</template>
