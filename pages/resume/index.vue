<script lang="ts" setup>
import Deribew from "../../public/deribew.pdf"
useSeoMeta({
  title:"Deribew Shimelis Resume",
  ogTitle:"Deribew Shimelis",
  description:" I am Software Enginer || Fullstack Developer",
  ogDescription:" I am Software Enginer || Fullstack Developer"

})

</script>

<template>
  <div>
    <embed :src="Deribew" type="application/pdf"  class="h-screen w-full" />
  </div>
</template>



<style>

</style>

