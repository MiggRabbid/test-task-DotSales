
<template>
    <Table />
</template>

<script setup lang="ts">
import fetchData from '../services/apiService'

import Table from '../components/Table.vue'

console.log('---- start HomePage');
fetchData();
</script>

<style scoped>
</style>