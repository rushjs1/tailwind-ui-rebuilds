<template>
  <div
    class="bg-black flex items-center justify-center h-screen w-screen text-3xl"
  >
    <div
      class="flex flex-col space-y-4 border-2 border-emerald-400 p-4 rounded-lg text-emerald-300 text-center"
    >
      <div>404 Page Not found</div>
      <span>Something went wrong.</span>
      <span
        @click="goBack"
        class="bg-emerald-700 border-2 border-emerald-400 rounded-lg text-emerald-300 hover:cursor-pointer hover:bg-emerald-300 hover:text-emerald-700"
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
