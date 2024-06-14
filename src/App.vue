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
  background-color: #E5E5E5;
}
</style>
