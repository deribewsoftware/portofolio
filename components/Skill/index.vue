<script setup lang="ts">
import Angular from '../../public/angular.png'
import Next from '../../public/nextJs.png'
import Nuxt from '../../public/nuxt.svg'
import React from '../../public/react.png'
import tailwind from '../../public/tailwinds.png'
import Bootstrap from '../../public/bootstrap.webp'
import Mui from '../../public/materialui.png'
import Express from '../../public/express.png'
import Nest from '../../public/nestjs.png'
import Golang from '../../public/golang.png'
import Django from '../../public/django.png'
import Mongo from '../../public/mongo.png'
import Firebase from '../../public/firebase.png'
import Mysql from '../../public/mysql.png'
import Postgress from '../../public/postgress.png'
import Graphql from '../../public/graphql.png'
import Vercel from '../../public/vercel.png'
import Redis from "../../public/redis.png"
import Cloudinary from "../../public/cloudinary.png"


const others=[{
    name: "MongoDB",
    icon: Mongo,
    description: "Proficient MongoDB developer with expertise in NoSQL database design. Skilled in creating flexible and scalable database schemas, handling large datasets, and optimizing queries for performance. Committed to utilizing MongoDB's features for efficient data storage and retrieval in web applications."
  },
  {
    name: "Firebase",
    icon: Firebase,
    description: "Experienced Firebase developer adept at building real-time applications and mobile backends. Proficient in utilizing Firebase services such as Firestore for database management, Firebase Authentication for user management, and Cloud Functions for serverless backend logic. Committed to creating secure and scalable applications with Firebase."
  },
  {
    name: "PostgreSQL",
    icon: Postgress,
    description: "Proficient PostgreSQL developer with expertise in relational database design and SQL queries. Skilled in optimizing database performance, managing transactions, and ensuring data integrity. Committed to leveraging PostgreSQL's features for robust and scalable data solutions in web applications."
  },
  {
    name: "MySQL",
    icon: Mysql,
    description: "Experienced MySQL developer specializing in relational database management. Proficient in designing efficient database schemas, optimizing queries, and ensuring data consistency. Skilled in implementing secure and scalable MySQL solutions for web applications."
  },
  {
    name: "GraphQL",
    icon: Graphql,
    description: "Proficient GraphQL developer with expertise in building flexible and efficient APIs. Skilled in defining schemas, handling queries and mutations, and optimizing data retrieval. Committed to leveraging GraphQL's power for seamless communication between client and server in web applications."
  },
  {
    name: "Vercel",
    icon: Vercel,
    description: "Skilled Vercel user with expertise in deploying and hosting web applications. Proficient in utilizing Vercel's platform for serverless functions, automatic deployments, and CDN distribution. Committed to leveraging Vercel for seamless and scalable hosting solutions for web projects."
  },{
    name: "Cloudinary",
    icon: Cloudinary,
    description: "Experienced Cloudinary user with expertise in media management and optimization. Skilled in handling image and video uploads, transformations, and CDN delivery. Committed to leveraging Cloudinary's features for efficient and responsive media delivery in web applications."
  },
  {
    name: "Redis",
    icon: Redis,
    description: "Proficient Redis developer with expertise in in-memory data storage and caching. Skilled in utilizing Redis for fast and scalable data retrieval, session management, and pub/sub messaging. Committed to optimizing application performance through effective Redis implementation in web projects."
  }];




const backend_framework=[ {
    name: "Golang",
    icon: Golang,
    description: "Proficient Golang developer with expertise in building scalable and efficient backend services. Skilled in concurrency, performance optimization, and leveraging Go's standard library for robust application development. Committed to writing clean, maintainable code in the Go programming language."
  },
  {
    name: "Express.js",
    icon: Express,
    description: "Experienced Express.js developer specializing in building server-side applications with Node.js. Proficient in creating RESTful APIs and handling middleware for request processing. Skilled in optimizing routes and integrating with various databases for data persistence. Committed to delivering high-performance and scalable server-side solutions."
  },
  {
    name: "Nest.js",
    icon: Nest,
    description: "Skilled Nest.js developer leveraging the power of TypeScript for building scalable and maintainable server-side applications. Proficient in using decorators, dependency injection, and modules to structure code. Experienced in creating RESTful APIs and integrating with databases for robust backend solutions."
  },
  {
    name: "Django",
    icon: Django,
    description: "Experienced Django developer with expertise in building web applications using Python. Proficient in Django's MVC architecture, ORM, and template engine. Skilled in creating RESTful APIs and integrating with various databases. Committed to delivering secure, scalable, and feature-rich web solutions using the Django framework."
  }
];

const webdev = [
  {
    name: "React",
    icon: React,
    description: "Experienced React developer with a deep understanding of component-based architecture, state management, and React ecosystem. Proficient in building dynamic and responsive user interfaces with a focus on performance optimization. Continuously staying updated on React's latest features and best practices."
  },
  {
    name: "Next.js",
    icon: Next,
    description: "Experienced Next.js developer proficient in React, with a strong foundation in essential concepts like routing, data fetching, and deployment. Specialized in optimizing performance, implementing authentication, and exploring advanced topics such as serverless functions and GraphQL integration. Committed to continuous learning and contributing to the developer community."
  },
  {
    name: "Nuxt",
    icon: Nuxt,
    description: "Skilled Nuxt developer well-versed in Vue.js, bringing expertise in server-side rendering and static site generation. Experienced in building scalable and SEO-friendly web applications. Proficient in Vuex for state management and routing with Nuxt's intuitive configuration. Passionate about creating efficient and modern web experiences."
  },
  {
    name: "Angular",
    icon: Angular,
    description: "Versatile Angular developer with a strong grasp of TypeScript, component-based architecture, and the Angular CLI. Experienced in building robust and scalable applications with features like two-way data binding and dependency injection. Proficient in RxJS for handling asynchronous operations. Committed to delivering maintainable and high-performance Angular applications."
  },
  {
    name: "Flutter",
    icon: "https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png",
    description: "Proficient Flutter developer with expertise in Dart programming language. Skilled in creating cross-platform mobile applications with a focus on beautiful and responsive UI. Experienced in widget-based development and integrating with native device features. Passionate about delivering smooth and engaging user experiences on iOS and Android platforms."
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "Skilled Tailwind CSS user with expertise in building modern and utility-first web interfaces. Proficient in crafting responsive designs and optimizing the development workflow with Tailwind's utility classes. Committed to creating visually appealing and efficient user interfaces using Tailwind CSS."
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
    description: "Experienced Bootstrap developer adept at creating responsive and feature-rich web applications. Proficient in utilizing Bootstrap components, grids, and utilities for efficient layout and styling. Skilled in implementing Bootstrap's responsive design principles for optimal user experiences across devices."
  },
  {
    name: "Material-UI",
    icon: Mui,
    description: "Skilled Material-UI developer with expertise in implementing Google's Material Design principles in React applications. Proficient in utilizing Material-UI components for building visually appealing and consistent user interfaces. Committed to delivering high-quality React applications with Material-UI's design system."
  }
];

const items = [{
  slot: 'WebDevelopement',
  data:"Web Developement",
  label: 'Frontend Developement'
}
 ,

{
  slot: 'BackendDevelopement',
  data:"next json",
  label: 'Backend Developement'
},
{
  slot: 'DatabaseManagement',
  data:"next json",
  label: 'Database and Others '
}
]


</script>

<template>
  <UTabs :items="items" class="w-full">



    <template #WebDevelopement="{ item }">
      <div class="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4 gap-10 mt-20">
        <template v-for="(front,i) in webdev" :key="i">
          <div class="border-2 dark:border-gray-700 rounded-lg bg-gray-800 group hover:dark:border-teal-300 transition duration-500 ">
          <div class="flex justify-center p-4">
            <img :src="front.icon" alt="angular" class="h-16 w-16">
          </div>
          <h1 class="text-lg font-medium w-full text-center">{{ front.name }}</h1>
          <div class="pl-4 m-2 ">
            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
            <p class="justify-start text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-200  text-sm md:text-base transition duration-300 ease-in-out">{{ front.description }}</p>
          </div>
        </div>
        </template>
  

      </div>
       
    </template>

    
    

    <template #BackendDevelopement="{ item }">
      <div class="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4 gap-10 mt-20">
        <template v-for="(backend,i) in backend_framework" :key="i">
          <div class="border-2 dark:border-gray-700 rounded-lg bg-gray-800 group hover:dark:border-teal-300  transition duration-500">
          <div class="flex justify-center p-4">
            <img :src="backend.icon" alt="angular" class="h-16 w-16">
          </div>
          <h1 class="text-lg font-medium w-full text-center">{{ backend.name }}</h1>
          <div class="pl-4 m-2 ">
            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
            <p class="justify-start text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-200  text-sm md:text-base transition duration-300 ease-in-out">{{ backend.description }}</p>
          </div>
        </div>
        </template>
  

      </div>
       
    </template>




   





    <template #DatabaseManagement="{ item }">
      <div class="grid grid-cols-1 md:grid-cols-2 ld:grid-cols-4 gap-10 mt-20">
        <template v-for="(other,i) in others" :key="i">
          <div class="border-2 dark:border-gray-700 rounded-lg bg-gray-800 group hover:dark:border-teal-300 transition duration-500">
          <div class="flex justify-center p-4">
            <img :src="other.icon" alt="angular" class="h-16 w-16">
          </div>
          <h1 class="text-lg font-medium w-full text-center">{{ other.name }}</h1>
          <div class="pl-4 m-2 ">
            <svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
            <p class="justify-start text-gray-500 dark:text-gray-400 group-hover:dark:text-gray-200  text-sm md:text-base transition duration-300 ease-in-out">{{ other.description }}</p>
          </div>
        </div>
        </template>
  

      </div>
       
    </template>


    <template #default="{ item }">
      <h3 class="truncate font-semibold"> {{ item.label }}</h3>
    </template>

    
  </UTabs>
</template>

