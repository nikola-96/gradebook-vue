<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div
            class="alert alert-danger"
            v-for="(validationError, fieldName) in errors"
            :key="`validation-errors-${fieldName}`"
          >{{ ` ${validationError[0]}` }}</div>
          <gradebook-form
            :avalibleProfessors="getAvalibleProfessorsFromState"
            :handlePostGradebook="handlePostGradebook"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import GradebookForm from "@/components/gradebooks/GradebookForm.vue";
import { mapActions, mapGetters } from "vuex";
import gradebookService from "@/services/GradebookService";

export default {
  components: {
    GradebookForm
  },
  methods: {
    ...mapActions(["getAvalibleProfessors"]),
    async handlePostGradebook(gradebook) {
      try {
        const response = await gradebookService.postGradebook(gradebook);
        this.$router.push("/gradebooks");
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errors = {};
            this.errors = Object.assign({}, {}, error.response.data.errors);
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(["getAvalibleProfessorsFromState"])
  },
  async created() {
    await this.getAvalibleProfessors();
  },
  data() {
    return {
      errors: []
    };
  }
};
</script>
<style>
.alert {
  margin-top: 50px;
}
</style>