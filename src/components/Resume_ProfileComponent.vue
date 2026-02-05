<script setup lang="ts">
import SummaryComponent from "./Profile/summaryComponent.vue";
import SocialsComponent from "./Profile/socialsComponent.vue";
import ContactInfoComponent from "./Profile/contactInfoComponent.vue";
import NameComponent from "./Profile/nameComponent.vue";
import LocationComponent from "./Profile/locationComponent.vue";
</script>
<template>
    <!-- Hero -->
    <div class="h-screen flex flex-col items-center justify-center">
        <NameComponent />  
        
    </div>
    <!-- About Me -->
    <div class="bg-[#2C74B3] md:h-200 flex flex-col gap-6">
        <div class="h-full flex flex-col md:flex-row gap-12 mx-20">
            <div class="w-1/2">
                <div class="flex flex-col gap-6">
                    <div class="mt-20">
                        <h1 class="text-5xl">About Me</h1>
                    </div>
                    <ContactInfoComponent />
                    <LocationComponent />
                    <SummaryComponent />
                    <SocialsComponent />
                </div>
            </div> 

            <div class="w-1/2 flex items-center justify-center">
                <img src="/assets/images/portrait.JPG" alt="" class="w-150 h-150 object-cover object-top rounded-3xl shadow-[12px_12px_0px_#144272]">
            </div>
         </div> 
    </div>
</template>