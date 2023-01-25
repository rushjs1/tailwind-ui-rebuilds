<script setup>
import { ref } from "vue";
import ChevronRightIcon from "@/components/icons/spotify/ChevronRightIcon.vue";
import ChevronLeftIcon from "@/components/icons/spotify/ChevronLeftIcon.vue";
import MiniChevronDownIcon from "@/components/icons/spotify/MiniChevronDownIcon.vue";
import SectionHeading from "@/components/pages/spotify/SectionHeading.vue";
import PlayButton from "@/components/pages/spotify/PlayButton.vue";
import BasicTooltip from "@/components/custom/BasicTooltip.vue";
import SpotifyCard from "@/components/pages/spotify/SpotifyCard.vue";

const hasMouseEntered = ref(false);
const hoverIndex = ref(null);

const hovering = (index) => {
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
    color: "from-sky-800/80",
  },
  {
    id: 5,
    name: "deadmau5",
    image: "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07",
    color: "from-pink-800/60",
  },
  {
    id: 5,
    name: "The Giving Moon",
    image: "https://i.scdn.co/image/ab6761610000e5eb91d9f44ce2c346a7c4825974",
    color: "from-amber-800/60",
  },
];

const jumpBackIn = [
  {
    title: "Yacht Rock",
    body: "Cruise to the smooth grooves of these yacht rock tunes",
    image: "https://i.scdn.co/image/ab67706f000000026d722e56dec7b85a8e5306ee",
  },
  {
    title: "This is Jimmy Buffett",
    body: "This is Jimmy Buffett. The essential tracks, all in one playlist",
    image: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1diY80-default.jpg",
  },
  {
    title: "Go Higher",
    body: "Terravita, Chime, Akylla",
    image: "https://i.scdn.co/image/ab67616d00001e02d831e0e7b319b2b09ea7dc7a",
  },
  {
    title: "Kx5",
    body: "Artist",
    image: "https://i.scdn.co/image/ab6761610000517416bc0e61912361e0880f17a2",
  },
  {
    title: "Dreamhop * Happy Lofi - Daily dose of happiness",
    body: "Selection of uplifting lofi hiphop beats to brighten up your day. Whatever you're doing, this will make you feel happy!",
    image: "https://i.scdn.co/image/ab67706c0000da8421e109ab603f6170344d768f",
  },
];

const recentlyPlayed = [
  {
    title: "70s Road Trip",
    body: "Hit the road to the soundtrack of these seventies classics.",
    image: "https://i.scdn.co/image/ab67706f000000021b84822d2ae33438903454df",
  },
  {
    title: "Excision",
    body: "Artist",
    image: "https://i.scdn.co/image/ab6761610000f17811d1a065d36d1577fbe82ffa",
  },
  {
    title: "Excision",
    body: "Artist",
    image: "https://i.scdn.co/image/ab6761610000f17811d1a065d36d1577fbe82ffa",
  },
  {
    title: "This Is Skrillex",
    body: "The essential Skrillex originals and remixes, all in one playlist.",
    image: "https://i.scdn.co/image/ab67706f00000002a90d6064ee6625dbba0851c5",
  },
];
</script>

<template>
  <main class="relative min-h-screen bg-spotify-stone-dark">
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
      <div class="mt-4 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        <SpotifyCard
          v-for="(artist, index) in jumpBackIn"
          :key="index"
          :artist="artist"
        />
      </div>
    </div>
    <div class="mt-6 px-6 py-4">
      <SectionHeading title="Popular Dance & Electronic playlists" />
      <div class="mt-4">here</div>
    </div>
    <div class="mt-6 px-6 py-4">
      <SectionHeading title="Recently Played" />
      <div class="mt-4">here</div>
    </div>
  </main>
</template>
