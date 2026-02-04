<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const references = useConvexQuery(api.resume.getReferences);

let unsub: (() => void)[] = [];
</script>
<template>
    <div class="flex gap-6">
        <div v-for="value in references.data.value">
            <p>{{ value.name }}</p>
            <p>{{ value.jobTitle }}</p>
            <p>{{ value.company }}</p>
            <p>{{ value.contactInfo }}</p>
        </div>
        
    </div>
</template>