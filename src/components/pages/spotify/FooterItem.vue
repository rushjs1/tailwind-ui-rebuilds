<script setup>
const props = defineProps({
  items: {
    required: false,
    type: Array,
  },
  title: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-col space-y-2">
    <span class="text-sm font-bold text-gray-100">
      <slot name="title" />
    </span>
    <div class="flex flex-col space-y-2 child:text-sm child:text-gray-400">
      <button
        v-for="(item, index) in props.items"
        :key="index"
        class="text-left transition duration-200 hover:cursor-pointer hover:text-gray-100 hover:underline"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>
