<script setup lang="ts">
import { experiences } from '~/data/experience'
import { experiences as volunteerExperiences } from '~/data/volunteer'
import SectionHeading from '../ui/sectionHeading.vue'
</script>

<template>
  <section id="experience" class="border-t border-slate-900 bg-zinc-950 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Career"
        title="Professional experience"
        description="My experience in software development, system support, quality assurance, and technical instruction."
      />

      <div class="space-y-6 font-mono">
        <article
          v-for="experience in experiences"
          :key="experience.id"
          class="grid gap-5 rounded-lg border border-slate-800 bg-slate-950/60 p-6 md:grid-cols-[200px_1fr] md:p-8"
        >
          <div>
            <p class="text-sm font-semibold text-blue-400">
              `{{ experience.startDate }} – {{ experience.endDate }}`
            </p>
            <p class="mt-3 text-sm leading-6 text-slate-500">
              **Location:**<br>
              {{ experience.location }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-50">
              <span class="text-blue-500">###</span>
              {{ experience.position }}
            </h3>
            <p class="mt-2 text-sm font-medium text-slate-400">
              **Company:** {{ experience.company }}
            </p>

            <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li
                v-for="responsibility in experience.responsibilities"
                :key="responsibility"
                class="flex items-start gap-3"
              >
                <span class="shrink-0 text-blue-500">-</span>
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section
    id="volunteer"
    class="border-t border-slate-900 bg-zinc-950 px-6 py-24">
      <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="VOLUNTEER"
        title="Volunteer Work"
        description="Provided volunteer IT support for network connectivity and telephone systems."
      />

      <div class="space-y-6 font-mono">
        <article
          v-for="experience in volunteerExperiences"
          :key="experience.id"
          class="grid gap-5 rounded-lg border border-slate-800 bg-slate-950/60 p-6 md:grid-cols-[200px_1fr] md:p-8"
        >
          <div>
            <p class="text-sm font-semibold text-blue-400">
              `{{ experience.startDate }} – {{ experience.endDate }}`
            </p>
            <p class="mt-3 text-sm leading-6 text-slate-500">
              **Location:**<br>
              {{ experience.location }}
            </p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-slate-50">
              <span class="text-blue-500">###</span>
              {{ experience.role }}
            </h3>
            <p class="mt-2 text-sm font-medium text-slate-400">
              **Organization:** {{ experience.organization }}
            </p>

            <ul class="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li
                v-for="responsibility in experience.responsibilities"
                :key="responsibility"
                class="flex items-start gap-3"
              >
                <span class="shrink-0 text-blue-500">-</span>
                <span>{{ responsibility }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
      </div>
    </section>
</template>
