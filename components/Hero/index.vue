<template>
  <div id="hero" class="md:h-screen flex flex-col md:gap-10 items-center justify-center mt-10 pt-10">
    <h1 class="hidden md:block text-center mb-4 text-2xl md:text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">I am, Deribew Shimelis</h1>


    <h2 class="hidden md:block text-xl px-6 md:text-3xl font-bold dark:text-gray-400"> I am, Software Engineer || Fullstack Developer</h2>

    <div class="hidden md:block">
      <img src="../../public/banner2.png"/>
    </div>
    <div class="flex gap-6 flex-wrap justify-center">
     <template v-for="(data,index) in myInfoData" :key="index">
      <HeroMyProgress
      :label="data.label"
      :value="data.value"
      />
     </template>
      
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const myInfoData=[
  {
    label:"Years Work Experience",
    value:"2"
  },
  {
    label:"Completed projects",
    value:"5"
  },
  {
    label:"Company participated",
    value:"2"
  }
]

</script>

<style>

</style>