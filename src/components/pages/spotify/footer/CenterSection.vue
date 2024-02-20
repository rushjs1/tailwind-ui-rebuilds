<script setup>
import ShuffleIcon from "@/components/icons/spotify/ShuffleIcon.vue";
import PlaybackIcon from "@/components/icons/spotify/PlaybackIcon.vue";
import PauseIcon from "@/components/icons/spotify/PauseIcon.vue";
import PlayforwardIcon from "@/components/icons/spotify/PlayforwardIcon.vue";
import RepeatIcon from "@/components/icons/spotify/RepeatIcon.vue";
</script>

<template>
  <div class="flex w-full flex-col items-center space-y-3">
    <div
      class="flex items-center space-x-6 duration-200 child:cursor-pointer child:transition-colors"
    >
      <ShuffleIcon class="text-[#b3b3b3] hover:text-white" />
      <PlaybackIcon class="text-[#b3b3b3] hover:text-white" />
      <div class="w-fit rounded-full bg-white p-1 hover:scale-110">
        <PauseIcon class="text-black" />
      </div>
      <PlayforwardIcon class="text-[#b3b3b3] hover:text-white" />
      <RepeatIcon class="text-[#b3b3b3] hover:text-white" />
    </div>
    <div class="flex w-full items-center space-x-2">
      <span class="text-xs"> 0:25 </span>
      <div class="relative h-1 w-full rounded-full bg-white/30">
        <div class="absolute inset-0 w-[25%] rounded-full bg-white"></div>
      </div>
      <span class="text-xs"> 4:00 </span>
    </div>
  </div>
</template>
