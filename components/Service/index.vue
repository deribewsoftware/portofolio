<template>
  <div class="space-y-4">
    <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
<template v-for="(service,i) in serviceData" :key="i">
  <ServiceCard
  :image="service.image"
  :title="service.title"
  :contens="service.contents"
  />
</template>

    </div>

    <div class="flex flex-col gap-2">
      <Header>Why Choose My Services</Header>
      <template>
  <UAccordion
    open-icon="i-heroicons-plus"
    close-icon="i-heroicons-minus"
    :items="items"
  />


 

</template>

    </div>
  </div>
</template>

<script lang="ts" setup>
import Web from "../../public/web.png";
import Mobile from "../../public/mobile.png";
import Backend from "../../public/backend.png";
const items=[{ label: 'Tailored Solutions', content: 'Every project is unique, and I pride myself on delivering customized solutions that align with your goals and requirements' },
     { label: 'Proven Track Record', content: 'A portfolio filled with successful web and mobile app development projects, showcasing my commitment to quality and excellence' }, 
     { label: 'Transparent Communication', content: 'Clear and open communication throughout the development process, ensuring you are informed and involved every step of the way' },
      { label: 'Timely Delivery', content: 'Meeting deadlines without compromising on the quality of the end product' },
      { label: 'Post-Launch Support', content: 'Comprehensive support after the launch to address any issues, implement updates, and ensure the ongoing success of your digital solution' }]

const serviceData=[
 { 
  image:Web,
  title:"Web Development",
  contents:[
    {
      subtitle:"Custom Web Design",
      description:"Crafted with precision to reflect your brand identity"
    },
    {
      subtitle:"Frontend Development",
      description:"Engaging user interfaces for optimal user experience"
    },
    {
      subtitle:"Backend Development",
      description:"Robust server-side solutions for data handling and processing"
    }
  ]
},
{ 
  image:Mobile,
  title:"Mobile App Developement",
  contents:[

  {
      subtitle:"iOS and Android Development",
      description:"Native or cross-platform solutions tailored to your target audience"
    },
    {
      subtitle:"User-Friendly Interfaces",
      description:"Intuitive designs that enhance user interaction"
    },
    {
      subtitle:"Scalable Architecture",
      description:" Backend solutions ensuring your app can grow with your user base"
    }
  ]
},
{ 
  image:Backend,
  title:"Backend Developement",
  contents:[

  {
      subtitle:"Database Design and Management",
      description:"Efficient handling and storage of crucial data"
    },
    {
      subtitle:"API Development",
      description:"Creating interfaces for seamless communication between different software components"
    },
    {
      subtitle:"Server-side Logic",
      description:"Implementing the logic and algorithms necessary for your application's functionality"
    }
  ]
},

]

</script>

<style>

</style>