 <template>
  <div>
    <div class="form">
      <h1 class="heading">Edit gradebook</h1>
      <b-jumbotron>
        <b-form-group id="input-name" label="Gradebook name:" label-for="name">
          <b-form-input
            class="input-filed"
            id="name"
            type="text"
            required
            v-model="name"
            placeholder="Enter name of gradebook"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="professor_id"
          label="Professor:"
          label-for="input-1"
          description="Pleasse select avalible professor."
        >
          <b-form-select v-model="professor" class="mb-4">
            <b-form-select-option
              :value="null"
              disabled
            >{{gradebookForEdit.first_name}} {{gradebookForEdit.last_name}} is professor</b-form-select-option>
            <b-form-select-option
              v-for="prof in avalibleProfessors"
              :key="prof.id"
              :value="prof.id"
            >{{ prof.first_name}} {{ prof.last_name }}</b-form-select-option>-->
          </b-form-select>
        </b-form-group>
        <br />
        <b-button @click="updateGradebook" class="btn-submit" variant="primary">Edit</b-button>
      </b-jumbotron>
    </div>
    <div>
      <p v-if="gradebookForEdit.student">
        <strong>Students:</strong>
      </p>
      <b-list-group>
        <b-list-group-item v-for="student in gradebookForEdit.students" :key="student.id">
          {{student.first_name}} {{student.last_name}}
          <b-button
            :to="`/gradebooks/student/edit/${student.id}`"
            class="btn-submit"
            variant="primary"
          >Edit</b-button>
          <b-button @click="handleDeleteStudent(student.id)" variant="danger">Remove</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avalibleProfessors: {
      type: Array,
      required: true
    },
    gradebookForEdit: {
      type: Object,
      required: true
    },
    deleteStudent: {
      type: Function,
      required: true
    },
    handlePostUpdate: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleDeleteStudent(id) {
      this.deleteStudent(id);
    },
    updateGradebook() {
      this.gradebook.name = this.name;
      this.gradebook.professor = this.professor;
      this.handlePostUpdate(this.gradebook, this.gradebookForEdit.gradebook.id);
      this.gradebook = {};
      this.$router.go(-1);
    }
  },
  data() {
    return {
      name: "",
      professor: 0,
      gradebook: {}
    };
  },
  created() {
    this.name = this.gradebookForEdit.gradebook.name;
  }
};
</script>
<style scoped>
.form {
  margin-top: 50px;
}
.mb-4 {
  width: 400px;
}
.input-filed {
  width: 400px;
  margin-left: 29%;
}
.heading {
  margin-bottom: 10px;
}
.btn-submit {
  margin-right: 1px;
}
</style>
