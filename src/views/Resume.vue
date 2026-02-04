<script setup lang="ts">
import { onMounted, ref } from "vue";
import { convex } from "../convex";
import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);
const experiences = useConvexQuery(api.resume.getExperiences);
const skills = useConvexQuery(api.resume.getSkills);
const projects = useConvexQuery(api.resume.getProjects);
const education = useConvexQuery(api.resume.getEducation);
const references = useConvexQuery(api.resume.getReferences);


let unsub: (() => void)[] = [];





</script>

<template>
    <p>{{ profile.data.value.name }}</p>
    <div v-for="value in experiences.data.value">
        <p>{{ value.company }}</p>
    </div>
    <div v-for="value in skills.data.value">
        <p>{{ value.name }}</p>
    </div>
    
    <p>{{ projects.data.value }}</p>
    <p>{{ education.data.value }}</p>
    <p>{{ references.data.value }}</p>
</template>