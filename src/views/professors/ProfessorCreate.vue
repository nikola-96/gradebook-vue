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
          <professor-form
            :gradebooks="getAvalibleGradebooksFromState"
            :handlePostProffesor="handlePostProffesor"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProfessorForm from "@/components/professors/ProfessorForm.vue";
import { mapActions, mapGetters } from "vuex";
import professorService from "@/services/ProfessorService";
export default {
  name: "ProfessorCreate",
  components: {
    ProfessorForm
  },
  methods: {
    ...mapActions(["getAvalibleGradebooks"]),
    async handlePostProffesor(professor) {
      try {
        await professorService.postProfessor(professor);
        this.$router.push("/professors");
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
    ...mapGetters(["getAvalibleGradebooksFromState", "stateForProfessorImage"])
  },
  async created() {
    await this.getAvalibleGradebooks();
  },
  data() {
    return {
      errors: {}
    };
  }
};
</script>
<style >
.alert {
  margin-top: 50px;
}
</style>