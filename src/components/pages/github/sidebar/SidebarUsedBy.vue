<template>
  <div class="space-y-6">
    <div class="space-x-2">
      <span class="font-semibold text-base hover:text-blue-600 cursor-pointer"
        >Used By</span
      >
      <span class="bg-gray-200 p-1 rounded-full">1.6m</span>
    </div>
    <div class="flex items-center group">
      <div class="flex items-center -space-x-2">
        <img
          v-for="(person, index) in users.people[0]"
          :key="index"
          :src="person.picture.thumbnail"
          alt="avatar"
          class="rounded-full text-left border-2 border-white hover:border-gray-100 hover:cursor-pointer"
          width="35"
          height="35"
        />
      </div>
      <div>
        <span class="text-blue-600 ml-2 group-hover:underline cursor-pointer"
          >+1,585,124</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
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
    console.log(users.people[0]);
  });
</script>
