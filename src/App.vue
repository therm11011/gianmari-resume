<script setup>
import Resume_ProfileComponent from "./components/Resume_ProfileComponent.vue";
import Resume_ExperiencesComponent from "./components/Resume_ExperiencesComponent.vue";
import Resume_SkillsComponent from "./components/Resume_SkillsComponent.vue";
import Resume_ProjectsComponent from "./components/Resume_ProjectsComponent.vue";
import Resume_EducationComponent from "./components/Resume_EducationComponent.vue";
import Resume_ReferencesComponent from "./components/Resume_ReferencesComponent.vue";


</script>

<template>
    <div class="min-h-screen w-full flex flex-col dark:bg-[#0A2647] dark:text-white">
        <Resume_ProfileComponent />
        <Resume_ExperiencesComponent />
        <Resume_EducationComponent />
        <Resume_SkillsComponent />
        <Resume_ProjectsComponent />
        <Resume_ReferencesComponent />
    </div>
</template>


