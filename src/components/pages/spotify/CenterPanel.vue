<script setup>
import ChevronRightIcon from "@/components/icons/spotify/ChevronRightIcon.vue";
import ChevronLeftIcon from "@/components/icons/spotify/ChevronLeftIcon.vue";
import MiniChevronDownIcon from "@/components/icons/spotify/MiniChevronDownIcon.vue";
import PlayIcon from "@/components/icons/spotify/PlayIcon.vue";
import BasicTooltip from "@/components/custom/BasicTooltip.vue";

const favoriteArtists = [
  {
    id: 1,
    name: "Liked Songs",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 2,
    name: "Kaskade",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 3,
    name: "Polyphia",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 4,
    name: "Porter Robinson",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 5,
    name: "deadmau5",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
  {
    id: 5,
    name: "The Giving Moon",
    image: "https://i.scdn.co/image/ab6761610000e5eb8a12e334c9efa099c4870b82",
  },
];
</script>

<template>
  <main class="min-h-screen bg-spotify-stone-dark px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="rounded-full bg-black p-0.5 hover:cursor-not-allowed">
          <ChevronLeftIcon class="text-gray-400" />
        </div>
        <div class="rounded-full bg-black p-0.5 hover:cursor-not-allowed">
          <ChevronRightIcon class="text-gray-400" />
        </div>
      </div>
      <BasicTooltip position="btm">
        <div
          class="flex items-center space-x-2 rounded-full bg-black/30 bg-black pr-2 transition duration-300 hover:cursor-pointer hover:bg-stone-700"
        >
          <img
            class="h-8 rounded-full"
            src="https://secure.gravatar.com/avatar/3683a0f4629cd4e57fc226338b081615?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJR-6.png"
          />
          <span class="text-sm text-white"> rushjs </span>
          <span>
            <MiniChevronDownIcon class="text-white" />
          </span>
        </div>

        <template #btm> rushjs </template>
      </BasicTooltip>
    </div>
    <div class="mt-6 space-y-8">
      <div class="text-gray-100">
        <span class="text-2xl font-bold text-gray-100">Good evening</span>
        <div class="mt-4 grid grid-cols-3 gap-4">
          <button
            v-for="(artist, index) in favoriteArtists"
            :key="index"
            class="group flex w-full items-center justify-between rounded bg-stone-600/60 transition duration-500 hover:bg-stone-600"
          >
            <div class="flex items-center">
              <img :src="artist.image" class="h-16 rounded-l" />
              <span class="ml-4 text-sm font-semibold">
                {{ artist.name }}
              </span>
            </div>
            <div
              class="mr-4 rounded-full bg-spotify-green px-2 py-2 text-black opacity-0 shadow-spotify transition duration-500 group-hover:opacity-100"
            >
              <PlayIcon />
            </div>
          </button>
        </div>
      </div>
      <div>
        <span class="text-2xl font-bold text-gray-100">
          Popular Dance & Electronic playlists
        </span>
      </div>
    </div>
  </main>
</template>
