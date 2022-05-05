<template>
  <div class="home-page">
    <div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/github-ui">Github</RouterLink>
      </nav>
      <h1 class="title">Home</h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home-page {
  padding: 2rem;
  margin: 0 auto;
  text-decoration: none;
}
nav {
  font-size: 18px;
  display: inline-block;
  width: 100%;
}
nav a {
  padding: 0 1rem;
  text-decoration: none;
  color: rgb(106, 106, 106);
}
nav a:hover {
  text-decoration: underline;
}

.title {
  padding: 0 1rem;
}
</style>
