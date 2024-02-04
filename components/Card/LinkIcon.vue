<template>
   <ULink class="flex gap-2 group"  :to="name">
        <div class=" group-hover:border-teal-300 flex justify-center items-center h-7 w-7  border dark:border-gray-700 rounded-full">
       <slot/>

      </div>
      <p class="group-hover:text-teal-600 group-hover:underline dark:text-gray-400">{{ name }}</p>
       
      </ULink>
</template>

<script lang="ts" setup>
const props=defineProps({
name:String
})
</script>

<style>

</style>