<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"
import ExperienceCardComponent from "./Experiences/experienceCardComponent.vue";

const experiences = useConvexQuery(api.resume.getExperiences);

</script>
<template>
    <div class="bg-[#205295] w-screen md:h-120 flex flex-col gap-6">
        <div class="absolute my-10">
            <h1 class="text-xl border rounded-r-full px-6 py-3 bg-white font-extrabold text-sky-700 shadow-[0px_6px_0px_#144272]">EXPERIENCES</h1>
        </div>
        <div class="h-full flex flex-col gap-12 mx-20">
            <div class="mt-20">
                
            </div>
            <div class="flex gap-12 justify-center overflow-hidden">
                
                <div v-for="value in experiences.data.value" >
                    <ExperienceCardComponent :experience="value"/>
                </div>
            </div>
        </div>
    </div>
    
</template>