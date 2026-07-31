<script setup lang="ts">
defineProps<{
    eyebrow?: string
    title: string
    description: string
}>()
</script>

<template>
  <header class="mb-12 max-w-3xl font-mono">
    <p
      v-if="eyebrow"
      class="mb-5 text-sm text-slate-500"
    >
      {{ eyebrow.toUpperCase() }}.md
    </p>

    <h2 class="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
      <span class="text-blue-500">##</span>
      {{ title }}
    </h2>

    <blockquote
      v-if="description"
      class="mt-6 border-l-4 border-blue-500 py-1 pl-4 text-base leading-7 text-slate-400 sm:text-lg"
    >
      {{ description }}
    </blockquote>
  </header>
</template>
