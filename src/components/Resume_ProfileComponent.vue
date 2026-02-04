<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);


</script>
<template>
    <div class="flex flex-col items-center justify-center">
        <div class="text-2xl font-bold">
            {{ profile.data.value?.name }}
        </div>    
        <div>{{ profile.data.value?.title }}</div>
        <div class="flex gap-6">
            <p>{{ profile.data.value?.email }}</p>
            <p>{{ profile.data.value?.number }}</p>
        </div>
        <div class="flex gap-6">
            <div v-for="links in profile.data.value?.links">
                {{ links }}
            </div>
        </div>
        <div>
            <p>{{ profile.data.value?.location }}</p>
        </div>
        <div class="flex gap-6 mx-20 mt-5">
            <div class="border">
                <p>{{ profile.data.value?.summary }}</p>
            </div>
        </div>
    </div>
    
    
    
    
    
</template>