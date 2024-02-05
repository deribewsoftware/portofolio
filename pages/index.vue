<template>
  
  <div class="flex flex-col min-h-screen">
 
  <main class="flex-grow">
    <div class="md:fixed w-full md:w-[300px] md:flex justify-center items-center md:h-screen md:mx-10">
      <CardMyCard/>
      
    </div>

    <div class=" md:ml-[400px] w-full md:w-7/12  overflow  dark:border-gray-800 px-2 md:px-10 border-x-2  ">
        <div class=" md:py-20">
          <Hero/>
          <div
           v-motion 
           :initial="initial"
           :visibleOnce="visible" class="py-20" id="about">
            <Header>About me</Header>
            <About/>
          </div>

          <divv-motion :initial="initial" :visibleOnce="visible"  class="py-20" id="education"><Header>My Education</Header> <Education/></divv-motion>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="exprience"> <Header>My Exprience</Header><Experience/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="skill"><Header>My Skills</Header> <Skill/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="portfolio"><Header>My Portofolio</Header> <Project/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="service"><Header>Services</Header> <Service/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="testmony"><Header>Testimonis</Header> <Testimonis/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20" id="contact"><Header>Contact</Header> <Contact/></div>
          <div class="h-[100px]"></div>
          
          

        </div>
      </div>

      <div class="md:fixed w-full md:w-[400px] md:flex justify-center md:h-screen md:mx-10 right-0 top-[60px]">
      <div class="flex flex-col">
        <template v-for="(navbar,index) in navbardata" :key="index" class="border-l">
          <ULink
        
          exact-hash
          

          activeClass="text-primary"
    inactive-class="
    text-gray-500 
    
    dark:text-gray-400 
    hover:text-gray-700 
    dark:hover:text-gray-200" 
    
    :to="navbar.href">
    {{ navbar.name }}
  </ULink>
        </template>
      
      </div>
      
    </div>
  </main>
  <footer>footer</footer>
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

const colorMode=useColorMode()



</script>

<style>

</style>