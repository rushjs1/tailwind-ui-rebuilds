<script setup>
import AddFriendIcon from "@/components/icons/spotify/AddFriendIcon.vue";
import TwoCirclesIcon from "@/components/icons/spotify/TwoCirclesIcon.vue";
import BulletIcon from "@/components/icons/spotify/BulletIcon.vue";
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
      <div class="col-span-3" @click="getUser">
        <img
          :src="person.picture.thumbnail"
          class="h-10 w-10 rounded-full border-2 border-transparent hover:border-emerald-500"
          alt="Avatar"
        />
      </div>
      <div
        class="col-span-7 flex flex-col space-y-1 hover:cursor-pointer hover:text-white"
      >
        <span class="text-xs font-semibold"> {{ getFullName(person) }} </span>
        <div class="flex items-center space-x-2 text-[.65rem]">
          <span class="flex items-center space-x-1">
            <span> Califor... </span>
            <span>
              <BulletIcon />
            </span>
            <span>The...</span>
          </span>
        </div>
        <div class="flex items-center space-x-2 text-[.65rem]">
          <span>
            <TwoCirclesIcon />
          </span>
          <span> California Su... </span>
        </div>
      </div>
      <div class="col-span-2 text-xs">2 hr</div>
    </div>
  </div>
</template>
