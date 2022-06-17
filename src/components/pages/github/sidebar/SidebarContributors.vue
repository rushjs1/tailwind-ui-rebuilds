<template>
  <div class="flex flex-col space-y-3">
    <div class="flex items-center space-x-2">
      <span class="text-base font-semibold hover:text-blue-600 cursor-pointer"
        >Contributors</span
      >
      <span class="bg-gray-200 rounded-full px-2 text-center"> 232 </span>
    </div>

    <div class="flex items-center flex-wrap">
      <img
        v-for="(person, index) in users.people[0]"
        :key="index"
        :src="person.picture.thumbnail"
        class="rounded-full mr-3 mt-3 w-9"
      />
    </div>
    <div>
      <span class="text-blue-600 hover:underline cursor-pointer"
        >+ 221 contributors</span
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const users = reactive({
  people: [],
});

fetch("https://randomuser.me/api/?results=11")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    users.people.push(data.results);
    console.log(users.people[0]);
  });
</script>
