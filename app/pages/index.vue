<script setup lang="ts">
import HeroSection from '~/components/resume/heroSection.vue';
import ExperienceTimeline from '~/components/resume/experienceTimeline.vue';
import ProjectsSection from '~/components/resume/projectsSection.vue';
import SkillsSection from '~/components/resume/skillsSection.vue';
import CertificateSection from '~/components/resume/certificateSection.vue';

useSeoMeta({
  title: 'Gian Mari Ramos | Web Developer and Aspiring Solutions Architect',
  description:
    'Explore the projects, experience, and technical capabilities of Gian Mari Ramos.',
  ogTitle: 'Gian Mari Ramos | Portfolio',
  ogDescription:
    'Web developer experienced in government platforms, healthcare systems, APIs, and technical solutions.',
  ogType: 'website',
})
</script>
<template>
  <main class="bg-zinc-950 text-slate-200">
    <HeroSection />

    <!-- <section
      id="about"
      class="bg-white px-6 py-24"
    >
      <div class="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Building practical solutions for real operational needs"
          description="I am a Computer Science graduate with professional experience developing and supporting web applications. I am particularly interested in understanding business processes, improving system workflows, and translating requirements into reliable technical solutions."
        />
      </div>
    </section> -->

    <ExperienceTimeline />
    <ProjectsSection />
    <SkillsSection />
    <CertificateSection />
    <section
      id="contact"
      class="border-t border-slate-900 bg-zinc-950 px-6 py-24"
    >
      <div
        class="mx-auto max-w-4xl rounded-lg border border-slate-800 bg-slate-950/60 p-6 font-mono text-slate-300 shadow-2xl shadow-blue-950/20 sm:p-10"
      >
        <p class="text-sm text-slate-500">CONTACT.md</p>

        <h2 class="mt-6 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          <span class="text-blue-500">#</span>
          Let's build something useful
        </h2>

        <blockquote class="mt-6 border-l-4 border-blue-500 py-1 pl-4 leading-7 text-slate-400">
          I am open to opportunities in web development, implementation,
          technical consulting, and solution architecture.
        </blockquote>

        <div class="mt-8 overflow-x-auto rounded-md border border-slate-800 bg-zinc-950 p-4 text-sm leading-6">
          <p class="text-slate-600">```</p>
          <p><span class="text-blue-400">status:</span> available</p>
          <p><span class="text-blue-400">location:</span> Philippines</p>
          <p><span class="text-blue-400">interests:</span> [front-end web development, implementation, solutions]</p>
          <p class="text-slate-600">```</p>
        </div>

        <hr class="my-8 border-slate-800">

        <p class="text-sm leading-7 text-slate-400 sm:text-base">
          Ready to start a conversation?
          <a
            href="mailto:giaaanmari@gmail.com"
            class="font-semibold text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition hover:text-blue-300 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            [Contact me]
          </a>
        </p>
      </div>
    </section>
  </main>
</template>
