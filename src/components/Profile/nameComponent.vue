<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);


</script>

<template>
<div class="text-8xl">
    {{ profile.data.value?.name }}
</div>  
</template>