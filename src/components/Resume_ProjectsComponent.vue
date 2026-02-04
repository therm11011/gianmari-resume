<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const projects = useConvexQuery(api.resume.getProjects);

let unsub: (() => void)[] = [];
</script>
<template>
    <div class="flex gap-6">
        <div v-for="value in projects.data.value">
            <p>{{ value.title }}</p>
            <p>{{ value.description }}</p>
            <p>{{ value.link }}</p>
        </div>
    </div>
</template>