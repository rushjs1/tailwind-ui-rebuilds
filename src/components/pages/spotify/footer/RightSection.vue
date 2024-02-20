<script setup>
import NowPlayingIcon from "@/components/icons/spotify/NowPlayingIcon.vue";
import QueueIcon from "@/components/icons/spotify/QueueIcon.vue";
import CastIcon from "@/components/icons/spotify/CastIcon.vue";
import VolumeIcon from "@/components/icons/spotify/VolumeIcon.vue";
import ExpandIcon from "@/components/icons/spotify/ExpandIcon.vue";
</script>

<template>
  <div
    class="flex w-full items-center justify-end space-x-4 child:cursor-pointer child:transition-colors child:duration-200"
  >
    <NowPlayingIcon class="text-[#b3b3b3] hover:text-white" />
    <QueueIcon class="text-[#b3b3b3] hover:text-white" />
    <CastIcon class="text-[#b3b3b3] hover:text-white" />
    <div class="group flex w-1/4 cursor-pointer items-center space-x-2">
      <VolumeIcon />
      <div
        class="flex h-1 w-full items-center justify-end rounded-full bg-white group-hover:bg-spotify-green"
      >
        <div
          class="right-0 hidden h-3.5 w-3.5 rounded-full bg-white group-hover:block"
        ></div>
      </div>
      <ExpandIcon class="text-[#b3b3b3] hover:text-white" />
    </div>
  </div>
</template>
