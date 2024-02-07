<template>
  <header class="w-full fixed z-50 bg-white dark:bg-gray-900 dark:border-gray-800  block flex justify-end md:hidden  border-b">
   
    <nav class="flex gap-2 p-2">
      <UDropdown 
      open
      :items="navbardata" 
      :ui="{ item: { disabled: 'cursor-text select-text bg-opacity-80' } }"
       :popper="{ placement: 'bottom-start'}">


        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" :class="open&&'hidden'">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


   

    <template  #item="{ item }">
     
      <ULink
      exact-hash
      activeClass="text-primary"
     inactive-class="
    text-gray-500 
    dark:text-gray-400 
    hover:text-gray-700 
    dark:hover:text-gray-200" 
    
    :to="item.href">
    {{ item.label}}
  </ULink>


    </template>
  </UDropdown>  
    </nav>
  </header>
</template>

<script lang="ts" setup>
const navbardata=[
  [{ 
    label:"About",
    href:"#about"
  }],[{
    label:"Education",
    href:"#education"
  }],[{
    label:"Exprience",
    href:"#exprience"
  }],[{
    label:"Skill",
    href:"#skill"
  }],[{
    label:"Portfolio",
    href:"#portfolio"
  }],
  [{
    label:"Service",
    href:"#service"
  }],
  [{
    label:"Testmonies",
    href:"#testmony"
  }],
  [{
    label:"Contact",
    href:"#contact"
  }],
]

</script>

<style>

</style>