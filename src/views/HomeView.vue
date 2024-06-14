<template>
  <a-row justify="center" item="center" class="container">
    <a-col :span="20">
      <h1 class="title">Тестовое задание</h1>
      <Spin v-if="!dataLoaded" />
      <Table v-if="dataLoaded" :leads="leads" :users="users" :companies="companies" :pipelines="pipelines" :statuses="statuses" />
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { fetchLeads, fetchUsers, fetchPipelines, fetchCompanies } from '../services/apiService';
import { getNames, getNamesStatuses, getParsCompanies } from '../utils/utils.ts';

import Table from '../components/Table.vue';
import Spin from '../components/Spin.vue';

import { iTableLead } from '../models/interfaces.ts';
import { typeNames, typeParsCompanies } from '../models/types.ts';

console.log('---- start HomePage');

const dataLoaded = ref(false);
const leads = ref<iTableLead[]>([]);
const users = ref<typeNames>({});
const companies = ref<typeParsCompanies>({});
const pipelines = ref<typeNames>({});
const statuses = ref<typeNames>({});

onMounted(async () => {
  try {
    const [allLeads, allUsers, allCompanies, allPipelines] = await Promise.all([
      fetchLeads(),
      fetchUsers(),
      fetchCompanies(),
      fetchPipelines(),
    ]);

    leads.value = allLeads;
    users.value = getNames(allUsers);
    companies.value = getParsCompanies(allCompanies);
    pipelines.value = getNames(allPipelines);
    statuses.value = getNamesStatuses(allPipelines);
    
    dataLoaded.value = true;
  } catch (fetchError) {
    console.error('Failed to fetch:', fetchError);
  }
});
</script>

<style scoped>
.container {
  padding-top: 30px;
}

.title {
  margin: 0 0 10px 0;
  padding: 0 0 0 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: x-large;
}
</style>
