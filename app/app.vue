<script setup lang="ts">
import AppFooter from './components/layout/appFooter.vue';
import AppHeader from './components/layout/appHeader.vue';
import MarkdownLoading from './components/layout/markdownLoading.vue';
</script>

<template>
  <MarkdownLoading />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
