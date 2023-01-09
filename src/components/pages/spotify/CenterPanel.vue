<script setup>
import ChevronRightIcon from "@/components/icons/spotify/ChevronRightIcon.vue";
import ChevronLeftIcon from "@/components/icons/spotify/ChevronLeftIcon.vue";
import MiniChevronDownIcon from "@/components/icons/spotify/MiniChevronDownIcon.vue";
import PauseIcon from "@/components/icons/spotify/PauseIcon.vue";

const favoriteArtists = [
  {
    id: 1,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 2,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 3,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 4,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 5,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 5,
    name: "Chime",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
];
</script>

<template>
  <main class="px-6 py-4 bg-spotify-stone-dark min-h-screen">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="bg-black p-0.5 rounded-full hover:cursor-not-allowed">
          <ChevronLeftIcon class="text-gray-400" />
        </div>
        <div class="bg-black p-0.5 rounded-full hover:cursor-not-allowed">
          <ChevronRightIcon class="text-gray-400" />
        </div>
      </div>
      <div
        class="flex items-center space-x-2 bg-black/30 rounded-full pr-2 hover:bg-black"
      >
        <img
          class="rounded-full h-8"
          src="https://secure.gravatar.com/avatar/3683a0f4629cd4e57fc226338b081615?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJR-6.png"
        />
        <span class="text-sm text-white"> rushjs </span>
        <span>
          <MiniChevronDownIcon class="text-white" />
        </span>
      </div>
    </div>
    <div class="mt-6 space-y-8">
      <div class="text-gray-100">
        <span class="text-gray-100 font-bold text-2xl">Good evening</span>
        <div class="mt-4 grid grid-cols-3 gap-4">
          <div
            v-for="(artist, index) in favoriteArtists"
            :key="index"
            class="w-full bg-stone-600/60 flex items-center justify-between group transition duration-500 hover:bg-stone-600 rounded"
          >
            <div class="flex items-center">
              <img :src="artist.image" class="h-16" />
              <span class="ml-4">
                {{ artist.name }}
              </span>
            </div>
            <div
              class="bg-spotify-green text-black px-2 py-2 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <PauseIcon />
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="text-gray-100 font-bold text-2xl">
          Popular Dance & Electronic playlists
        </span>
      </div>
    </div>
  </main>
</template>
