<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <professor-form :gradebooks="getAvalibleGradebooksFromState" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProfessorForm from "@/components/professors/ProfessorForm.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProfessorCreate",
  components: {
    ProfessorForm
  },
  methods: {
    ...mapActions(["getAvalibleGradebooks"])
  },
  computed: {
    ...mapGetters(["getAvalibleGradebooksFromState"])
  },
  async created() {
    await this.getAvalibleGradebooks();
  }
};
</script>