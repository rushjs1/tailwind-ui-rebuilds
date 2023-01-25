<template>
  <div class="text-sm text-gray-900 transition-spacing duration-300">
    <Nav />
    <RepoContainer />
    <div
      class="lg:32 my-8 flex w-full items-start justify-center px-4 transition-spacing duration-300 xl:px-44"
    >
      <FileExplorerContainer class="w-full lg:mr-8 lg:w-3/4" />
      <SidebarContainer class="hidden lg:block" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
//components
import Nav from "@/components/pages/github/Nav.vue";
import Footer from "@/components/pages/github/footer/Footer.vue";
import SidebarContainer from "@/components/pages/github/sidebar/SidebarContainer.vue";
import RepoContainer from "@/components/pages/github/RepoContainer.vue";
import FileExplorerContainer from "@/components/pages/github/FileExplorerContainer.vue";
</script>
