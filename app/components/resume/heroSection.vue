<script setup lang="ts">
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="min-h-[calc(100svh-73px)] bg-zinc-950 px-6">
    <div
      class="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16"
    >
      <article class="font-mono">
        <p class="mb-6 text-sm text-slate-500">
          README.md
        </p>

        <p class="mb-4 text-sm font-semibold text-blue-500 sm:text-base">
          ## Web Developer · Aspiring Solutions Architect
        </p>

        <h1 class="text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          <span class="text-blue-500">#</span>
          Gian Mari G. Ramos
        </h1>

        <blockquote class="mt-6 max-w-xl border-l-4 border-blue-500 py-1 pl-4 text-base leading-8 text-slate-400 sm:text-lg">
          I develop practical web solutions and help translate operational
          requirements into reliable digital systems. My experience includes
          government platforms, healthcare applications, APIs, quality
          assurance, and stakeholder collaboration.
        </blockquote>

        <div class="mt-8">
          <!-- <p class="mb-3 text-sm text-slate-500">
            **Certification**
          </p> -->
          <div class="h-10 w-45 overflow-hidden">
            <img
              src="https://pdf.ms.credential.net/badge/image?env=production&credential=d490rh7s"
              alt="Google for Education Certified Educator Level 2"
              class="w-45 max-w-none object-cover object-[center_calc(110%-4.5rem)]"
              loading="lazy"
            >
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm sm:text-base">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            [Explore projects](#projects)
            <ArrowRight class="size-4" aria-hidden="true" />
          </a>

          <a
            :href="usePublicAsset('/Gian-Mari-Ramos-Resume.pdf')"
            download
            class="inline-flex items-center gap-2 font-semibold text-slate-300 underline decoration-slate-600 underline-offset-4 transition hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <Download class="size-4" aria-hidden="true" />
            [Download résumé](/Gian-Mari-Ramos-Resume.pdf)
          </a>
        </div>

        <hr class="my-8 border-slate-800">

        <div class="flex flex-wrap gap-5 text-sm">
          <a
            href="mailto:giaaanmari@gmail.com"
            aria-label="Send an email"
            class="inline-flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
          >
            <Mail class="size-5" />
            [Email]
          </a>

          <a
            href="https://github.com/therm11011"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            class="inline-flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
          >
            <Github class="size-5" />
            [GitHub]
          </a>

          <a
            href="https://www.linkedin.com/in/gianmari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            class="inline-flex items-center gap-2 text-slate-400 transition hover:text-blue-400"
          >
            <Linkedin class="size-5" />
            [LinkedIn]
          </a>
        </div>
      </article>

      <div class="flex justify-center lg:justify-end">
        <figure class="w-full max-w-sm font-mono sm:max-w-md">
          <p class="mb-3 text-sm text-slate-500">
            ![Portrait of Gian Mari Ramos]
          </p>
          <div
            class="aspect-[4/5] overflow-hidden rounded-lg border border-slate-800 bg-slate-900 lg:max-h-[calc(100svh-12rem)]"
          >
            <img
              :src="usePublicAsset('/img/profile/profile.JPG')"
              alt="Portrait of Gian Mari Ramos"
              class="h-full w-full object-cover object-top"
            >
          </div>
          <figcaption class="mt-3 text-sm text-slate-500">
            `./pogi/profile.jpg`
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
