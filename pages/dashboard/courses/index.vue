<template>
  <div class="min-h-screen flex justify-start items-center py-20">
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
    :rows="courses">

    <template #name-data="{ row }">
      <span >Deribew </span>
    </template>
    <template #actions-data="{ row }">
      <UDropdown :items="items(row)">
        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
      </UDropdown>
    </template>
</UTable>



    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

definePageMeta({
  layout:"dashboard"
})



const items = (row) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

const columns = [{ key: 'id', label: 'ID' },
 { key: 'title', label: 'Subject', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'level', label: 'Level', sortable: true },
   { key: 'email', label: 'Learners', sortable: true }, 
   { key: 'price', label: 'Price', sortable: true },
   { key: 'email', label: 'Chapters', sortable: true },]


const selectedColumns = ref([...columns])
const people = [{ id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' }, { id: 2, name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' }, { id: 3, name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' }, { id: 4, name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' }, { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' }, { id: 6, name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' }]

const q = ref('')

// const filteredRows = computed(() => {
//   if (!q.value) {
//     return courses
//   }

//   return courses.values.filter((course:any) => {
//     return Object.values(course).some((value) => {
//       return String(value).toLowerCase().includes(q.value.toLowerCase())
//     })
//   })
// })


const {pending,data:courses}=useFetch("/api/course/list",{
  lazy:false,
  server:false,
})


console.log("courses",courses)
</script>

<style>

</style>