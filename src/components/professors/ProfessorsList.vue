<template>
  <div>
    <div v-for="professor in professors" :key="professor.id">
      <p>{{ professor.first_name }} {{ professor.last_name }}</p>
      <p v-if="professor.gradebook">{{ professor.gradebook.name }}</p>
      <p v-else>Professor is avalible.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfessorsList",
  props: {
    professors: {
      type: Array,
      required: true
    }
  }
};
</script>