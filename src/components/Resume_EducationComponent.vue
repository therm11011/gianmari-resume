<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const education = useConvexQuery(api.resume.getEducation);

let unsub: (() => void)[] = [];
</script>
<template>
    <div v-for="value in education.data.value">
        <p>{{ value.degree }}</p>
        <p>{{ value.startDate }} - {{ value.endDate }}</p>
        <p>{{ value.institution }}</p>
        <p>{{ value.description }}</p>
    </div>
</template>