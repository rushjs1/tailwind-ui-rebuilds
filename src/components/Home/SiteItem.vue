<template>
  <div class="item-box mx-4 mb-8 flex flex-col items-center">
    <RouterLink :to="`/${title}-ui`">
      <div
        class="boxes flex h-22 w-22 cursor-pointer items-center justify-center rounded-lg bg-gray-400 shadow-md transition duration-300 ease-in-out"
      >
        <component :is="icon[0]" />
      </div>
    </RouterLink>
    <span class="mt-4 cursor-pointer font-bold text-slate-200">
      {{ title }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  icon: {
    required: true,
    type: Array,
  },
  icolor: {
    required: false,
    type: String,
  },
});

console.log(props.icolor);

const i_color = computed(() => {
  return props.icolor;
});
</script>

<style>
.boxes {
  background-color: dodgerblue;
}

.boxes:hover {
  background-color: v-bind(i_color);
}
</style>
