<template>
 

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#hero" class="hover:underline">Deribew Shimelis™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       <template v-for="(navbar,index) in navbardata" :key="index">
        <li>
            <a :href="navbar.href" class="hover:underline me-4 md:me-6">{{ navbar.name }}</a>
        </li>
       </template>
       
    </ul>
    </div>
</footer>

</template>

<script lang="ts" setup>
const navbardata=[
  {
    name:"About",
    href:"#about"
  },{
    name:"Education",
    href:"#education"
  },{
    name:"Exprience",
    href:"#exprience"
  },{
    name:"Skill",
    href:"#skill"
  },{
    name:"Portfolio",
    href:"#portfolio"
  },
  {
    name:"Service",
    href:"#service"
  },
  {
    name:"Testmonies",
    href:"#testmony"
  },
  {
    name:"Contact",
    href:"#contact"
  },
]

</script>

<style>

</style>