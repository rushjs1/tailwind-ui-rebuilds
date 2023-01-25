<script setup>
import HomeIcon from "@/components/icons/spotify/HomeIcon.vue";
import SearchIcon from "@/components/icons/spotify/SearchIcon.vue";
import CollectionIcon from "@/components/icons/spotify/CollectionIcon.vue";
import PlusIcon from "@/components/icons/spotify/PlusIcon.vue";
import HeartIcon from "@/components/icons/spotify/HeartIcon.vue";
</script>

<template>
  <div class="bg-black px-6 text-gray-300">
    <div class="mac-buttons mt-3 flex items-center justify-start space-x-2">
      <div class="h-3 w-3 rounded-full bg-red-500 hover:cursor-pointer">
        &nbsp;
      </div>
      <div class="h-3 w-3 rounded-full bg-amber-400 hover:cursor-pointer">
        &nbsp;
      </div>
      <div class="h-3 w-3 rounded-full bg-emerald-500 hover:cursor-pointer">
        &nbsp;
      </div>
    </div>
    <div class="left-panel-navigation mt-5 font-semibold">
      <div
        class="flex items-center space-x-3 py-2 text-white hover:cursor-pointer"
      >
        <HomeIcon />
        <span>Home</span>
      </div>
      <div
        class="flex items-center space-x-3 py-2 hover:cursor-pointer hover:text-white"
      >
        <SearchIcon />
        <span>Search</span>
      </div>
      <div
        class="flex items-center space-x-3 py-2 hover:cursor-pointer hover:text-white"
      >
        <CollectionIcon />
        <span> Your Library</span>
      </div>
    </div>
    <div class="left-panel-actions mt-4 font-semibold">
      <div
        class="flex items-center space-x-3 py-2 hover:cursor-pointer hover:text-white"
      >
        <div class="bg-gray-300 p-1">
          <PlusIcon />
        </div>
        <span> Create Playlist</span>
      </div>
      <div
        class="flex items-center space-x-3 py-2 hover:cursor-pointer hover:text-white"
      >
        <div
          class="bg-gradient-to-br from-indigo-700 via-indigo-400 to-gray-300 p-1"
        >
          <HeartIcon />
        </div>
        <span>Liked Songs</span>
      </div>
    </div>
    <div class="left-panel-playlists mt-3 text-gray-400">
      <hr class="h-px border-0 bg-stone-700" />
      <div class="mt-4 space-y-2 text-xs text-stone-400">
        <div class="hover:cursor-pointer hover:text-white">BR</div>
        <div class="hover:cursor-pointer hover:text-white">Lofi</div>
        <div class="hover:cursor-pointer hover:text-white">
          Christmas Classics
        </div>
        <div class="hover:cursor-pointer hover:text-white">
          Your top songs 2022
        </div>
        <div class="hover:cursor-pointer hover:text-white">Techno</div>
        <div class="hover:cursor-pointer hover:text-white">Work Mode</div>
        <div class="hover:cursor-pointer hover:text-white">
          Jessica + Nelson + Mark + Rushjs
        </div>
        <div class="hover:cursor-pointer hover:text-white">
          This is Skrillex
        </div>
        <div class="hover:cursor-pointer hover:text-white">Chime | Live</div>
        <div class="hover:cursor-pointer hover:text-white">
          Your top songs 2021
        </div>
      </div>
    </div>
  </div>
</template>
