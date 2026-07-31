<script setup lang="ts">
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-vue-next'
import { projects } from '~/data/projects'

const route = useRoute()

const project = projects.find(item => item.slug === route.params.slug)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project case study not found',
  })
}

const projectUrl = project.website ?? project.link

useSeoMeta({
  title: `${project.title} | Case Study`,
  description: project.description,
  ogTitle: `${project.title} | Case Study`,
  ogDescription: project.description,
  ogType: 'article',
})
</script>

<template>
  <main class="min-h-screen border-t border-slate-900 bg-zinc-950 px-6 py-16 font-mono text-slate-300 sm:py-24">
    <article class="mx-auto max-w-4xl">
      <NuxtLink
        to="/#projects"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
      >
        <ArrowLeft class="size-4" aria-hidden="true" />
        [Back to projects]
      </NuxtLink>

      <p class="mt-10 text-sm text-slate-500">
        projects/{{ project.slug }}.md
      </p>

      <h1 class="mt-5 text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
        <span class="text-blue-500">#</span>
        {{ project.title }}
      </h1>

      <blockquote class="mt-6 border-l-4 border-blue-500 py-1 pl-4 text-base leading-8 text-slate-400 sm:text-lg">
        {{ project.description }}
      </blockquote>

      <figure v-if="project.image" class="mt-10">
        <p class="mb-3 text-sm text-slate-500">
          ![{{ project.title }} preview]
        </p>
        <div class="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-3">
          <img
            :src="usePublicAsset(project.image)"
            :alt="`${project.title} project preview`"
            class="h-auto w-full rounded object-contain"
          >
        </div>
      </figure>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          Project overview
        </h2>

        <div class="mt-6 overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/60 p-5 text-sm leading-7">
          <p class="text-slate-600">```yaml</p>
          <p v-if="project.role"><span class="text-blue-400">role:</span> {{ project.role }}</p>
          <p v-if="project.status"><span class="text-blue-400">status:</span> {{ project.status }}</p>
          <p><span class="text-blue-400">type:</span> case-study</p>
          <p><span class="text-blue-400">slug:</span> {{ project.slug }}</p>
          <p class="text-slate-600">```</p>
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          The problem
        </h2>
        <p class="mt-5 leading-8 text-slate-400">
          {{ project.problem }}
        </p>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          The solution
        </h2>
        <p class="mt-5 leading-8 text-slate-400">
          {{ project.solution }}
        </p>
      </section>

      <section v-if="project.contributions?.length" class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          My contributions
        </h2>
        <ul class="mt-5 space-y-3 leading-7 text-slate-400">
          <li v-for="contribution in project.contributions" :key="contribution" class="flex items-start gap-3">
            <span class="shrink-0 text-blue-500">-</span>
            <span>{{ contribution }}</span>
          </li>
        </ul>
      </section>

      <section class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          Technologies
        </h2>
        <div class="mt-5 flex flex-wrap gap-x-4 gap-y-3">
          <code
            v-for="technology in project.technologies"
            :key="technology"
            class="rounded border border-slate-800 bg-slate-950 px-2 py-1 text-sm text-blue-300"
          >`{{ technology }}`</code>
        </div>
      </section>

      <section v-if="project.outcomes?.length" class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          Outcomes
        </h2>
        <ul class="mt-5 space-y-3 leading-7 text-slate-400">
          <li v-for="outcome in project.outcomes" :key="outcome" class="flex items-start gap-3">
            <span class="shrink-0 text-blue-500">-</span>
            <span>{{ outcome }}</span>
          </li>
        </ul>
      </section>

      <section v-if="project.lessons" class="mt-12">
        <h2 class="text-2xl font-bold text-slate-100 sm:text-3xl">
          <span class="text-blue-500">##</span>
          What I learned
        </h2>
        <blockquote class="mt-5 border-l-4 border-blue-500 py-1 pl-4 leading-8 text-slate-400">
          {{ project.lessons }}
        </blockquote>
      </section>

      <section v-if="projectUrl || project.repository" class="mt-12 border-t border-slate-800 pt-8">
        <h2 class="text-2xl font-bold text-slate-100">
          <span class="text-blue-500">##</span>
          Links
        </h2>
        <div class="mt-5 flex flex-wrap gap-6 text-sm">
          <a
            v-if="projectUrl"
            :href="projectUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
          >
            [View project]
            <ArrowUpRight class="size-4" aria-hidden="true" />
          </a>
          <a
            v-if="project.repository"
            :href="project.repository"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
          >
            <Github class="size-4" aria-hidden="true" />
            [View repository]
          </a>
        </div>
      </section>
    </article>
  </main>
</template>
