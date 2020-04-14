<template>
  <div>
    <div class="btn-student">
      <b-button :to="`/gradebooks/${professor.gradebook.id}/students/create`">Add student</b-button>
    </div>
    <div class="container-card">
      <b-card no-body :img-src="`${professor.url}`" img-alt="Professor dosen't have image." img-top>
        <template v-slot:header>
          <h4 class="mb-0">Profesor: {{ professor.first_name }} {{ professor.last_name }}</h4>
        </template>

        <b-card-body>
          <b-card-title>Gradebook: {{ professor.gradebook.name }}</b-card-title>
        </b-card-body>
        <hr />
        <b-list-group flush v-if="professor.students">
          <p>
            <strong>Students:</strong>
          </p>
          <b-list-group-item
            v-for="student in professor.students"
            :key="student.id"
          >{{student.first_name}} {{student.last_name}}</b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    professor: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      students: {}
    };
  },
  created() {}
};
</script>
<style scoped>
.container-card {
  margin-top: 70px;
  margin-bottom: 50px;
  height: 50px;
}
.btn-student {
  margin-top: 45px;
}
</style>