<template>
  <div class=" px-2 pt-12 flex flex-col items-center">
   <div class=" my-6 w-full md:w-10/12 lg:w-8/12 2xl:w-6/12 bg-white dark:bg-gray-800 flex flex-col gap-10 border-x py-10 border-gray-200 dark:border-gray-700">
    <div class="font-semibold text-gray-500 dark:text-gray-400 w-full flex justify-end px-4 border-b border-gray-200 dark:border-gray-700"><span>{{ lesson?.module?.course.title }} || {{ lesson?.module?.title }}</span></div>
    <div class="px-4"><h1 class="text-xl font-bold">{{ lesson?.title }}</h1></div>

    <div class="flex justify-center w-full text-center">
  <iframe class="w-full md:w-[800px] h-[300px] md:h-[400px]" src="https://www.youtube.com/embed/BAx2GaMW2qA" frameborder="0" allowfullscreen></iframe>
</div>


    <div class="space-y-2 p-3">
      <h5 class="font-semibold">What is React?</h5>
      <p>React is an open-source JavaScript library developed by Facebook for building user interfaces. It is widely used for creating interactive and dynamic web applications. React allows developers to build reusable UI components, making it easier to manage and update complex user interfaces.

Key features of React include its virtual DOM (Document Object Model), which enables efficient updates and rendering of components, and its declarative syntax, which allows developers to describe the desired UI state, and React takes care of updating the DOM accordingly.</p>

<p>React follows a unidirectional data flow, meaning data flows in a single direction within the application, making it easier to understand and debug. React also supports a component-based architecture, allowing developers to break down complex UIs into smaller, manageable components that can be reused across the application.</p>

<p>One notable feature of React is its ability to work seamlessly with other libraries and frameworks, enabling developers to integrate it into existing projects or use it in conjunction with technologies like Redux for state management.</p>

<p>Overall, React has gained widespread popularity in the web development community due to its efficiency, flexibility, and the vibrant ecosystem of tools and libraries that support it.</p>
<div class="mt-4 border-[0.5px] border-l-2 border-green-400 rounded-lg p-3">
  <h5 class="font-bold text-green-400">Remark</h5>

<p class="text-green-700">Overall, React has gained widespread popularity in the web development community due to its efficiency, flexibility, and the vibrant ecosystem of tools and libraries that support it.</p>

</div>
    </div>
   </div>
   <div class="fixed right-10 top-20 w-full">
    <h1>ttttttttttttttttttttttttttt</h1>
    <TutorialCourseContent
    :course="lesson?.module?.course"
    />
   </div>
  </div>
</template>

<script lang="ts" setup>
const router=useRoute();
const lessonId=router.params.lessonId;
const {data:lesson}= useFetch(`/api/lesson/${lessonId}`,{
  lazy:false
})
console.log("lesson",lesson)
definePageMeta({
  layout:"tutorial"
})
</script>

<style>

</style>