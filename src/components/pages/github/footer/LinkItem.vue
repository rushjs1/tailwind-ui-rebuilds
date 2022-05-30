<template>
  <div class="hover:underline cursor-pointer">
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
