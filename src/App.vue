<script setup>
import Resume_ProfileComponent from "./components/Resume_ProfileComponent.vue";
import Resume_ExperiencesComponent from "./components/Resume_ExperiencesComponent.vue";
import Resume_SkillsComponent from "./components/Resume_SkillsComponent.vue";
import Resume_ProjectsComponent from "./components/Resume_ProjectsComponent.vue";
import Resume_EducationComponent from "./components/Resume_EducationComponent.vue";
import Resume_ReferencesComponent from "./components/Resume_ReferencesComponent.vue";


</script>

<template>
    <div class="flex flex-col">
      <div class="bg-gray-100 p-15">
         <Resume_ProfileComponent />
      </div>
      <div class="bg-sky-100 p-15">
        <Resume_ExperiencesComponent />
      </div>
      <div class="bg-sky-200 p-15">
        <Resume_EducationComponent />
      </div>
      <div class="bg-gray-100 p-15">
        <Resume_SkillsComponent />
      </div>
      <div class="bg-sky-100 p-15">
        <Resume_ProjectsComponent />
      </div>
      <div class="bg-sky-100 p-15">
        <Resume_ReferencesComponent />
      </div>
    </div>
</template>


