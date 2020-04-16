<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <gradebook-form-edit
            v-if="getMyGradebookFromState.gradebook && getAvalibleProfessorsFromState"
            :avalibleProfessors="getAvalibleProfessorsFromState"
            :gradebookForEdit="getMyGradebookFromState"
            :handlePostGradebook="handlePostGradebook"
            :deleteStudent="deleteStudent"
            :handlePostUpdate="handlePostUpdate"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import GradebookFormEdit from "@/components/gradebooks/GradebookFormEdit.vue";
import { mapActions, mapGetters } from "vuex";
import gradebookService from "@/services/GradebookService";
import studentService from "@/services/StudentService";

export default {
  name: "GradebookEdit",
  components: { GradebookFormEdit },
  methods: {
    ...mapActions(["getAvalibleProfessors", "getMyGradebook"]),
    async handlePostGradebook(gradebook) {
      const response = await gradebookService.postGradebook(gradebook);
      this.$router.push("/gradebooks");
    },
    async deleteStudent(id) {
      await studentService.deleteStudent(id);
      await this.getMyGradebook();
    },
    async handlePostUpdate(gradebook, id) {
      await gradebookService.put(gradebook, id);
    }
  },
  computed: {
    ...mapGetters(["getAvalibleProfessorsFromState", "getMyGradebookFromState"])
  },
  async created() {
    await this.getAvalibleProfessors();
    await this.getMyGradebook();
  }
};
</script>