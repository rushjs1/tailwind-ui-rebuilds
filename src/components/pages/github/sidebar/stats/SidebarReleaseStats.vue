<template>
  <div class="group cursor-pointer">
    <div>
      <span class="text-base font-semibold hover:text-blue-600 cursor-pointer">
        Releases
      </span>
      <span class="bg-gray-200 px-2 py-[.2rem] rounded-full"> 192 </span>
    </div>
    <div class="mt-4 flex items-center space-x-2">
      <TagIcon class="group-hover:text-blue-600" />
      <div class="flex items-center space-x-2">
        <span class="font-semibold text-base group-hover:text-blue-600"> v3.0.24 </span>
        <span class="border border-green-700 px-2 py-[.1rem] rounded-full text-green-700">
          Latest
        </span>
      </div>
    </div>
    <span class="text-gray-600 text-sm ml-6 group-hover:text-blue-600">on Apr 12 </span>

    <div class="text-blue-600 mt-6 hover:underline">+ 191 releases</div>
  </div>
</template>

<script setup>
import TagIcon from "@/components/icons/github/TagIcon.vue";
</script>
