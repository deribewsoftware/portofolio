<template>
  <div class=" grid grid-cols-1 lg:grid-cols-2 gap-10">
 <template v-for="(portofolio,i) in portfolios" :key="i">
  <Card 
  :title="portofolio.title"
  :description="portofolio.description"
  :tools="portofolio.tools"
  :cover="portofolio.cover"
  :demoUrl="portofolio.demoUrl"
  :github="portofolio.github"
  :category="portofolio.category"

  />
 </template>
   
  </div>
</template>

<script lang="ts" setup>
const portfolios = [
  {
    cover: "/alpha.png",
    title: "Alpha Educational Platform",
    description: "Alpha is best for High School and University students to achieve success",
    category: "Web Development",
    tools: [{name:"HTML",icon:"http://sdffr.com"}, "CSS", "JavaScript", "React"],
    demoUrl: "http://picsum.com/images",
    github: "http://github.com/deribewsoftware/alpha"
  },
  {
    cover: "https://picsum.photos/600/800?random=2",
    title: "Beta E-commerce Website",
    description: "Beta is an e-commerce platform for buying and selling various products",
    category: "E-commerce",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "http://picsum.com/images",
    github: "http://github.com/deribewsoftware/beta"
  },
  {
    cover: "https://picsum.photos/600/800?random=3",
    title: "Gamma Mobile App",
    description: "Gamma is a mobile app designed to enhance productivity and organization",
    category: "Mobile App Development",
    tools: ["React Native", "Firebase", "Redux"],
    demoUrl: "http://picsum.com/images",
    github: "http://github.com/deribewsoftware/gamma"
  },
  {
    cover: "https://picsum.photos/600/800?random=4",
    title: "Delta Blogging Platform",
    description: "Delta is a platform for creating and sharing blog posts",
    category: "Content Creation",
    tools: ["Django", "Python", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "http://picsum.com/images",
    github: "http://github.com/deribewsoftware/delta"
  },
  {
    cover: "https://picsum.photos/600/800?random=5",
    title: "Epsilon Social Network",
    description: "Epsilon is a social network platform connecting people worldwide",
    category: "Social Networking",
    tools: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "http://picsum.com/images",
    github: "http://github.com/deribewsoftware/epsilon"
  }
];

</script>

<style>

</style>