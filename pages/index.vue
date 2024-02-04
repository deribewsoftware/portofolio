<template>
  <div class="flex flex-col min-h-screen">
 
  <main class="flex-grow">
    <div class="md:fixed w-full md:w-[400px] md:flex justify-center items-center md:h-screen md:mx-10">
      <CardMyCard/>
      
    </div>

    <div class=" md:ml-[500px] w-full md:w-7/12  overflow  dark:border-gray-800 px-2 md:px-10 border-x-2  ">
        <div class="flex flex-col gap-20 ">
          <Hero/>
          <div class=""><Header>About me</Header><About/></div>
          <div class=""><Header>My Education</Header> <Education/></div>
          <div class=""> <Header>My Exprience</Header><Experience/></div>
          <div class=""><Header>My Skills</Header> <Skill/></div>
          <div class=""><Header>My Portofolio</Header> <Project/></div>
          <div class=""><Header>Services</Header> <Service/></div>
          <div class=""><Header>Testimonis</Header> <Testimonis/></div>
          <div class=""><Header>Contact</Header> <Contact/></div>
          
          

        </div>
      </div>

      <div class="md:fixed w-full md:w-[400px] md:flex justify-center md:h-screen md:mx-10 right-0 top-[60px]">
      <div class="flex flex-col gap-2">
        <ULink>About</ULink>
      <ULink>Education</ULink>
      <ULink>Skiils</ULink>
      <ULink>Portfolio</ULink>
      <ULink>Services</ULink>
      <ULink>Testmonis</ULink>
      <ULink>Contact</ULink>
      </div>
      
    </div>
  </main>
  <footer>footer</footer>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>