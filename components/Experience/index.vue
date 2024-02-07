<template>
  <div>
    
<ol class="relative border-s border-gray-200  border-rose-400 dark:border-green-400">                  
   <template v-for="(exprience,index) in myExperiences" :key="index">
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 bg-rose-400 dark:bg-green-400"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 text-rose-400 dark:text-green-400">{{ exprience.date }}</time>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ exprience.title }}</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ exprience.description }}</p>
        
    </li>
   </template>


    
</ol>


  </div>
</template>

<script lang="ts" setup>

const myExperiences = [
    {
        "title": "Online Learning Platform | Ethio Exams Academy",
        "description": "As a dedicated professional, I have actively contributed to the growth of my knowledge and skills through hands-on involvement in the development of the Online Learning Platform at Ethio Exams Academy. In this role, I took charge of the complete end-to-end process, encompassing UI design, backend, and frontend development. My efforts were instrumental in creating a robust solution that addresses fundamental challenges within the realm of education. This ongoing commitment began in December 2023 and continues to evolve as I contribute to the academy's success.",
        "date": "December 2023 - Present"
    },
    {
        "title": "Home Insurance Mobile App",
        "description": "During the period from January 2023 to May 2023, I collaborated within a team to develop a mobile application focused on Home Insurance. In this role, I actively engaged in problem-solving and contributed to overcoming key challenges within the home insurance domain. My involvement spanned various aspects of the app development process, showcasing my ability to work collaboratively and efficiently to deliver a comprehensive solution.",
        date: "January 2023 - May 2023"
    }
]


</script>

<style>

</style>