<template>
  <div>
    <div class="form">
      <h1 class="heading">Create new gradebook</h1>
      <b-jumbotron>
        <b-form-group id="input-name" label="Gradebook name:" label-for="name">
          <b-form-input
            class="input-filed"
            id="name"
            type="text"
            required
            placeholder="Enter name of gradebook"
            v-model="gradebook.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="professor_id"
          label="Professor:"
          label-for="input-1"
          description="Pleasse select avalible professor."
        >
          <b-form-select v-model="gradebook.professor_id" class="mb-4">
            <b-form-select-option :value="null">Please select professor</b-form-select-option>
            <b-form-select-option
              v-for="prof in avalibleProfessors"
              :key="prof.id"
              :value="prof.id"
            >{{ prof.first_name}} {{ prof.last_name }}</b-form-select-option>
          </b-form-select>
        </b-form-group>
        <br />
        <b-button class="btn-submit" variant="primary" @click="submitGradebook">Submit</b-button>
        <b-button variant="danger" @click="cancel">Cancel</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
  name: "GradebookForm",
  props: {
    avalibleProfessors: {
      type: Array,
      required: true
    },
    handlePostGradebook: {
      type: Function,
      required: true
    }
  },
  methods: {
    submitGradebook() {
      this.handlePostGradebook(this.gradebook);
    },
    cancel() {
      this.$router.push("/gradebooks");
    }
  },
  created() {},
  data() {
    return {
      selected: {},
      gradebook: {}
    };
  }
};
</script>
<style scoped>
.form {
  margin-top: 150px;
}
.mb-4 {
  width: 400px;
}
.input-filed {
  width: 400px;
  margin-left: 29%;
}
.heading {
  margin-bottom: 30px;
}
.btn-submit {
  margin-right: 7px;
}
</style>