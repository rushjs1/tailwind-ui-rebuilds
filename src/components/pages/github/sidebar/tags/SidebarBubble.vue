<template>
  <div
    class="bg-sky-200/60 text-blue-600 px-2 py-[.2rem] rounded-full text-center mr-1 mt-1 hover:bg-blue-600 hover:text-gray-100 cursor-pointer"
  >
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    required: true,
    type: String,
  },
});
</script>
