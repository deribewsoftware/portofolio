<template>
   <p class="flex gap-2 group" >
        <div class=" group-hover:border-teal-300 flex justify-center items-center h-7 w-7  border dark:border-gray-700 rounded-full">
       <slot/>

      </div>
      <p class="group-hover:text-teal-600 dark:text-gray-400">{{ name }}</p>
       
      </p>
</template>

<script lang="ts" setup>
const props=defineProps({
name:String
})
</script>

<style>

</style>