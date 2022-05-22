<template>
  <div class="item-box flex flex-col items-center mb-8 mx-4">
    <RouterLink :to="`/${title}-ui`">
      <div
        class="boxes bg-gray-400 h-22 w-22 rounded-full shadow-md flex items-center justify-center hover:bg-gray-500 rounded-lg cursor-pointer"
      >
        <component :is="icon[0]" />
      </div>
    </RouterLink>
    <span class="mt-4 font-bold text-slate-200 cursor-pointer">
      {{ title }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    required: true,
    type: String,
  },
  icon: {
    required: true,
    type: Array,
  },
});
</script>
