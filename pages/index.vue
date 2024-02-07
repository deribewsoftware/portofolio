<template>
  
  <div class="flex flex-col min-h-screen">
<Navbar/>
  <main class="w-full flex-grow xl:p-20 xl:px-4  flex flex-wrap justify-center">
    <div class="lg:w-3/12 2xl:w-1/12 lg:flex   justify-center ">
      <div class="lg:fixed  lg:left-16 lg:w-[200px] lg:flex   justify-center  items-center lg:h-screen ">
      <CardMyCard/>
      
    </div>
    </div>

    <div class=" lg:ml-[100px] lg:ml-0 w-full lg:w-9/12  2xl:w-7/12 overflow  dark:border-gray-800 px-4  border-x-2  ">
        <div class=" md:py-20">
          <Hero/>
          <div
           v-motion 
           :initial="initial"
           :visibleOnce="visible" class="py-20 md:px-20" id="about">
            <Header>About me</Header>
            <About/>
          </div>

          <divv-motion :initial="initial" :visibleOnce="visible"  class="py-20 md:px-20" id="education"><Header>My Education</Header> <Education/></divv-motion>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="exprience"> <Header>My Exprience</Header><Experience/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="skill"><Header>My Skills</Header> <Skill/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="portfolio"><Header>My Portofolio</Header> <Project/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="service"><Header>Services</Header> <Service/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="testmony"><Header>Testimonis</Header> <Testimonis/></div>
          <div v-motion :initial="initial" :visibleOnce="visible" class="py-20 md:px-20" id="contact"><Header>Contact</Header> <Contact/></div>
          
          
          

        </div>
      </div>

      <div class="hidden 2xl:block 2xl:fixed w-full xl:w-[400px] 2xl:flex justify-center lg:h-screen lg:mx-10 right-0 top-[60px]">
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
  <Footer/>
 
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