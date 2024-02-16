<template>
  <div class="flex justify-start items-center py-20">
    <div class="flex flex-col justify-start items-center gap-4">
      <h1>List of Courses</h1>
      


    <div class="flex justify-between w-full">
      <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 justify-start w-full">
      <UInput v-model="q" placeholder="Filter people..." />
    </div>
    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
      <USelectMenu v-model="selectedColumns" :options="columns" multiple placeholder="Columns" />
    </div>

    </div>
    <UTable
    sort-asc-icon="i-heroicons-arrow-up-20-solid"
    sort-desc-icon="i-heroicons-arrow-down-20-solid"
    :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
    class="w-full"
    :columns="selectedColumns"
    :rows="filteredRows"
  />



    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

definePageMeta({
  layout:"dashboard"
})

const columns = [{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name', sortable: true }, { key: 'title', label: 'Title', sortable: true }, { key: 'email', label: 'Email', sortable: true }, { key: 'role', label: 'Role' }]


const selectedColumns = ref([...columns])
const people = [{ id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' }, { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' }, { id: 3, name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' }, { id: 4, name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' }, { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' }, { id: 6, name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' }]

const q = ref('')

const filteredRows = computed(() => {
  if (!q.value) {
    return people
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})
</script>

<style>

</style>