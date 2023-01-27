<script setup>
import PlayButton from "@/components/pages/spotify/PlayButton.vue";

const props = defineProps({
  artist: {
    type: Object,
    required: true,
  },
  roundedImg: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<template>
  <button
    class="group flex w-full shrink-0 flex-col items-start rounded-md bg-spotify-card p-4 transition duration-300 hover:bg-spotify-card-hover"
  >
    <div class="relative flex w-full items-start justify-start">
      <img
        :src="props.artist.image"
        :class="[
          props.roundedImg ? 'rounded-full' : '',
          'shrink-0 shadow-spotify-card',
        ]"
      />
      <PlayButton
        class="absolute right-[8px] bottom-0 z-20 mr-0 opacity-0 duration-[270ms] group-hover:-translate-y-2 group-hover:opacity-100"
      />
    </div>
    <div
      class="mt-4 flex min-h-[62px] w-full flex-col items-start justify-start space-y-2"
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
