<template>
  <div class="flex flex-col gap-20 w-full">
    <div class="flex gap-2 w-full">

      <div @click="isTitle=!isTitle" 
        class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-full px-2 py-1 flex gap-1 transition duration-300"
        :class="{ 'dark:border-green-400 text-green-400': isTitle}"
      >Title<svg v-if="isTitle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
      </div>

      <div @click="isContent=!isContent" 
        class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-full px-2 py-1 flex gap-1 transition duration-300"
        :class="{ 'dark:border-green-400 text-green-400': isContent }"
      > Content
        <svg v-if="isContent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
      </div>



      <div @click="isList=!isList" 
        class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-full px-2 py-1 flex gap-1 transition duration-300"
        :class="{ 'dark:border-green-400 text-green-400': isList }"
      > List
        <svg v-if="isList" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
      </div>



      <div @click="isImage=!isImage" 
        class="bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-full px-2 py-1 flex gap-1 transition duration-300"
        :class="{ 'dark:border-green-400 text-green-400': isImage}"
      > Image
        <svg v-if="isImage" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
      </div>

    </div>

<div  v-if="isTitle || isContent || isList || isImage" class="flex bg-gray-50 border-gray-100 dark:border-gray-600 dark:bg-gray-700 flex-col w-full border p-4 rounded-lg">
<UiInput v-model="contentData.title" v-if="isTitle" label="Title"/>

<UiTextarea v-model="contentData.content"  v-if="isContent" label="Contents"/>

<UiTextarea v-model="contentData.list" v-if="isList" label="List"/>
<input  v-if="isImage" type="file"/>
<div class="flex justify-end py-6 px-2">  <button class="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-md">Add</button></div>
</div>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const contentData=reactive({
  title:"",
  content:"",
  list:"",
  image:null
})

console.log("contentData", contentData);
const isTitle = ref(false);
const isContent= ref(false);
const isList= ref(false);
const isImage= ref(false);

defineProps({
  
})
</script>

<style>
/* Add your styles here if needed */
</style>
