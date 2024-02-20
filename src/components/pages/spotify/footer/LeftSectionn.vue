<script setup>
import HeartIcon from "@/components/icons/spotify/HeartIcon.vue";
import PictureInPictureIcon from "@/components/icons/spotify/PictureInPictureIcon.vue";
</script>

<template>
  <div>
    <div class="flex items-center space-x-3">
      <img
        src="https://i.scdn.co/image/ab67616d000048512a2d11880ce5489ccc1d1a37"
        class="hover:cursor-pointer"
      />
      <div class="flex flex-col">
        <span class="text-sm hover:cursor-pointer">Crush</span>
        <span class="text-[.6875rem] text-[#b3b3b3] hover:cursor-pointer">
          Polyphia
        </span>
      </div>
      <div class="flex items-center space-x-4 pl-2">
        <HeartIcon
          class="h-4 w-4 fill-current text-spotify-green hover:cursor-pointer"
        />
        <PictureInPictureIcon class="text-[#b3b3b3] hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>
