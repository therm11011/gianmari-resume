<script setup lang="ts">
import { ref } from 'vue';
import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"
import EducationComponent from "./Education/educationComponent.vue";

const activeColumn = ref<string | null>(null);
const education = useConvexQuery(api.resume.getEducation);

</script>

<template>
    <div class="w-screen flex flex-col bg-center bg-cover gap-6 bg-[#144272]">
        <div class="absolute my-10 z-10">
            <h1 class="text-xl border rounded-r-full px-6 py-3 bg-white font-extrabold text-sky-700 shadow-[0px_6px_0px_#144272]">EDUCATION</h1>
        </div>
        <div class="flex w-full overflow-hidden">
            <div
            v-for="edu in education.data.value"
            :key="edu.degree"
            @click="activeColumn = activeColumn === edu._id ? null : edu._id"
            class="relative h-100 flex md:flex-col justify-center items-center text-white transition-all duration-300 ease-in-out hover:scale-110 "
            :class="[

                activeColumn === null
                ? 'flex-1 hover:bg-sky-600'
                : activeColumn === edu._id
                ? 'flex-3 bg-sky-700 scale-100'
                : 'flex-0 overflow-hidden hidden opacity-0',

                edu.fieldOfStudy === 'Junior High School' 
                ? '' 
                : edu.fieldOfStudy === 'Senior High School'
                ? ''
                : ''
                ]"
            >
            <div class="flex flex-col items-center justify-center gap-4 w-sm py-3 rounded-2xl"
                 :class="[
                    activeColumn === null
                    ? ''
                    : activeColumn === edu._id
                    ? ''
                    : ''
                 ]">
                <img src="/assets/icons/orgs/adnu.png" alt="" class="w-20">
                <h1 class="text-3xl font-bold transition-all duration-100 text-center"
                    :class="activeColumn === edu._id ? '' : ''">
                    {{ edu.fieldOfStudy }}
                </h1>
            </div>
            <p class="text-center -mt-15 opacity-0 transition-all duration-100"
                :class="activeColumn === edu._id ? 'opacity-100 mt-0' : 'opacity-0'">
                <EducationComponent :education="edu" />
            </p>

            </div>
            
        </div>
    </div>
</template>