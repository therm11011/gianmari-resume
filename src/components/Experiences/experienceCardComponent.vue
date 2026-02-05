<script setup lang="ts">

defineProps<{
  experience: {
    title: string
    company: string
    location: string
    description: string
    jobType: string
    startDate: string
    endDate: string
  }
}>()
</script>
<template>
    <div class="relative flex flex-col gap-3 border border-[#2C74B3] bg-[#144272] rounded-2xl w-130">
        <div v-if="experience.company === 'Advanced World Solutions'">
        <img
            src="/assets/icons/orgs/aws.png"
            alt=""
            class="absolute right-3 bottom-3 w-60 opacity-50 pointer-events-none"
        />
        </div>
        <div v-if="experience.company === 'Ateneo de Naga University'">
        <img
            src="/assets/icons/orgs/nocs.png"
            alt=""
            class="absolute invert right-0 bottom-0 w-60 opacity-50 pointer-events-none"
            
        />
        </div>
        <div v-if="experience.company === 'Provincial Government of Camarines Sur'">
        <img
            src="/assets/icons/orgs/camsur.png"
            alt=""
            class="absolute right-3 bottom-3 w-50 opacity-40 pointer-events-none"
        />
        </div>
        <div class="mx-10 my-5 h-50">
            <div>
                <p class="font-extrabold text-xl w-70">{{ experience.title }}</p>
                <p>{{ experience.jobType }}</p>
            </div>
            
            <div>
            <p class="w-50">{{ experience.company }}</p>
            <p class="w-100">{{ experience.location }}</p>
            <p>{{ experience.startDate }} - {{ experience.endDate }}</p>

            </div>
        </div>
    </div>
    
</template>