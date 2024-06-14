<template>
  <a-table
    :columns="columns"
    :data-source="leads"
    :expandedRowKeys="expandedRowKeys"
    :pagination="false"
    rowKey="id"
    @expand="onExpand"
    bordered
    responsive
    class="container"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.key === 'pipeline_id'">
        {{ pipelines[text] }}
      </template>
      <template v-else-if="column.key === 'created_at'">
        {{ formatDate(text) }}
      </template>
      <template v-else-if="column.key === 'status_id'">
        <span>
          <a-tag :color="getStatusColor(statuses[text])">
            {{ statuses[text] }}
          </a-tag>
        </span>
      </template>
    </template>

    <template #expandedRowRender="{ record }">
      <ExpandedRow :record="record" :companies="companies" :users="users" />
    </template>
    
    <template #footer></template>
  </a-table>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue';

import { formatDate, getStatusColor } from '../utils/utils.ts';

import ExpandedRow from './ExpandedRow.vue'

import { iTableLead } from '../models/interfaces.ts';
import { typeNames, typeParsCompanies } from '../models/types.ts';

console.log('---- start Table');

interface iTableProps {
  leads: iTableLead[];
  users: typeNames;
  companies: typeParsCompanies;
  pipelines: typeNames;
  statuses: typeNames;
}

// @ts-ignore
const props = defineProps<iTableProps>();

const expandedRowKeys = ref<number[]>([]);

const onExpand = (expanded: boolean, record: iTableLead) => {
  if (expanded) {
    expandedRowKeys.value.push(record.id);
  } else {
    expandedRowKeys.value = expandedRowKeys.value.filter(key => key !== record.id);
  }
};

const columns = [
  {
    title: 'СДЕЛКА',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'ВОРОНКА',
    dataIndex: 'pipeline_id',
    key: 'pipeline_id',
    width: '20%',
  },
  {
    title: 'БЮДЖЕТ, €',
    dataIndex: 'price',
    key: 'price',
    width: '20%',
  },
  {
    title: 'СТАТУС СДЕЛКИ',
    dataIndex: 'status_id',
    key: 'status_id',
    width: '20%',
  },
  {
    title: 'ДАТА ОБНОВЛЕНИЯ',
    dataIndex: 'updated_at',
    key: 'updated_at',
    width: '20%',
  },
];
</script>

<style scoped>
.container {
  overflow: hidden;
  border-radius: 10px;
}
</style>

