<template>
  <div class="border border-green-500 col-span-2 bg-black text-gray-300 px-6">
    <div class="label-section mt-2 flex items-center justify-between">
      <span class="font-bold text-md">Friend Activity</span>
      <span>
        <AddFriendIcon />
      </span>
    </div>
    <div
      v-if="users.people"
      v-for="(person, index) in users.people[0]"
      :key="index"
      class="friends-section mt-8 grid grid-cols-12 w-full"
    >
      <div class="col-span-3" @click="getUser">
        <img
          :src="person.picture.thumbnail"
          class="rounded-full border-2 border-transparent hover:border-emerald-500"
          alt="Avatar"
        />
      </div>
      <div
        class="col-span-7 flex flex-col hover:text-white hover:cursor-pointer"
      >
        <span class="font-semibold"> {{ getFullName(person) }} </span>
        <span class="text-sm flex space-x-2 items-center">
          <span>
            <svg height="10" width="10">
              <circle
                cx="5"
                cy="5"
                r="2.5"
                stroke="#ffffff"
                stroke-width=".5"
                fill="none"
              />
              <circle
                cx="5"
                cy="5"
                r=".7"
                stroke="#ffffff"
                stroke-width=".5"
                fill="none"
              />
            </svg>
          </span>
          <span class="flex items-center space-x-1">
            <span> Califor... </span>
            <span>
              <svg height="10" width="10">
                <circle
                  cx="5"
                  cy="5"
                  r=".9"
                  stroke="#ffffff"
                  stroke-width=".5"
                  fill="#ffffff"
                />
              </svg>
            </span>
            <span>The...</span>
          </span>
        </span>
      </div>
      <div class="col-span-2 text-xs">2 hr</div>
    </div>
  </div>
</template>

<script setup>
import AddFriendIcon from "@/components/icons/spotify/AddFriendIcon.vue";
import { reactive, computed, onMounted, onBeforeMount } from "vue";

let users = reactive({
  people: [],
});

/* for (var i = 0; i < 4; i++) {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      users.people.push(data.results[0]);
      console.log(users);
    });
} */

fetch("https://randomuser.me/api/?results=8")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    users.people.push(data.results);
    console.log(users.people[0]);
  });

const getFullName = (person) => {
  return `${person.name.first} ${person.name.last}`;
};
</script>
