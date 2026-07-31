<script setup lang="ts">
const { isLoading, progress } = useLoadingIndicator()

const initialLoading = ref(true)
const initialProgress = ref(0)

let loadingTimer: ReturnType<typeof setTimeout> | undefined
let progressTimer: ReturnType<typeof setInterval> | undefined

const showLoader = computed(() => initialLoading.value || isLoading.value)
const displayedProgress = computed(() =>
  initialLoading.value ? initialProgress.value : Math.round(progress.value),
)

onMounted(() => {
  progressTimer = setInterval(() => {
    initialProgress.value = Math.min(initialProgress.value + 1, 95)
  }, 10)

  loadingTimer = setTimeout(() => {
    initialProgress.value = 100
    initialLoading.value = false

    if (progressTimer) clearInterval(progressTimer)
  }, 1000)
})

onBeforeUnmount(() => {
  if (loadingTimer) clearTimeout(loadingTimer)
  if (progressTimer) clearInterval(progressTimer)
})
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-300"
    leave-to-class="opacity-0"
  >
    <div
      v-if="showLoader"
      class="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-12 font-mono text-slate-300 sm:px-6"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <article class="w-full max-w-2xl rounded-lg border border-slate-800 bg-slate-950/60 p-6 shadow-2xl shadow-blue-950/20 sm:p-10">
        <p class="text-sm text-slate-500">LOADING.md</p>

        <h1 class="mt-6 text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          <span class="text-blue-500">#</span>
          Loading page<span class="animate-pulse text-blue-400">_</span>
        </h1>

        <blockquote class="mt-6 border-l-4 border-blue-500 py-1 pl-4 leading-7 text-slate-400">
          Preparing the requested content. This should only take a moment.
        </blockquote>

        <div class="mt-8 rounded-md border border-slate-800 bg-zinc-950 p-4 text-sm leading-7">
          <p class="text-slate-600">```status</p>
          <p><span class="text-blue-400">state:</span> loading</p>
          <p><span class="text-blue-400">progress:</span> {{ displayedProgress }}%</p>
          <p class="text-slate-600">```</p>
        </div>

        <div class="mt-6 h-1 overflow-hidden rounded-full bg-slate-800" aria-hidden="true">
          <div
            class="h-full bg-blue-500 transition-[width] duration-200 ease-out"
            :style="{ width: `${displayedProgress}%` }"
          />
        </div>

        <p class="mt-6 text-xs text-slate-600">
          // Resolving route and rendering content...
        </p>
      </article>
    </div>
  </Transition>
</template>
