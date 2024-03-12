<template>
  
  <div class=" md:py-20">
    
          <Hero/>
          <div
           v-motion 
           :initial="initial"
           :visibleOnce="visible" class="py-20 md:px-20" id="about">
            <Header>About me</Header>
            <About/>
          </div>

          <div v-motion :initial="initial" :visibleOnce="visible"  class="py-20 md:px-20" id="education"><Header>My Education</Header> <Education/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="exprience"> <Header>My Exprience</Header><Experience/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="skill"><Header>My Skills</Header> <Skill/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="portfolio"><Header>My Portofolio</Header> <Project/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="service"><Header>Services</Header> <Service/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="testmony"><Header>Testimonis</Header> <Testimonis/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="contact"><Header>Contact</Header> <Contact/></div>
          
          
          

        </div>
</template>

<script lang="ts" setup>
const scrollBg=ref(false);
const setScrollBg=(value: boolean)=>{
  scrollBg.value=value;
}
onMounted(()=>{
  window.addEventListener("scroll",()=>{
    return window.scrollY>50? setScrollBg(true):setScrollBg(false);
  })
})



const initial = ref({
  y: 100,
  opacity: 0,
})

const visible= ref({
  y: 0,
  opacity: 1,
})

const router=useRouter()
console.log("router: ", router.currentRoute.value)
useSeoMeta({
  title:"Deribew Shimelis",
  ogTitle:"Deribew Shimelis",
  description:" I am Software Enginer || Fullstack Developer",
  ogDescription:" I am Software Enginer || Fullstack Developer"

})







</script>

<style>

</style>