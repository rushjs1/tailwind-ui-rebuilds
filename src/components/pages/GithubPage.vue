<template>
  <div class="text-gray-900 text-sm">
    <Nav />
    <RepoContainer />
    <div class="container mx-auto my-8 px-4 flex">
      <FileExplorerContainer />
      <div class="sidebar w-1/4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui harum
        aperiam expedita ipsum sint incidunt, commodi odit voluptatum nam
        numquam nihil velit voluptates doloribus veniam voluptate doloremque
        minima placeat eos?
      </div>
    </div>
  </div>
</template>

<script setup>
//components
import Nav from "@/components/pages/github/Nav.vue";
import RepoContainer from "@/components/pages/github/RepoContainer.vue";
import FileExplorerContainer from "@/components/pages/github/FileExplorerContainer.vue";
//icons
import FolderIcon from "@/components/icons/github/FolderIcon.vue";
</script>
