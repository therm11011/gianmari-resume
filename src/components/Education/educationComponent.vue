<script setup lang="ts">

defineProps<{
  education: {
    institution: string
    degree: string
    fieldOfStudy: string
    description: string
    startDate: string
    endDate: string
  }
}>()
</script>

<template>
    <div class="">
      
      <div v-if="education.degree !== ''">
          <p>{{ education.degree }}</p>
          <p>{{ education.institution }}</p>
          <p>{{ education.startDate }} - {{ education.endDate }}</p>
          <!-- <p>{{ education.description }}</p> -->
      </div>
      <div v-else>
        <p>{{ education.institution }}</p>
        <p>{{ education.startDate }} - {{ education.endDate }}</p>
        <br>
      </div>
    </div>
</template>