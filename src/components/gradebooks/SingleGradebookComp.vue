<template>
  <div>
    <div class="btn-student" v-if="gradebook.isAuth">
      <b-button
        class="btn-student-add"
        :to="`/gradebooks/${gradebook.id}/students/create`"
      >Add student</b-button>
      <b-button
        v-if="gradebook.isAuth"
        @click="handleDeleteGradebook"
        variant="danger"
      >Delete Gradebook</b-button>
      <b-button class="edit" to="/gradebooks/edit">Edit gradebook</b-button>
    </div>
    <div class="container-card">
      <b-card no-body :img-src="`${gradebook.url}`" img-alt="Professor dosen't have image." img-top>
        <template v-slot:header>
          <h4
            v-if="gradebook.professor"
            class="mb-0"
          >Profesor: {{ gradebook.professor.first_name }} {{ gradebook.professor.last_name }}</h4>
        </template>

        <b-card-body>
          <b-card-title>Gradebook: {{ gradebook.name }}</b-card-title>
        </b-card-body>
        <hr />
        <b-list-group flush v-if="gradebook.students">
          <p>
            <strong>Students:</strong>
          </p>
          <b-list-group-item
            v-for="student in gradebook.students"
            :key="student.id"
          >{{student.first_name}} {{student.last_name}}</b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleGradebookComp",
  props: {
    gradebook: {
      type: Object
    },
    deleteGradebook: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDeleteGradebook() {
      this.deleteGradebook(this.gradebook.id);
    }
  }
};
</script>
<style>
.container-card {
  margin-top: 70px;
  margin-bottom: 50px;
}
.btn-student {
  margin-top: 45px;
}
.btn-student-add {
  margin-right: 150px;
}
.edit {
  margin-left: 150px;
}
</style>