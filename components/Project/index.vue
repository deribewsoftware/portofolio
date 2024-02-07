<template>
  <div class=" grid grid-cols-1 2xl:grid-cols-2 gap-10">
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
import Tailwind from '../../public/tailwinds.png'
import Mongo from '../../public/mongo.png'
import Cloudinary from '../../public/cloudinary.png'
import Redis from '../../public/redis.png'
import Next from '../../public/nextJs.png'
import Express from '../../public/express.png'
import Vercel from '../../public/vercel.png'
import React from '../../public/react.png'
import Bootstrap from '../../public/bootstrap.webp'
import Transletor from '../../public/translator.png'

const portfolios = [
{
  cover: "/alpha.png",
  title: "Alpha Educational Platform",
  description: "Alpha is the ideal educational platform designed to empower High School and University students on their journey to academic success. Specializing in Web Development, Alpha utilizes a powerful stack including Next.js, Express, Tailwind CSS, and MongoDB, providing a comprehensive learning experience to foster growth and achievement.",
  category: "Web Development",
  tools: [
    { name: "Next.js", icon: Next},
    { name: "Express", icon: Express },
    { name: "MongoDB", icon:Mongo },
    { name: "Tailwind CSS", icon: Tailwind},
    { name: "Cloudinary", icon: Cloudinary },
    { name: "Redis", icon: Redis },
    { name: "Vercel", icon:Vercel},
  ],
  demoUrl: "https://shadcn-ui-teal.vercel.app/",
  github: "https://github.com/deribewsoftware/shadcn_Ui"
}
,
{
  cover: Transletor,
  title: "Geez and English To Amharic Translation",
  description: "Solving basic problems in our world, this platform provides Geez translation using NLP AI and English to Amharic translation using the Google Translator API. Serving as a transformative solution to fundamental challenges in our global community, our platform stands at the forefront of linguistic empowerment. Seamlessly bridging communication gaps, we offer a sophisticated yet user-friendly experience for language translation.",
  
  category: "Web Development",
  tools: [
    { name: "React", icon: React },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Vercel", icon:Vercel }
   
   
  ],
  demoUrl: "https://webapp-telgram-bot-react-telegram-bot.vercel.app/",
  github: "https://github.com/deribewsoftware/webapp-Telgram-bot-React-Telegram-bot-"
}
  
];

</script>

<style>

</style>