<template>
  <div
    class="bg-glow2 bg-center bg-cover bg-slate-900 flex items-center justify-center h-screen w-screen text-3xl"
  >
    <div
      class="flex flex-col space-y-4 border-2 border-sky-400 p-4 rounded-lg text-sky-300 text-center"
    >
      <div>Page Not found</div>
      <span
        @click="goBack"
        class="bg-sky-700 border-2 border-sky-400 rounded-lg text-sky-300 hover:cursor-pointer hover:bg-sky-300 hover:text-sky-700"
        >Go Back</span
      >
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.push("/");
};
</script>
