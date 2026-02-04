<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const skills = useConvexQuery(api.resume.getSkills);

let unsub: (() => void)[] = [];
</script>
<template>
    <div class="flex flex-col gap-6">
        <h2 class="text-2xl">SKILLS</h2>
        <div v-for="value in skills.data.value">
            <p>{{ value.name }}</p>
        </div>
    </div>
</template>