<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
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
        console.log(error.response);
      }
    }
  },
  computed: {
    ...mapGetters(["getAvalibleProfessorsFromState"])
  },
  async created() {
    await this.getAvalibleProfessors();
  }
};
</script>
<style>
</style>