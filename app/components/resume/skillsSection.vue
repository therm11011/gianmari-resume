<script setup lang="ts">
import SectionHeading from '~/components/ui/sectionHeading.vue'
import { skillGroups } from '~/data/skills'
</script>

<template>
  <section id="skills" class="border-t border-slate-900 bg-zinc-950 px-6 py-24 text-white">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills and technologies"
        description="A combination of technical development, solution delivery, analysis, and collaboration skills."
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="group in skillGroups"
          :key="group.category"
          class="rounded-lg border border-slate-800 bg-slate-950/60 p-6 font-mono transition hover:border-blue-500/50"
        >
          <p class="mb-5 text-xs text-slate-500">
            skills/{{ group.category.toLowerCase().replaceAll(' ', '-') }}.md
          </p>
          <h3 class="font-bold text-white">
            <span class="text-blue-500">###</span>
            {{ group.category }}
          </h3>

          <div class="mt-5 rounded border border-slate-800 bg-zinc-950 p-4 text-sm leading-7">
            <p class="text-slate-600">```json</p>
            <p class="text-slate-400">[</p>
            <p
              v-for="(skill, index) in group.skills"
              :key="skill"
              class="pl-4 text-blue-300"
            >
              "{{ skill }}"{{ index < group.skills.length - 1 ? ',' : '' }}
            </p>
            <p class="text-slate-400">]</p>
            <p class="text-slate-600">```</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
