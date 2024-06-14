<template>
  <a-table :columns="columns" :data-source="leads" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.key === 'responsible_user_id'">
        {{ users[text] }}
      </template>
      <template v-else-if="column.key === 'created_at'">
        {{ getDate(text) }}
      </template>
      <template v-else>
        {{ text }}
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fetchLeads, fetchUsers, fetchPipelines } from '../services/apiService';
import { getNames, getDate } from '../utils/utils.ts';


console.log('---- start Table');

const leads = ref([]);
const users = ref([]);
const pipelines = ref([]);
const statuses = ref([]);

onMounted(async () => {
  try {
    leads.value = await fetchLeads();

    const allUsers = await fetchUsers();
    users.value = getNames(allUsers);


    const allPipelines = await fetchPipelines();
    pipelines.value = getNames(allPipelines);

    console.log(users.value);
    console.log(pipelines.value);
  } catch (fetchError) {
    console.error('Failed to fetch:', fetchError);
  }
});

const columns = [
  {
    title: 'НАЗВАНИЕ СДЕЛКИ',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'БЮДЖЕТ, €',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'СТАТУС СДЕЛКИ',
    dataIndex: 'status_id',
    key: 'status_id',
  },
  {
    title: 'ОТВЕТСТВЕННЫЙ',
    dataIndex: 'responsible_user_id',
    key: 'responsible_user_id',
  },
  {
    title: 'ДАТА СОЗДАНИЯ',
    dataIndex: 'created_at',
    key: 'created_at',
  },
];
</script>

