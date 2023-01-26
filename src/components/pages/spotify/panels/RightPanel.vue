<script setup>
import AddFriendIcon from "@/components/icons/spotify/AddFriendIcon.vue";
import MusicNoteIcon from "@/components/icons/spotify/MusicNoteIcon.vue";
import BulletIcon from "@/components/icons/spotify/BulletIcon.vue";
import PlayIcon from "@/components/icons/spotify/PlayIcon.vue";
import XIcon from "@/components/icons/spotify/XIcon.vue";
import { reactive } from "vue";

let users = reactive({
  people: [],
});

fetch("https://randomuser.me/api/?results=8")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    users.people.push(data.results);
  });

const getFullName = (person) => {
  return `${person.name.first} ${person.name.last}`;
};

function getRandomNumber() {
  let max = 24;
  return Math.floor(Math.random() * max);
}

getRandomNumber();
</script>

<template>
  <div class="max-h-screen bg-spotify-stone-dark px-1 text-gray-300 xl:px-3">
    <div class="label-section mt-6 flex items-center justify-between">
      <span class="text-sm font-bold">Friend Activity</span>
      <div class="flex items-end space-x-2">
        <span>
          <AddFriendIcon class="h-4 w-4" />
        </span>
        <span>
          <XIcon class="h-4 w-4" />
        </span>
      </div>
    </div>
    <div
      v-if="users.people"
      v-for="(person, index) in users.people[0]"
      :key="index"
      class="friends-section mt-8 grid w-full grid-cols-12 last:mb-4"
    >
      <div class="col-span-3">
        <div class="group relative">
          <div
            class="absolute inset-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-black/50 via-black/30 to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <PlayIcon class="h-3.5 w-3.5 text-white" />
          </div>

          <img
            :src="person.picture.thumbnail"
            class="h-10 w-10 rounded-full border-2 border-transparent"
            alt="Avatar"
          />
        </div>
      </div>
      <div
        class="col-span-7 flex flex-col space-y-1 hover:cursor-pointer hover:text-white"
      >
        <span class="text-xs font-semibold hover:text-gray-100 hover:underline">
          {{ getFullName(person) }}
        </span>
        <div class="flex items-center space-x-2 text-[.65rem]">
          <span class="flex items-center space-x-1">
            <span class="w-14 truncate hover:text-gray-100 hover:underline">
              California Sun - EP</span
            >
            <span>
              <BulletIcon />
            </span>
            <span class="w-8 truncate hover:text-gray-100 hover:underline"
              >The Giving Moon</span
            >
          </span>
        </div>
        <div class="flex items-center space-x-2 text-[.65rem]">
          <span>
            <MusicNoteIcon class="h-3.5 w-3.5" />
          </span>
          <span class="hover:text-gray-100 hover:underline">
            California Sun
          </span>
        </div>
      </div>
      <div class="col-span-2 text-xs">{{ getRandomNumber() }} hr</div>
    </div>
  </div>
</template>
