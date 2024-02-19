

<script lang="ts" setup>
import { ref } from 'vue';

const editorConfig = ref({
  simpleUpload: {
    uploadUrl: 'path_to_image_controller',
    headers: {
      'Authorization': 'optional_token'
    }
  }
});

const contentHolder = ref("");

const loadCKEditor = async () => {
  if (process.client) {
    const ckeditorNuxt = await import('@blowstack/ckeditor-nuxt');
    return ckeditorNuxt;
  }
};
</script>

<style>

</style>



<template>
  <client-only placeholder="loading...">
    <ckeditor-nuxt v-model="contentHolder" :config="editorConfig"  />
  </client-only>
</template>