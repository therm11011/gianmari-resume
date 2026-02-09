<script setup lang="ts">
import { useConvexQuery } from "convex-vue";
import { api } from "../../convex/_generated/api"

import SummaryComponent from "./Profile/summaryComponent.vue";
import SocialsComponent from "./Profile/socialsComponent.vue";
import ContactInfoComponent from "./Profile/contactInfoComponent.vue";
import NameComponent from "./Profile/nameComponent.vue";
import LocationComponent from "./Profile/locationComponent.vue";

const profile = useConvexQuery(api.resume.getProfile);

</script>
<template>
    <!-- Hero -->
    <div class="h-screen flex flex-col items-center justify-center">
        <NameComponent />  
        
    </div>
    <!-- About Me -->
    <div class="bg-[#2C74B3] md:h-200 flex flex-col gap-6">
        <div class="absolute my-10">
            <h1 class="text-xl border rounded-r-full px-6 py-3 bg-white font-extrabold text-sky-700 shadow-[0px_6px_0px_#144272]">ABOUT ME</h1>
        </div>
        <div class="h-full flex flex-col md:flex-row gap-12 mx-20 my-10">
            <div class="w-1/2">
                <div class="flex flex-col gap-6">
                    <div class="mt-20">
                        
                    </div>
                    <ContactInfoComponent :profile="profile"/>
                    <LocationComponent :profile="profile"/>
                    <SummaryComponent :profile="profile"/>
                    <SocialsComponent :profile="profile"/>
                </div>
            </div> 

            <div class="w-1/2 flex items-center justify-center">
                <img src="/assets/images/portrait.JPG" alt="" class="w-150 h-150 object-cover object-top rounded-3xl shadow-[30px_12px_0px_#144272]">
            </div>
         </div> 
    </div>
</template>