<script lang="ts" setup>
import Deribew from "../../public/deribew6.jpg"
</script>
<template>
  
 
    <div class="flex gap-10 w-full items-center justify-center">
      <div class=" hidden  md:block lg:hidden xl:block">
        <img :src="Deribew" alt="" class="rounded-lg">
      </div>
      <div class="md:px-2 w-full  md:border-l-2 lg:border-l-0 xl:border-l-2 dark:border-gray-700">
        <h5 class="text-3xl  font-bold p-2 text-gray-600 dark:text-gray-400">Every great design begin with
an even better story</h5>

<AboutContent>
  <template v-slot:title>
    My Journey
  </template>
  <template v-slot:content>
    <p class="text-gray-600 dark:text-gray-400 text-base">Starting as a high school student,
     I embarked on my freelance journey in web 
     development. Over the past 8 years, I've honed my 
     skills, delivering exceptional results. From collaborating
      with talented individuals to working remotely for 
      agencies and providing consultations for startups,
       my experience has been diverse.</p></template>
</AboutContent>

<AboutContent>
  <template v-slot:title>
    Problem-Solving Enthusiast
  </template>
  <template v-slot:content>
    <p class="text-gray-600 dark:text-gray-400 text-base">
      I thrive on problem-solving within the realm of development. Every project is an opportunity for me to apply my skills and creativity, contributing to both business and consumer-oriented digital products. The challenge of overcoming obstacles is what keeps me motivated and focused.
    </p>
    </template>
</AboutContent>

<AboutContent>
  <template v-slot:title>
    Continuous Improvement
  </template>
  <template v-slot:content>
    <p class="text-gray-600 dark:text-gray-400 text-base">
      I consider myself quietly confident and naturally curious, always seeking opportunities to improve. I approach each design problem with a determination to enhance my skills, making a difference one project at a time.
    </p>
  </template>
</AboutContent>

      </div>
    </div>
 
</template>




<style>

</style>