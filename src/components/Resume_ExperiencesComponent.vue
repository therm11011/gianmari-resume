<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"
import ExperienceCardComponent from "./Experiences/experienceCardComponent.vue";

const experiences = useConvexQuery(api.resume.getExperiences);

</script>
<template>
    <div class="bg-[#205295] md:h-150 flex flex-col gap-6">
        <div class="h-full flex flex-col gap-12 mx-20">
            <div class="mt-20">
            <h2 class="text-5xl">Professional Experiences</h2>
            </div>
            <div class="flex gap-12 justify-center">
                
                <div v-for="value in experiences.data.value" >
                    <ExperienceCardComponent :experience="value"/>
                </div>
            </div>
        </div>
    </div>
    
</template>