<template>
  <div id="app" class="app">
    <HomeView />
  </div>
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue';

console.log('---- start App');
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #f0f0f0;
}
</style>
