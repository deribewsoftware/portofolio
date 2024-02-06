<template>
  <div >
    <h4 class="text-2xl p-2 font-bold ">{{ myEducation.level }}</h4>
  <div class="py-6 md:px-6 flex justify-between">
    <h5 class=" text-2xl font-bold text-gray-500 dark:text-gray-400 font-italic">{{ myEducation.university }}</h5>
    <p class="text-xl font-bold text-gray-500">{{ myEducation.enrollmentDate }}</p>
  </div>
    <p class=" p-2 text-gray-500 dark:text-gray-400">{{ myEducation.description }}</p>
    
    <div class="p-2">
      <h5 class="font-semibold">Key Highlights:</h5>

<ul class=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <template v-for="(highlight,index) in myEducation.highlights" :key="index">
        <li class="pl-3 text-md w-full ">{{ highlight }}</li>
    </template>
    
    
</ul>

    </div>
    <p class=" p-2 text-gray-500 dark:text-gray-400">
      My time at Addis Ababa University has not only provided me with a comprehensive understanding of software engineering principles but has also fueled my passion for exploring the possibilities of artificial intelligence in solving complex problems.</p>


  </div>
</template>

<script lang="ts" setup>
const myEducation={
    level:"Bachelor of Science in Software Engineering and Artificial Intelligence",
    university:"Addis Ababa University",
    enrollmentDate:"2020 - 2025",
    description:"During my academic journey at Addis  Ababa University, I pursued a Bachelor of Science degree in Software Engineering  and Artificial Intelligence. This program  equipped me with a strong foundation in both theoretical  concepts and practical applications in the dynamic fields  of software engineering and artificial intelligence.",
    highlights:[
        "In-depth study of software development methodologies, algorithms, and data structures.",
        "Specialized coursework in artificial intelligence, machine learning, and data science.",
        "Collaborative projects and hands-on experience in applying theoretical knowledge to real-world scenarios.",
        "Engaged in research activities, fostering a deep understanding of cutting-edge technologies and industry trends."

    ]
}
</script>

<style>
/*  */
</style>