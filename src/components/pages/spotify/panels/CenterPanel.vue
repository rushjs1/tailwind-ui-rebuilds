<script setup>
import { ref } from "vue";
import ChevronRightIcon from "@/components/icons/spotify/ChevronRightIcon.vue";
import ChevronLeftIcon from "@/components/icons/spotify/ChevronLeftIcon.vue";
import MiniChevronDownIcon from "@/components/icons/spotify/MiniChevronDownIcon.vue";
import SectionHeading from "@/components/pages/spotify/SectionHeading.vue";
import PlayButton from "@/components/pages/spotify/PlayButton.vue";
import BasicTooltip from "@/components/custom/BasicTooltip.vue";
import SpotifyCard from "@/components/pages/spotify/SpotifyCard.vue";
import {
  favoriteArtists,
  jumpBackIn,
  recentlyPlayed,
  yourTopMixes,
} from "@/composables/data/useArtists.js";

const hasMouseEntered = ref(false);
const hoverIndex = ref(null);

const hovering = (index) => {
  //set index to the hovered items index
  hoverIndex.value = index;

  //point to true once the first item has been hovered.
  hasMouseEntered.value = true;
};
</script>

<template>
  <main
    class="relative max-h-screen min-h-screen overflow-y-scroll bg-spotify-stone-dark hide-scrollbar"
  >
    <!--     when you first land on the spotify home page, there seems to be this faint stone color gradient, after you hover any of the cards it will transition to the dim blue upon mouseleave.  -->
    <div
      :class="[
        hasMouseEntered ? 'from-spotify-dim-blue/50' : 'from-stone-800',
        'absolute h-72 w-full bg-gradient-to-b to-spotify-stone-dark text-white transition-all duration-1000',
      ]"
    ></div>
    <!--    render a div for each of the 6 cards, set their respective color to its background with a gradient, transition the opacity to give a similar effect as the spotify transitioning gradients effect  -->
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
          <div
            class="mt-4 flex grid-cols-2 flex-col gap-4 md:grid lg:grid-cols-3"
          >
            <button
              v-for="(artist, index) in favoriteArtists"
              :key="index"
              class="group flex w-full items-center justify-between rounded bg-spotify-liked-card transition duration-500 hover:bg-spotify-liked-card-hover"
              @mouseover="hovering(index)"
              @mouseleave="hoverIndex = null"
            >
              <div class="flex items-center">
                <img :src="artist.image" class="h-20 w-20 shrink-0 rounded-l" />
                <span class="ml-4 text-left text-sm font-semibold">
                  {{ artist.name }}
                </span>
              </div>
              <PlayButton />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 px-6 py-4">
      <SectionHeading title="Jump back in" />
      <div
        class="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
      >
        <SpotifyCard
          v-for="(artist, index) in jumpBackIn"
          class="last:hidden xl:last:block"
          :rounded-img="artist.rounded"
          :key="index"
          :artist="artist"
        />
      </div>
    </div>
    <div class="mt-6 px-6 py-4">
      <SectionHeading title="Recently Played" />
      <div
        class="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
      >
        <SpotifyCard
          v-for="(artist, index) in recentlyPlayed"
          class="last:hidden xl:last:block"
          :rounded-img="artist.rounded"
          :key="index"
          :artist="artist"
        />
      </div>
    </div>
    <div class="mt-6 px-6 py-4">
      <SectionHeading title="Your top mixes" />
      <div
        class="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
      >
        <SpotifyCard
          v-for="(artist, index) in yourTopMixes"
          class="last:hidden xl:last:block"
          :key="index"
          :artist="artist"
        />
      </div>
    </div>
    <!-- <div class="mt-6 px-6 py-4">
      <SectionHeading title="Popular Dance & Electronic playlists" />
      <div>herre</div>
    </div> -->
  </main>
</template>
