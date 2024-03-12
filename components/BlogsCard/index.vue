<template>
  <NuxtLink  :to="`/blogs/${id}`" class=" max-w-[350px] md:max-w-[400px] lg:max-w-[500px]  border border-gray-200 hover:shadow shadow-rose-300 dark:shadow-green-300 border-gray-700 bg-white dark:bg-gray-800 hover:border-rose-400 hover:dark:border-green-400 rounded-lg ">

    <div class="overflow-hidden rounded-t-lg h-[200px] ">
     <img :src="cover" alt="computer S uV to Software Engineer" class="h-full w-full"/>
    </div>
    <div class="flex flex-col p-2">
      <div class="flex justify-end">
        <p class="text-sm text-gray-500 dark:text-gray-400 font-bold"> posted {{ $dayjs(date).fromNow() }}</p>
      </div>
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <div class="p-2">
        <p class="text-gray-600 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis">{{ description }}</p>
   
      </div>
    </div>
    
  </NuxtLink>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';


// const props = defineProps(['date']);

// const relativeTime = computed(() => {
//   return dayjs(props.date).fromNow();
// });


defineProps({
  category:{
    type:String
  },

  title:{
    type:String,
    required:true,
  },

  description:{
    type:String,
  },
  cover:{
    type:String
  },
  date:{
    type:String
  },
  id:{
    type:String,
    required:true,
  }
})
</script>

<style>

</style>