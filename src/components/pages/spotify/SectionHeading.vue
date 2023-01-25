<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});
</script>
<template>
  <div class="flex items-center justify-between">
    <span class="text-2xl font-bold text-gray-100"> {{ props.title }} </span>

    <button class="text-xs font-bold text-gray-400 hover:underline">
      SHOW ALL
    </button>
  </div>
</template>
