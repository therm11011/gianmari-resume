<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);


</script>

<template>
<div class="text-xl font-bold">
    {{ profile.data.value?.location }}
</div>  
</template>