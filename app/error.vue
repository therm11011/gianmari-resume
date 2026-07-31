<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => props.error.statusCode === 404)

const returnHome = () => clearError({ redirect: '/' })
</script>

<template>
  <main
    class="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-12 font-mono text-slate-300 sm:px-6"
  >
    <article class="w-full max-w-3xl rounded-lg border border-slate-800 bg-slate-950/60 p-6 shadow-2xl shadow-blue-950/20 sm:p-10">
      <p class="text-sm text-slate-500">README.md</p>

      <h1 class="mt-6 text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
        <span class="text-blue-500">#</span>
        Error {{ error.statusCode }}
      </h1>

      <h2 class="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
        <span class="text-blue-500">##</span>
        {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
      </h2>

      <blockquote class="mt-6 border-l-4 border-blue-500 py-1 pl-4 leading-7 text-slate-400">
        {{
          isNotFound
            ? 'The requested page does not exist or may have been moved.'
            : 'An unexpected error interrupted the request.'
        }}
      </blockquote>

      <div class="mt-8 overflow-x-auto rounded-md border border-slate-800 bg-zinc-950 p-4 text-sm leading-6">
        <p class="text-slate-600">```status</p>
        <p><span class="text-blue-400">code:</span> {{ error.statusCode }}</p>
        <p><span class="text-blue-400">state:</span> {{ isNotFound ? 'not_found' : 'error' }}</p>
        <p><span class="text-blue-400">action:</span> return_home</p>
        <p class="text-slate-600">```</p>
      </div>

      <hr class="my-8 border-slate-800">

      <p class="text-sm leading-7 text-slate-400">
        Continue browsing by selecting
        <button
          type="button"
          class="font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300 hover:cursor-pointer focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          @click="returnHome"
        >
          [Return home](/)
        </button>
      </p>
    </article>
  </main>
</template>
