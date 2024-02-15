<template>
  <NuxtLink href="/blogs/computer" class=" max-w-[350px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] p-2 border border-gray-200 hover:shadow shadow-rose-300 dark:shadow-green-300 border-gray-700 bg-white dark:bg-gray-800 hover:border-rose-400 hover:dark:border-green-400 rounded-lg flex flex-col">

    <div class="overflow-hidden rounded-t-lg">
     <img src="../../public/CS.jpg" alt="computer S uV to Software Engineer" class="h-full w-full"/>
    </div>
    <div class="flex flex-col p-2">
      <div class="flex justify-end">
        <p class="text-sm text-gray-500 dark:text-gray-400 font-bold"> 2 days ago</p>
      </div>
      <h2 class="text-lg font-bold">computer science compare to software eng</h2>
      <div class="p-2">
        <p class="text-gray-600 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis">Computer Science is a comprehensive field dedicated to the exploration of the design and functionality of computers, as well as the underlying processes involved in computing. It encompasses a vast array of scientific principles and techniques, making it a broad and dynamic discipline at the intersection of theory and application.</p>
        <p class="text-gray-600 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis">Software Engineering (SE), within the realm of Computer Science, is a specialized field concentrated on the creation and enhancement of computer programs. Software engineers play a crucial role in the software development life cycle, as they are responsible for the systematic design, development, testing, analysis, documentation, and ongoing support of software solutions. Their expertise lies in translating complex requirements into efficient and reliable software systems, contributing significantly to the advancement of technology and meeting the ever-evolving needs of the digital landscape.</p>
      </div>
    </div>
    
  </NuxtLink>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';


const props = defineProps(['date']);

const relativeTime = computed(() => {
  return dayjs(props.date).fromNow();
});
</script>

<style>

</style>