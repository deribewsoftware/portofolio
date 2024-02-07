<template>
  <div class="px-4 md:px-10 grid grid-cols-1  md:grid-cols-2 gap-16">
    <template v-for="(testmony,index) in testimonies" :key="index">
      <TestimonisCard
      :name="testmony.name"
      :description="testmony.description"
      :image="testmony.image"
      :date="testmony.date"
      />
    </template>
   
  </div>
</template>

<script lang="ts" setup>
const testimonies = [
 
  {
    name: "Emily Johnson",
    image: "https://avatars.githubusercontent.com/u/739985?v=4",
    description: "I am amazed at the efficiency and precision of the server-side logic implemented by Deribew. It has greatly enhanced the functionality of our application.",
    date: "25-03-2024"
  },
  {
    name: "John Smith",
    image: "https://avatars.githubusercontent.com/u/789985?v=4",
    description: "Deribew's expertise in server-side logic is unmatched. The algorithms implemented have significantly improved the overall performance of our system.",
    date: "28-03-2024"
  },
  {
    name: "Sarah Davis",
    image: "https://avatars.githubusercontent.com/u/739995?v=4",
    description: "Working with Deribew was a pleasure. The server-side logic implemented has made our application more robust and user-friendly. Kudos!",
    date: "02-04-2024"
  },
  {
    name: "Michael Carter",
    image: "https://avatars.githubusercontent.com/u/739885?v=4",
    description: "Deribew's contribution to the server-side logic has been instrumental in elevating our application's functionality. Truly appreciate the expertise!",
    date: "05-04-2024"
  }
];

console.log(testimonies);

</script>

<style>

</style>