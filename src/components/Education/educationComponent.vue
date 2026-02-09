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
    <div class="p-10">
      
      <div v-if="education.degree !== ''">
          <p>{{ education.degree }}</p>
          <p>{{ education.institution }}</p>
          <p>{{ education.startDate }} - {{ education.endDate }}</p>
          <!-- <p>{{ education.description }}</p> -->
      </div>
      <div v-else>
        <br>
        <p>{{ education.institution }}</p>
        <p>{{ education.startDate }} - {{ education.endDate }}</p>
      </div>
    </div>
</template>