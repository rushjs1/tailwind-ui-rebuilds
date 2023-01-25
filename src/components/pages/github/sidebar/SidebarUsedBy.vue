<template>
  <div class="space-y-6">
    <div class="space-x-2">
      <span class="cursor-pointer text-base font-semibold hover:text-blue-600"
        >Used By</span
      >
      <span class="rounded-full bg-gray-200 p-1">1.6m</span>
    </div>
    <div class="group flex items-center">
      <div class="flex items-center -space-x-2">
        <img
          v-for="(person, index) in users.people[0]"
          :key="index"
          :src="person.picture.thumbnail"
          alt="avatar"
          class="rounded-full border-2 border-white text-left hover:cursor-pointer hover:border-gray-100"
          width="35"
          height="35"
        />
      </div>
      <div>
        <span class="ml-2 cursor-pointer text-blue-600 group-hover:underline"
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
