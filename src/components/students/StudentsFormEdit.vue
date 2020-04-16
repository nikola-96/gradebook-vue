<template>
  <div>
    <div class="form-container">
      <h1 class="heading">Edit student</h1>
      <b-jumbotron>
        <form class="form">
          <b-row class="my-1">
            <b-col sm="2">
              <label for="Name">Name:</label>
            </b-col>
            <b-col sm="7">
              <b-form-input
                required
                id="name"
                type="text"
                placeholder="Enter student name"
                v-model="first_name"
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
                required
                placeholder="Enter student last name"
                v-model="last_name"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="2">
              <label for="url">Image url:</label>
            </b-col>
            <b-col sm="7">
              <b-form-input required id="url" placeholder="Enter image url" v-model="imageUrl"></b-form-input>
            </b-col>
          </b-row>
          <b-button @click="editStudent" variant="primary">Edit</b-button>
        </form>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    student: {
      type: Object,
      required: true
    },
    handleEditAction: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      imageUrl: "",
      studentEdited: {}
    };
  },
  created() {
    this.first_name = this.student.first_name;
    this.last_name = this.student.last_name;
    this.imageUrl = this.student.imageUrl;
  },
  methods: {
    editStudent() {
      this.studentEdited.first_name = this.first_name;
      this.studentEdited.last_name = this.last_name;
      this.studentEdited.imageUrl = this.imageUrl;
      this.handleEditAction(this.studentEdited, this.student.id);
    }
  }
};
</script>