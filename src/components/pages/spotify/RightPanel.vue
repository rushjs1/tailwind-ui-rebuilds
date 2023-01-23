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
  <div class="col-span-2 bg-spotify-stone-dark px-6 text-gray-300">
    <div class="label-section mt-6 flex items-center justify-between">
      <span class="text-md font-bold">Friend Activity</span>
      <div class="flex items-center space-x-2">
        <span>
          <AddFriendIcon class="h-5 w-5" />
        </span>
        <span>
          <XIcon />
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
          class="rounded-full border-2 border-transparent hover:border-emerald-500"
          alt="Avatar"
        />
      </div>
      <div
        class="col-span-7 flex flex-col space-y-1 hover:cursor-pointer hover:text-white"
      >
        <span class="font-semibold"> {{ getFullName(person) }} </span>
        <span class="flex items-center space-x-2 text-xs">
          <span class="flex items-center space-x-1">
            <span> Califor... </span>
            <span>
              <BulletIcon />
            </span>
            <span>The...</span>
          </span>
        </span>
        <div class="flex items-center space-x-2">
          <span>
            <TwoCirclesIcon />
          </span>
          <span class="text-xs"> California Su... </span>
        </div>
      </div>
      <div class="col-span-2 text-xs">2 hr</div>
    </div>
  </div>
</template>
