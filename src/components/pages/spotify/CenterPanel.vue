<script setup>
import { ref } from "vue";
import ChevronRightIcon from "@/components/icons/spotify/ChevronRightIcon.vue";
import ChevronLeftIcon from "@/components/icons/spotify/ChevronLeftIcon.vue";
import MiniChevronDownIcon from "@/components/icons/spotify/MiniChevronDownIcon.vue";
import PlayIcon from "@/components/icons/spotify/PlayIcon.vue";
import BasicTooltip from "@/components/custom/BasicTooltip.vue";

const hasMouseEntered = ref(false);
const hoverIndex = ref(null);

const hovering = (artist, index) => {
  //set index to the hovered items index
  hoverIndex.value = index;

  //point to true once the first item has been hovered.
  hasMouseEntered.value = true;
};

const favoriteArtists = [
  {
    id: 1,
    name: "Liked Songs",
    image: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
    color: "from-spotify-dim-blue/50",
  },
  {
    id: 2,
    name: "Kaskade",
    image: "https://i.scdn.co/image/ab6761610000f178c96f32c30b4c236b5b9c40fa",
    color: "from-slate-600",
  },
  {
    id: 3,
    name: "Polyphia",
    image: "https://i.scdn.co/image/ab6761610000e5ebdd353edbce04267bff979de6",
    color: "from-stone-500",
  },
  {
    id: 4,
    name: "Porter Robinson",
    image: "https://i.scdn.co/image/ab6761610000f1786ccb967cecc6f1da90fe355e",
    color: "from-sky-800",
  },
  {
    id: 5,
    name: "deadmau5",
    image: "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07",
    color: "from-pink-800",
  },
  {
    id: 5,
    name: "The Giving Moon",
    image: "https://i.scdn.co/image/ab6761610000e5eb91d9f44ce2c346a7c4825974",
    color: "from-amber-800",
  },
];
</script>

<template>
  <main class="relative min-h-screen bg-spotify-stone-dark">
    <div
      :class="[
        hasMouseEntered ? 'from-spotify-dim-blue/50' : 'from-stone-800',
        'absolute h-72 w-full bg-gradient-to-b to-spotify-stone-dark text-white transition-all duration-1000',
      ]"
    ></div>
    <div
      v-for="(artist, index) in favoriteArtists"
      :key="index"
      :class="[
        hoverIndex === index ? 'opacity-100' : 'opacity-0',
        'absolute z-30  h-72 w-full bg-gradient-to-b to-spotify-stone-dark transition-all duration-1000',
        `${artist.color}`,
      ]"
    ></div>

    <div class="relative z-30 px-6 py-4 transition-all duration-300">
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
              class="h-[1.95rem] rounded-full"
              src="https://secure.gravatar.com/avatar/3683a0f4629cd4e57fc226338b081615?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJR-6.png"
            />
            <span class="text-xs font-semibold text-white"> rushjs </span>
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
              @mouseover="hovering(artist, index)"
              @mouseleave="hoverIndex = null"
            >
              <div class="flex items-center">
                <img :src="artist.image" class="h-20 w-20 rounded-l" />
                <span class="ml-4 text-sm font-semibold">
                  {{ artist.name }}
                </span>
              </div>
              <div
                class="mr-4 rounded-full bg-spotify-green p-3 text-black opacity-0 shadow-spotify transition duration-500 hover:scale-105 group-hover:opacity-100"
              >
                <PlayIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 px-6 py-4">
      <span class="text-2xl font-bold text-gray-100">
        Popular Dance & Electronic playlists
      </span>
    </div>
  </main>
</template>
