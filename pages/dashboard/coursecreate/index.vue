<template>
  <div class="py-20 flex flex-col gap-20 ">
    <h1>Create Course</h1>
    <div class=" flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2  gap-20  px-4">
        <UiInput label="Title" v-model="data.name"/>

        <USelectMenu
    v-model="selected"
    :loading="loading"
    :searchable="search"
    placeholder="Search for a category..."
    option-attribute="name"

    trailing
    by="id"
  />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

definePageMeta({
  layout:"dashboard"
})


const data={name:"select"}
const loading = ref(false)
const selected = ref([])

async function search (q: string) {
  loading.value = true

  const categories = await $fetch<any[]>('/api/category/course/list', { params: { q } })

  loading.value = false

  return categories
}
</script>

<style>

</style>