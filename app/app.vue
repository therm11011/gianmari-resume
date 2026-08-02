<script setup lang="ts">
import AppFooter from './components/layout/appFooter.vue';
import AppHeader from './components/layout/appHeader.vue';
import MarkdownLoading from './components/layout/markdownLoading.vue';

useHead({
  script: [
    {
      type: 'module',
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': JSON.stringify({
        token: 'd4d7fc5bab83408b8b9c81d22ef5af82',
      }),
    },
  ],
})
</script>

<template>
  <MarkdownLoading />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
