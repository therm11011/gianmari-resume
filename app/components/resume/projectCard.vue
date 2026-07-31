<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Project } from '~/types/resume'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/60 font-mono transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20"
  >
    <p class="border-b border-slate-800 px-5 py-3 text-xs text-slate-500">
      projects/{{ project.slug }}.md
    </p>

    <div class="aspect-video border-b border-slate-800 bg-zinc-950 p-3">
      <img
        v-if="project.image"
        :src="usePublicAsset(project.image)"
        :alt="`${project.title} project preview`"
        class="h-full w-full rounded object-contain"
      >
    </div>

    <div class="p-6">
      <h3 class="mb-4 text-lg font-bold text-slate-50">
        <span class="text-blue-500">###</span>
        {{ project.title }}
      </h3>

      <blockquote class="border-l-2 border-blue-500 pl-3 text-sm leading-6 text-slate-400">
        {{ project.description }}
      </blockquote>

      <div class="mt-5 flex flex-wrap gap-x-3 gap-y-2">
        <span
          v-for="technology in project.technologies"
          :key="technology"
          class="text-xs font-medium text-slate-400"
        >
          `{{ technology }}`
        </span>
      </div>

      <NuxtLink
        :to="`/projects/${project.slug}`"
        class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
      >
        [Read case study]
        <ArrowUpRight class="size-4" />
      </NuxtLink>
    </div>
  </article>
</template>
