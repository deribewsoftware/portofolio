<template>
  <div class="flex flex-col gap-2 justify-center">
    <div class="border border-green-400  h-12  w-12 flex items-center justify-center rounded-full">
      <h1 class="   text-2xl text-center text-rose-600 dark:text-green-400 font-semibold">{{ value }} +</h1>
    </div>
    
    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">{{label }}</p>
    
  </div>
</template>

<script lang="ts" setup>
defineProps({
label:String,
value:String
})
</script>

<style>

</style>