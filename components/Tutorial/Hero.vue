<template>
  <div class="md:h-screen flex flex-col justify-center items-center gap-4">

    <div class="flex gap-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20 text-green-400 ">
  <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
</svg>

      <h1 class="text-2xl md:text-3xl lg:text-5xl xl:text-6xl  font-bold lg:font-extra-bold text-rose-600 dark:text-green-400">WelCome To Ethio Technology </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-yellow-300">
  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
  <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
</svg>
    </div>
    <p class="text-yellow-400  text-xl font-bold">The Technology Trusted by All </p>
    <div class="mt-2 relative w-full">
      
      <hr class="absolute w-1/6 border-t-4 border-green-400 left-10 -rotate-45"/>
      <hr class="absolute w-1/6 border-t-4 border-yellow-400 left-10 top-4 -rotate-45"/>
      <hr class="absolute w-1/6  border-t-4 border-green-400 right-10 rotate-45"/>
      <hr class="absolute w-1/6 border-t-4 border-yellow-400 right-10 top-4 rotate-45"/>
      <hr class="absolute w-1/4  border-t-4 border-green-400 left-[40%]"/>
      <hr class="absolute w-1/4 border-t-4 border-yellow-400 top-4 left-[40%]"/>



      <div class="flex gap-10 justify-center mt-20">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  py-20 gap-10  justify-center">
        <template v-for="(category,i) in categoryData" :key="i">
          <TutorialCategoryCard
          :name="category.name"
          :url-link="category.url"
          :image="category.image"
          
          />
        </template>
        
      </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import Frontend from '../../public/web.png'
import Backend from '../../public/backend.png'
import Database from '../../public/banner2.png'
import MachineLearning from '../../public/machineLerning.png'
import Others from '../../public/others.png'
const categoryData=[
  {
    name:"Frontend Frameworks",
    url:"/tutorial/frontend",
    image:Frontend,},
    {
    name:"Backend Frameworks",
    url:"/tutorial/backend",
    image:Backend,},
    {
    name:"Database",
    url:"/tutorial/Database",
    image:Database,},
    {
    name:"Machine Learning",
    url:"/tutorial/machineLerning",
    image:MachineLearning,},
    {
    name:"Others",
    url:"/tutorial/others",
    image:Others,}
]

</script>

<style>

</style>