<template>
  <div class="text-sm text-gray-900">
    <Nav />
    <RepoContainer />
    <div class="container mx-auto my-8 flex px-4">
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
