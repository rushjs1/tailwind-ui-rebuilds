<template>
  <div class="item-box flex flex-col items-center mb-8 mx-4">
    <div
      class="circle bg-gray-400 h-22 w-22 rounded-full shadow-md flex items-center justify-center hover:bg-gray-500 rounded-lg"
    >
      <component :is="icon[0]" />
    </div>
    <span class="mt-4 font-bold text-slate-200"> {{ title }} </span>
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
