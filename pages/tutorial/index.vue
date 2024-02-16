<template>
  <div class="flex flex-col pt-12 p-4 gap-20 items-center justify-center">
    <TutorialHero/>
    <div class="flex justify-center w-full">
      <div class="w-10/12 grid grid-cols-1  md:grid-cols-4 gap-10">

<TestimonisCard/>
<TestimonisCard/>
<TestimonisCard/>
<TestimonisCard/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


definePageMeta({
  layout: 'tutorial'
})
</script>


<style>

</style>