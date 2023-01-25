<script setup>
import PlayButton from "@/components/pages/spotify/PlayButton.vue";

const props = defineProps({
  artist: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <button
    class="group w-full rounded-md bg-spotify-card p-4 transition duration-300 hover:bg-spotify-card-hover"
  >
    <div class="relative w-full shadow-spotify-card">
      <img :src="props.artist.image" />
      <PlayButton
        class="absolute right-[8px] bottom-0 z-20 mr-0 opacity-0 duration-[270ms] group-hover:-translate-y-2 group-hover:opacity-100"
      />
    </div>
    <div
      class="mt-4 flex min-h-[62px] flex-col items-start justify-center space-y-2"
    >
      <span class="w-full truncate text-left text-base font-bold text-gray-100">
        {{ props.artist.title }}</span
      >
      <span
        class="w-full text-left text-sm font-normal text-[#a7a7a7] line-clamp-2"
      >
        {{ props.artist.body }}
      </span>
    </div>
  </button>
</template>
