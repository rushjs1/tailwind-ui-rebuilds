<script setup>
import { ref } from "vue";

const props = defineProps({
  position: {
    required: true,
    type: String,
    default: () => "top",
  },
});
</script>
<template>
  <div class="group relative flex flex-col items-center justify-center">
    <div
      v-if="props.position === 'top'"
      class="absolute bottom-10 mt-2 w-fit rounded bg-stone-700 px-2 py-1 text-xs text-white opacity-0 transition duration-300 group-hover:opacity-100"
    >
      <slot name="top" />
    </div>

    <div>
      <slot />
    </div>

    <div
      v-if="props.position === 'btm'"
      class="absolute top-8 mt-2 w-fit rounded bg-stone-700 px-2 py-1 text-xs text-white opacity-0 transition duration-300 group-hover:opacity-100"
    >
      <slot name="btm" />
    </div>
  </div>
</template>
