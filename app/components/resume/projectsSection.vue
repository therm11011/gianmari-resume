<script setup lang="ts">
import { projects } from '~/data/projects'
import ProjectCard from './projectCard.vue';
import SectionHeading from '../ui/sectionHeading.vue';
</script>

<template>
  <section
    id="projects"
    class="border-t border-slate-900 bg-zinc-950 px-6 py-24"
  >
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected projects"
        description="Projects where I contributed to technical implementation, system workflows, user experience, and solution delivery."
      />

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
