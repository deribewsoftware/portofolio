<template>
  <div class="space-y-10 pt-10">
    <h1 class="p-4 text-5xl font-bold">Deribew's Blogs</h1>
    <div class="w-full flex flex-col gap-10 justify-center items-center ">

<template v-for="blog in blogs" :key="blog.id">
  <BlogsCard
  :id="blog.id"
  :category="blog.category"
  :title="blog.title"
  :description="'Next.js is a popular open-source React framework that enables developers to build web applications with enhanced performance and developer experience. It is designed to simplify the creation of server-rendered React applications by providing a set of conventions and features...'"
  :date="'22-01-2024'"
  :cover="blog.cover || ''"
  />
</template>

</div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title:"Deribew's Blogs",
  ogTitle:"Deribew's Blogs",
  description:" I am Software Enginer || Fullstack Developer",
  ogDescription:" I am Software Enginer || Fullstack Developer"

})


const {data:blogs,pending}=useFetch("/api/blogs/list",{
  lazy:false,
  server:false,
})

</script>

<style>

</style>


