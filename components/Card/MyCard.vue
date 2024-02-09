<script lang="ts" setup>
import Deribew from "../../public/deribew.jpg";

</script>


<template>
  <div class="relative  flex justify-center w-full items-center text-center ">
    <div class="flex  flex-col items-center w-full mx-4 md:mx-0 rounded-lg md:rounded-[0px]">
      

  <img
   class="
   mt-4
   lg:border-2
   dark:border-gray-500
bg-green-400
   lg:w-[120px]
   lg:h-[120px]
   lg:rounded-full
   lg:absolute
   " 
  :src="Deribew"
   alt="Rounded avatar">
  <div class="
  
  lg:dark:bg-gray-800 
  lg:bg-white
  lg:mt-20
   p-2 
   lg:border-2
   lg:dark:border-gray-500
   lg:rounded-lg
   "
   
   >

    <!-- my information -->
    <div class="pt-10">
      <h4 class="text-2xl lg:text-lg font-bold p-2">Deribew Shimelis</h4>
    
     <h5 class="text-md font-semibold text-gray-600 dark:text-gray-400">Software Enginer|| Fullstack Developer</h5>
    

     <div class="flex gap-2 my-4 justify-center border-y p-2  dark:border-gray-700">
      <!-- <template v-for="(social,i) in mysocialMedia" :key="i">
        <CardCircleLink
        :link="'mailto:'+social.url"
        :image="social.image"
        />
      </template> -->

      <NuxtLink to="https://github.com/deribewsoftware" target="_blank" class=" rounded-full hover:bg-green-400  hover:overflow-hidden   hover:bg-green-400">
        <Icon name="uil:github" size="30px"/>
      </NuxtLink>


      <NuxtLink to="https://www.linkedin.com/in/deribew-shimelis-191970260/" target="_blank" class=" rounded-full  hover:bg-green-400 hover:overflow-hidden">
        <Icon name="uil:linkedin" size="30px"/>
      </NuxtLink >


      <NuxtLink to="https://t.me/Derishemi" target="_blank" class=" rounded-full  hover:bg-green-400 hover:overflow-hidden">
        <Icon name="uil:telegram" size="30px"/>
      </NuxtLink>


      <NuxtLink to="https://www.instagram.com/deribew5307/" target="_blank" class=" rounded-full  hover:bg-green-400 hover:overflow-hidden">
        <Icon name="uil:instagram" size="30px"/>
      </NuxtLink>
      <NuxtLink to="https://www.facebook.com/profile.php?id=100087997909096" target="_blank" class=" rounded-full  hover:bg-green-400 hover:overflow-hidden">
        <Icon name="uil:facebook" size="30px"/>
      </NuxtLink>
      <NuxtLink to="https://twitter.com/ShimelisDe14559" target="_blank" class=" rounded-full  hover:bg-green-400 hover:overflow-hidden">
        <Icon name="uil:twitter" size="30px"/>
      </NuxtLink>

      
     
      
      
     </div>

    
     <div class="flex flex-col gap-2 w-full my-10">
      
      
     <CardLinkIcon name="+251930793119">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:text-teal-600 dark:text-gray-400 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

    </CardLinkIcon>

    <CardLinkIcon name="deribewsoftware@gmail.com">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 group-hover:text-teal-600 dark:text-gray-400 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
    </CardLinkIcon>

   


    

     </div>

     <div class="flex justify-center my-4">

      <a href="/resume" class="inline-flex items-center px-4 py-2 text-md font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Resume <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
      
     </div>
   
  </div>

 
  </div>
  </div>
  </div>
  
</template>




<style>

</style>

















