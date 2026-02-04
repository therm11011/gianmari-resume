<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const skills = useConvexQuery(api.resume.getSkills);

let unsub: (() => void)[] = [];
</script>
<template>
    <div v-for="value in skills.data.value">
        <p>{{ value.name }}</p>
    </div>
</template>