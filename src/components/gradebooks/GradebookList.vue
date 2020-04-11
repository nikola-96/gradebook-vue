<template>
  <div class="container">
    <div v-for="gradebook in gradebooks" :key="gradebook.id" class="gradebook-container">
      <p>
        Name:
        <router-link :to="`/gradebook/${gradebook.id}`">{{ gradebook.name }}</router-link>
      </p>
      <p v-if="gradebook.professor">
        Professor:
        <router-link
          :to="`/professor/${gradebook.professor.id}`"
        >{{ gradebook.professor.first_name }}</router-link>
      </p>
      <p v-else>Gradebook doesn't have professor</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GradebookList",
  props: {
    gradebooks: {
      type: Array
    }
  }
};
</script> 
<style scoped>
</style>