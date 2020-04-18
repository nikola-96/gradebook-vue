<template>
  <div class="proba" v-if="professor.gradebook">
    <div class="btn-student">
      <b-button
        v-if="professor.gradebook.id"
        class="student"
        :to="`/gradebooks/${professor.gradebook.id}/students/create`"
      >Add student</b-button>
      <b-button @click="handleDeleteGradebook" variant="danger">Delete Gradebook</b-button>
      <b-button class="edit" to="/gradebooks/edit">Edit gradebook</b-button>
    </div>
    <div class="container-card">
      <b-card>
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
    },
    deleteGradebook: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDeleteGradebook() {
      this.deleteGradebook(this.professor.gradebook.id);
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
}
.btn-student {
  margin-top: 45px;
}
.student {
  margin-right: 150px;
}
.edit {
  margin-left: 150px;
}
</style>