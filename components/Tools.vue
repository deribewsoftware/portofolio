<template>
  <div class="flex flex-col gap-2">
    <div class="h-10 w-10 overflow-hidden rounded-full  ">
      <img :src="icon" alt="" class="object-contain  ">
    </div>
    <p class="font-semibold text-sm text-gray-500 dark:text-gray-400">{{ name }}</p>
    
  </div>
</template>

<script lang="ts" setup>
const props=defineProps({
  name: String,
  icon:String
})

</script>

<style>

</style>