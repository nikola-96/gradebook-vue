<template>
  <div>
    <div class="form">
      <b-jumbotron>
        <div class="proba">
          <b-form-group label-cols="4" label-cols-lg="8" label-for="input-default">
            <b-form-input id="input-default"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="1" label-cols-lg="8" label-for="input-default">
            <b-form-input id="input-default1"></b-form-input>
          </b-form-group>
          <div>
            <label for="url">Type a new tag and press enter</label>
            <b-form-tags input-id="url" class="mb-4"></b-form-tags>
          </div>
          <b-form-select class="mb-4" v-if="gradebooks">
            <b-form-select-option :value="null">Please select gradebook</b-form-select-option>
            <b-form-select-option
              v-for="gradebook in gradebooks"
              :key="gradebook.id"
              :value="gradebook.id"
            >{{gradebook.name}}</b-form-select-option>
          </b-form-select>
          <br />

          <b-button variant="primary" @click="show">More Info</b-button>
        </div>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfessorForm",
  props: {
    gradebooks: {
      type: Array,
      required: true
    },
    data() {
      return {
        professor: {}
      };
    },
    methods: {
      show() {
        console.log(this.professor);
      }
    }
  }
};
</script>
<style scoped>
.form {
  margin-top: 150px;
}
.mb-4 {
  width: 340px;
}
/* .proba {
  flex-direction: column;
  justify-content: center;
} */
</style>