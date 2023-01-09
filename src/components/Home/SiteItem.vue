<template>
  <div class="item-box flex flex-col items-center mb-8 mx-4">
    <RouterLink :to="`/${title}-ui`">
      <div
        class="boxes bg-gray-400 h-22 w-22 rounded-full shadow-md flex items-center justify-center rounded-lg cursor-pointer transition duration-300"
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
