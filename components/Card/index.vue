<template>
  <div class="group relative border-2 border-gray-200 dark:border-gray-800 rounded-lg z-50 m-2 flex-col dark:hover:bg-gray-800 overflow-hidden">
    <div class="flex gap-10 ">
      <div class="p-2 space-y-2">
      <div class="h-[400px] w-[300px] overflow-hidden rounded-lg">
        <img :src="cover" class="group-hover:scale-105 transition duration-500"/>
      </div>
        <p class="text-sm px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-center">{{ category }}</p>
      </div>
      <div class="flex flex-col gap-2 justify-center">
        <h1 class="text-lg font-bold pt-2">{{title}}</h1>
        <p class="p-2 text-sm text-gray-500 dark:text-gray-400 justify-start">
           {{ description }}</p>
            <div class="flex flex-wrap gap-10 justify-center">
             <template v-for="(tool,i) in tools" :key="i">
              <Tools :name="tool?.name"/>

             </template>
            </div>
            
      </div>
    </div>

    <div class="absolute top-0 bottom-0 left-0 right-0 opacity-0 w-0 h-full z-0    group-hover:opacity-100 group-hover:w-full     transition-width duration-500 ease-in-out  bg-teal-700 bg-opacity-40 ">

      <div class="relative ">
        <div class="absolute top-full right-0 ">
          <div class="flex justify-center items-center m-2 gap-4">
              <UButton
    icon="i-heroicons-pencil-square"
    size="sm"
    color="primary"
    variant="outline"
    label="See Demo"
    :trailing="false"
  />
  <UButton
    icon="i-heroicons-s-github"
    size="sm"
    color="primary"
    variant="outline"
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