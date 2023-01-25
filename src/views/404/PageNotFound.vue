<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div
    class="flex h-screen w-screen items-center justify-center bg-slate-900 bg-glow2 bg-cover bg-center text-3xl"
  >
    <div
      class="flex flex-col space-y-4 rounded-lg border-2 border-sky-400 p-4 text-center text-sky-300"
    >
      <div>Page Not found</div>
      <span
        @click="goBack"
        class="rounded-lg border-2 border-sky-400 bg-sky-700 text-sky-300 hover:cursor-pointer hover:bg-sky-300 hover:text-sky-700"
        >Go Back</span
      >
    </div>
  </div>
</template>
