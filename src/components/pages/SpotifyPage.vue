<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-12 w-full h-screen">
      <div
        class="border border-blue-500 col-span-2 bg-gray-900 text-gray-300 px-6"
      >
        <div class="mac-buttons flex items-center justify-start space-x-2 mt-3">
          <div class="bg-red-500 w-3 rounded-full h-3 hover:cursor-pointer">
            &nbsp;
          </div>
          <div class="bg-amber-400 w-3 rounded-full h-3 hover:cursor-pointer">
            &nbsp;
          </div>
          <div class="bg-emerald-500 w-3 rounded-full h-3 hover:cursor-pointer">
            &nbsp;
          </div>
        </div>
        <div class="left-panel-navigation mt-5 font-bold text-xl">
          <div
            class="py-2 space-x-3 flex items-center hover:text-white hover:cursor-pointer"
          >
            <HomeIcon />
            <span>Home</span>
          </div>
          <div
            class="py-2 space-x-3 flex items-center hover:text-white hover:cursor-pointer"
          >
            <SearchIcon />
            <span>Search</span>
          </div>
          <div
            class="py-2 space-x-3 flex items-center hover:text-white hover:cursor-pointer"
          >
            <CollectionIcon />
            <span> Your Library</span>
          </div>
        </div>
        <div class="left-panel-actions mt-4 font-bold text-lg">
          <div
            class="hover:text-white hover:cursor-pointer py-2 flex items-center space-x-3"
          >
            <div class="bg-gray-300 p-1">
              <PlusIcon />
            </div>
            <span> Create Playlist</span>
          </div>
          <div
            class="hover:text-white hover:cursor-pointer py-2 flex items-center space-x-3"
          >
            <div
              class="bg-gradient-to-r from-indigo-700 via-indigo-400 to-gray-300 p-1"
            >
              <HeartIcon />
            </div>
            <span>Liked Songs</span>
          </div>
        </div>
        <div class="left-panel-playlists mt-3 text-gray-400">
          <hr />
          <div class="mt-4">
            <div class="hover:text-white hover:cursor-pointer">PlayList 1</div>
            <div class="hover:text-white hover:cursor-pointer">playlist 2</div>
            <div class="hover:text-white hover:cursor-pointer">Playlist 3</div>
            <div class="hover:text-white hover:cursor-pointer">Playlist 4</div>
            <div class="hover:text-white hover:cursor-pointer">Playlist 5</div>
            <div class="hover:text-white hover:cursor-pointer">Playlist 6</div>
          </div>
        </div>
      </div>
      <div class="border border-gray-500 col-span-8">Two</div>
      <div class="border border-green-500 col-span-2">Three</div>
    </div>
  </div>
</template>

<script setup>
import HomeIcon from "@/components/icons/spotify/HomeIcon.vue";
import SearchIcon from "@/components/icons/spotify/SearchIcon.vue";
import CollectionIcon from "@/components/icons/spotify/CollectionIcon.vue";
import PlusIcon from "@/components/icons/spotify/PlusIcon.vue";
import HeartIcon from "@/components/icons/spotify/HeartIcon.vue";
</script>
