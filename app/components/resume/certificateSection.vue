<script setup lang="ts">
import { certificates } from '~/data/certificates'
import CertificateCard from './certificateCard.vue'
import SectionHeading from '../ui/sectionHeading.vue'
</script>

<template>
  <section id="certificates" class="border-t border-slate-900 bg-zinc-950 px-6 py-24 text-white">
    <div class="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Achievements"
        title="Certificates"
        description="Professional certifications and completed learning programs that support my work in development, cloud technologies, education, and solution delivery."
      />

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CertificateCard
          v-for="certificate in certificates"
          :key="certificate.id"
          :certificate="certificate"
        />
      </div>
    </div>
  </section>
</template>
