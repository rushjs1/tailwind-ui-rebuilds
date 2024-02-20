<script setup>
import LeftSection from "@/components/pages/spotify/footer/LeftSection.vue";
import CenterSection from "@/components/pages/spotify/footer/CenterSection.vue";
import RightSection from "@/components/pages/spotify/footer/RightSection.vue";
</script>
<template>
  <div
    class="flex w-full items-center justify-between border-t border-[#282828] bg-spotify-card px-4 py-2 text-gray-100"
  >
    <div class="w-1/3">
      <LeftSection />
    </div>
    <div class="w-1/3">
      <CenterSection />
    </div>
    <div class="flex w-1/3 items-end justify-end">
      <RightSection />
    </div>
  </div>
</template>
