<template>
  <div class="min-h-screen pt-12 flex flex-col items-center">
   <div class="w-full md:w-10/12 lg:w-8/12 2xl:w-6/12 flex flex-col gap-10 border-x pt-10 border-gray-200 dark:border-gray-700">
    <h1>{{ lesson?.title }}</h1>
    <div class="">video</div>

    <div class="">contents</div>
   </div>
  </div>
</template>

<script lang="ts" setup>
const router=useRoute();
const lessonId=router.params.lessonId;
const {data:lesson}=await useFetch(`/api/lesson/${lessonId}`)
definePageMeta({
  layout:"tutorial"
})
</script>

<style>

</style>