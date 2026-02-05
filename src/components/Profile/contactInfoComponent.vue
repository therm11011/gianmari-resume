<script setup lang="ts">

import { useConvexQuery } from "convex-vue";
import { api } from "../../../convex/_generated/api"

const profile = useConvexQuery(api.resume.getProfile);


</script>

<template>
<div class="flex flex-row lg:flex-col gap-6">
    <div class="flex gap-3 items-center">
        <div class="border border-[#144272] bg-[#144272] px-8 py-2 rounded-full shadow-[2px_2px_0px_#ffffff]">Name</div>
        <p>{{ profile.data.value?.name }}</p>
    </div>
    <div class="flex gap-3 items-center">
        <div class="border border-[#144272] bg-[#144272] px-8 py-2 rounded-full shadow-[2px_2px_0px_#ffffff]">Email</div>
        <p>{{ profile.data.value?.email }}</p>
    </div>
    <div class="flex gap-3 items-center">
        <div class="border border-[#144272] bg-[#144272] px-8 py-2 rounded-full shadow-[2px_2px_0px_#ffffff]">Number</div>
        <p>{{ profile.data.value?.number }}</p>
    </div>
</div>
</template>