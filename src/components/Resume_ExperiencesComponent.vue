<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

const experiences = useConvexQuery(api.resume.getExperiences);

</script>
<template>
    <div class="flex flex-col gap-6">
        <div v-for="value in experiences.data.value">
            <p>{{ value.title }}</p>
            <p>{{ value.company }}</p>
            <p>({{ value.startDate }} - {{ value.endDate }})</p>
        </div>
    </div>
    
</template>