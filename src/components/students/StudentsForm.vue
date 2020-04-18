<template>
  <div>
    <div class="form-container">
      <h1 class="heading">Create new student</h1>
      <b-jumbotron>
        <form class="form" @submit.prevent="handlePostStudent">
          <b-row class="my-1">
            <b-col sm="2">
              <label for="Name">Name:</label>
            </b-col>
            <b-col sm="7">
              <b-form-input
                id="name"
                type="text"
                placeholder="Enter student name"
                v-model="student.first_name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="last_name">Last name:</label>
            </b-col>
            <b-col sm="7">
              <b-form-input
                id="last_name"
                placeholder="Enter student last name"
                v-model="student.last_name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="url">Image url:</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="url" placeholder="Enter image url" v-model="student.url"></b-form-input>
            </b-col>
          </b-row>
          <b-button variant="primary" type="submit">More Info</b-button>
        </form>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentsForm",
  props: {
    student: {
      type: Object,
      required: true
    },
    postStudent: {
      type: Function,
      required: true
    }
  },
  methods: {
    handlePostStudent() {
      this.postStudent(this.student);
    }
  }
};
</script>
<style>
.form {
  margin-left: 100px;
}
.form-container {
  margin-top: 150px;
}
.my-1 {
  margin-top: 10px;
}
.heading {
  margin-bottom: 30px;
}
</style>