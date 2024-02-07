<template>
  <div class="relative  border dark:border-gray-700 rounded-lg m-2 dark:bg-gray-800">
    
      <UAvatar
      :src="image"
      size="2xl"
      class="w-full h-full  absolute top-3 -left-[140px] md:-left-[120px] lg:-left-[220px] xl:-left-[125px]  2xl:-left-[200px] "
      />
 
    <div class="flex flex-col gap-2  lg:ml-10">
     <div class="w-full flex justify-between mt-4"><h5 class=" font-bold dark:text-gray-400 text-gray-600">{{ name }}</h5>
      <p class="text-sm text-gray-600 dark:text-gray-400 pr-4">{{ date }}</p>
    </div>
     <p class="text-sm p-3 italic">"{{ description }}"</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props=defineProps({
  name:String,
  image:String,
  description:String,
  date:String
})



</script>

<style>

</style>