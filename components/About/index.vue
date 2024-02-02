<template>
  
  <Container>
    <div class="flex gap-10 w-full">
      <div class="hidden md:block">
        <h5 >Every great design begin with
an even better story</h5>
      </div>
      <div class="md:px-2 w-full  md:border-l-2 dark:border-gray-700">
        <h5 class="text-3xl  font-bold p-2">Every great design begin with
an even better story</h5>

<AboutContent>
  <template v-slot:title>
    My Journey
  </template>
  <template v-slot:content>
    Starting as a high school student,
     I embarked on my freelance journey in web 
     development. Over the past 8 years, I've honed my 
     skills, delivering exceptional results. From collaborating
      with talented individuals to working remotely for 
      agencies and providing consultations for startups,
       my experience has been diverse.</template>
</AboutContent>

<AboutContent>
  <template v-slot:title>
    Problem-Solving Enthusiast
  </template>
  <template v-slot:content>
    I thrive on problem-solving within the realm of development. Every project is an opportunity for me to apply my skills and creativity, contributing to both business and consumer-oriented digital products. The challenge of overcoming obstacles is what keeps me motivated and focused.</template>
</AboutContent>

<AboutContent>
  <template v-slot:title>
    Continuous Improvement
  </template>
  <template v-slot:content>
    I consider myself quietly confident and naturally curious, always seeking opportunities to improve. I approach each design problem with a determination to enhance my skills, making a difference one project at a time.</template>
</AboutContent>

      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>

</script>

<style>

</style>