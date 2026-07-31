<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import type { Certificates } from '~/types/resume'

defineProps<{
  certificate: Certificates
}>()
</script>

<template>
  <article
    class="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/60 font-mono transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20"
  >
    <p class="border-b border-slate-800 px-5 py-3 text-xs text-slate-500">
      credentials/{{ certificate.id }}.md
    </p>

    <div class="aspect-video border-b border-slate-800 bg-zinc-950 p-3">
      <img
        v-if="certificate.image"
        :src="usePublicAsset(certificate.image)"
        :alt="`${certificate.title} certificate preview`"
        class="h-full w-full rounded object-contain"
      >
    </div>

    <div class="p-6">
      <h3 class="text-lg font-bold text-slate-50">
        <span class="text-blue-500">###</span>
        {{ certificate.title }}
      </h3>

      <p class="mt-4 text-sm text-slate-400">
        **Organization:** {{ certificate.issuingOrganization }}
      </p>

      <p v-if="certificate.expirationDate !== undefined" class="mt-2 text-sm text-slate-400">
        **Validity:** {{ certificate.issueDate }} – {{ certificate.expirationDate }}
      </p>

      <p v-else class="mt-2 text-sm text-slate-400">
        **Issued:** {{ certificate.issueDate }}
      </p>

      <NuxtLink
        :to="`${certificate.credentialUrl}`"
        class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
      >
        [Validate credential]
        <ArrowUpRight class="size-4" />
      </NuxtLink>
    </div>
  </article>
</template>
