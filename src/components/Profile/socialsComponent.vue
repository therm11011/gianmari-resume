<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);


</script>

<template>
<div class="flex gap-6 items-center">
    <div v-for="link in profile.data.value?.links">
        <a :href="link">
        <span v-if="link.includes('facebook.com')" class="flex gap-3 item-center">
            <img src="/assets/icons/socials/facebook-color-svgrepo-com.svg" alt="" class="w-8 dark:bg-white rounded">
            @giaaanmari
        </span>
        <span v-else-if="link.includes('linkedin.com')" class="flex gap-3">
            <img src="/assets/icons/socials/linkedin-svgrepo-com.svg" alt="" class="w-12 dark:w-8 dark:bg-white rounded">
            Gian Mari Ramos
        </span>
        </a>
    </div>
</div>
</template>