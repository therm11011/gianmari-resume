<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-800 bg-zinc-950 px-6 py-8 font-mono">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {{ year }} Gian Mari Ramos</p>
      <p>`Nuxt` · `Vue` · `Tailwind CSS`</p>
    </div>
  </footer>
</template>
