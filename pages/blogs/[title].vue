<template>
  <div>
    <div v-if="pending" class="h-screen w-full flex items-center justify-center">
      <h1>Loading...</h1>
    </div>
    <div v-else class="flex flex-col items-center  gap-10 md:mt-20 border-y-2 border-gray-200 dark:border-gray-800 rounded-lg">
      <div class="flex justify-end w-full">
        <p class="text-lg font-bold px-10">posted {{ $dayjs(blog?.createdAt).fromNow() }}</p>
      </div>
      <div class="flex justify-start py-4">
        <h1 class="text-4xl font-bold text-start">{{ blog?.title }}</h1>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex justify-center py-6">
          <img :src="blog?.cover" alt="Blog Cover Image">
        </div>
        <div class="px-4 space-y-4">
          <div v-if="blog?.description" class="text-gray-600 dark:text-gray-400" v-html="blog?.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


useSeoMeta({
  title: "Software Engineering vs Computer Science",
  ogTitle: "Software Engineering vs Computer Science",
  description: "I am Software Engineer || Fullstack Developer",
  ogDescription: "I am Software Engineer || Fullstack Developer"
})

const route = useRoute();
const { data: blog, pending } = useFetch(`/api/blogs/${route.params.title}`, {
  lazy: false,
  server: false,
})


</script>

<style scoped>
/* Add your custom styles here */
</style>
