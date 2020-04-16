<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
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
      await professorService.postProfessor(professor);
      this.$router.push("/professors");
    }
  },
  computed: {
    ...mapGetters(["getAvalibleGradebooksFromState", "stateForProfessorImage"])
  },
  async created() {
    await this.getAvalibleGradebooks();
  }
};
</script>