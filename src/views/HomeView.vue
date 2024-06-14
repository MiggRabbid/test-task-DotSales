<template>
  <a-row justify="center" item="center" class="container">
    <a-col :span="20">
      <h1 class="title">Тестовое задание</h1>
      <Table />
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import Table from '../components/Table.vue';

console.log('---- start HomePage');
</script>

<style scoped>

.container {
  padding-top: 30px;
}

.title {
  margin: 0 0 10px 0;
  padding: 0 0 0 15px ;
  text-transform: uppercase;
  font-weight: bold;
  font-size: x-large;
}

</style>
