<template>
  <div class="group relative border border-gray-200 dark:border-gray-700  bg-white dark:bg-gray-800 hover:dark:bg-gray-900  rounded-lg z-50 m-2 flex-col  overflow-hidden">
    <div class="flex gap-2 flex-col">
     
      <div class="h-[300px] overflow-hidden rounded-t-lg">
        <img :src="cover" class="group-hover:scale-105 transition duration-500"/>
      </div>
        
     
      <div class="px-2 md:px-4 flex flex-col gap-2 justify-center items-center">
        <h1 class="text-lg font-bold ">{{title}}</h1>
        <p class="p-2 text-sm text-gray-500 dark:text-gray-400 justify-start">
           {{ description }}</p>


            <div class="flex flex-wrap gap-10 justify-center">
             <template v-for="(tool,i) in tools" :key="i">
              <Tools :name="tool.name" :icon="tool.icon"/>

             </template>
            </div>
            
      </div>

      <div class="flex justify-center m-2 rounded-full items-center text-center ">
        <p class="px-2 py-1 text-sm px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-900 text-center">{{ category }}</p>
      </div>
    </div>

    <div class="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-0 h-full z-0    group-hover:opacity-100 group-hover:w-full     transition-width duration-500 ease-in-out  bg-rose-700 dark:bg-green-700 bg-opacity-30 dark:bg-opacity-30 border-2 border-rose-300 dark:border-green-300 ">

      <div class="flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center items-center m-2 gap-4">
              <UButton
              :to="demoUrl"
  target="_blank"
    
    size="sm"
   
    variant="solid"
    label="See Demo"
    :trailing="false"
    class="bg-rose-400 dark:bg-green-400"
  />
  <UButton
  :to="github"
  target="_blank"
 
    size="sm"
    class="bg-rose-400 dark:bg-green-400"
    variant="solid"
    label="Github"
    :trailing="false"
  />
              
            </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const props=defineProps ({
  cover: String,
  title: String,
  description: String,
  category: String,
  tools: Object,
  demoUrl: String,
  github: String,
});
</script>

<style>

</style>