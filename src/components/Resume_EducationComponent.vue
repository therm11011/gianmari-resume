<script setup lang="ts">
import { ref } from 'vue';
import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"
import EducationComponent from "./Education/educationComponent.vue";

const activeColumn = ref<string | null>(null);
const education = useConvexQuery(api.resume.getEducation);

</script>

<template>
    <div class="flex flex-col gap-6 bg-sky-600">
        <div class="absolute my-10">
            <h1 class="text-xl border rounded-r-full px-6 py-3 bg-white font-extrabold text-sky-700 shadow-[0px_6px_0px_#144272]">EDUCATION</h1>
        </div>
        <div class="flex h-150 w-full overflow-hidden">
            <div
            v-for="edu in education.data.value"
            :key="edu.degree"
            @click="activeColumn = activeColumn === edu._id ? null : edu._id"
            class="h-full flex flex-col justify-center items-center text-white transition-all duration-500 ease-in-out cursor-pointer"
            :class="[
                ,
                // If nothing is hovered, default to 1/3 width
                activeColumn === null ? 'w-1/3' : 
                // If this column is hovered, expand, otherwise shrink
                activeColumn === edu._id ? 'w-3/5 bg-sky-700' : 'w-2/5 bg-sky-600'
            ]"
            >
            <h1 class="text-3xl font-bold transition-all duration-500"
                :class="activeColumn === edu._id ? '' : ''">
                {{ edu.fieldOfStudy }}
            </h1>
            <p class="mt-4 opacity-0 transition-opacity duration-300"
                :class="activeColumn === edu._id ? 'opacity-100' : 'opacity-0'">
                <EducationComponent :education="edu" />
            </p>
            </div>
        </div>
    </div>
</template>