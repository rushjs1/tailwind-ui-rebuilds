<template>
  <div class="text-gray-900 text-sm">
    <Nav />
    <RepoContainer />
    <div class="container mx-auto my-8 px-4 flex">
      <FileExplorerContainer />
      <SidebarContainer />
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
//icons
import FolderIcon from "@/components/icons/github/FolderIcon.vue";
</script>
