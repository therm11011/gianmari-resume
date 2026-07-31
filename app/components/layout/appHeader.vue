<script setup lang="ts">
const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-zinc-950/90 font-mono backdrop-blur">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      aria-label="Main navigation"
    >
      <NuxtLink to="/" class="text-sm font-semibold text-blue-400 transition hover:text-blue-300 sm:text-base">
        ~/gianmari
      </NuxtLink>

      <div class="hidden items-center gap-5 md:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.href"
          :to="{ path: '/', hash: item.href }"
          class="text-sm font-medium text-slate-400 transition hover:text-blue-400"
        >
          [{{ item.label }}]
        </NuxtLink>
      </div>

      <a
        :href="usePublicAsset('/Gian-Mari-Ramos-Resume.pdf')"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300"
      >
        [Résumé.pdf]
      </a>
    </nav>
  </header>
</template>
