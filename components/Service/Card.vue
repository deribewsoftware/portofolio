<template>
  <div class=" border dark:border-gray-700 dark:hover:border-green-400 rounded-lg p-2 pt-4 flex flex-col justify-center items-center  bg-white  dark:bg-gray-800 group">
    <div class="h-16 w-16  rounded-full">
      <img :src="image" alt="web" class="object-contain w-full h-full">
    </div>
    <h1 class="dark:text-gray-400 group-hover:dark:text-gray-200 text-xl font-bold  pt-2">{{ title }}:</h1>
    <div class="">


<ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
    <template v-for="(content,i) in contens" :key="i">
      <li class="flex items-center">
        <svg class="w-3.5 h-3.5 me-2 text-rose-500   dark:text-green-500 group-hover:dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
         </svg>
        <p class="mt-1 pt-3"> <span class="text-rose-500 dark:text-green-500 group-hover:dark:text-green-400 font-semibold ">{{ content.subtitle }}:</span> <span class="group-hover:dark:text-gray-300"> {{ content.description }}</span></p>

    </li>
    </template>

  
   
</ul>

    </div>
    
  </div>
</template>

<script lang="ts" setup>
const props=defineProps({
  image:String,
  title:String,
  contens:Object,

})

</script>

<style>

</style>