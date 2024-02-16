<template>
  <NuxtLink :href="urlLink" class="h-[100px] w-[200px] 
  group
  border rounded-lg border-gray-200 
  dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col
   justify-center items-center gap-3 
   hover:dark:border-x-yellow-400 
  hover:dark:border-y-green-400 
  hover:dark:bg-gray-700
  shadow 
   text-center
   transition duration-300">
    <div class="h-12 w-12 overflow-hidden">
      <img :src="image" alt="" class="h-full w-full">
    </div>
    <p class="text-center text-gray-600  dark:text-gray-400 group-hover:dark:text-green-400 font-semibold ">{{ name }}</p>
    
  </NuxtLink>
</template>

<script lang="ts" setup>
const props=defineProps({
  image:{
    type:String,
  },
  urlLink:{

    type:String,
  },
  name:{
    type:String,
  },
})
</script>

<style>

</style>