<template>
  <a-table
    :columns="columns"
    :data-source="[record]"
    :pagination="false"
    size="middle"
    bordered
    responsive
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.key === 'company'">
        {{ companies[text]?.name || 'Компания не найдена' }}
      </template>
      <template v-else-if="column.key === 'address'">
        {{ companies[text]?.address || 'Адрес не найден' }}
      </template>
      <template v-else-if="column.key === 'responsible_user_id'">
        {{ users[text] || 'Пользователь не найден' }}
      </template>
      <template v-else-if="column.key === 'closed_at'">
        {{ formatDate(text) }}
      </template>
      <template v-else-if="column.key === 'created_at'">
        {{ formatDate(text) }}
      </template>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { formatDate } from '../utils/utils.ts';

console.log('---- start ExpandedRow');

interface iExpandedRowProps {
  record: Record<string, any>;
  companies: Record<string, any>;
  users: Record<string, string>;
}

// @ts-ignore
const props = defineProps<iExpandedRowProps>();

const columns = [
  {
    title: 'Компания',
    dataIndex: 'company',
    key: 'company',
    width: '25%',
  },
  {
    title: 'Адрес',
    dataIndex: 'company',
    key: 'address',
    width: '25%',
  },
  {
    title: 'Ответственный',
    dataIndex: 'responsible_user_id',
    key: 'responsible_user_id',
    width: '20%',
  },
  {
    title: 'Дата создания',
    dataIndex: 'created_at',
    key: 'created_at',
    width: '15%',
  },
  {
    title: 'Дата закрытия',
    dataIndex: 'closed_at',
    key: 'closed_at',
    width: '15%',
  },
];
</script>
