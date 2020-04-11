<template>
  <div>
    <professors-list :professors="getAllProfessorsFromState" />
  </div>
</template>
<script>
import ProfessorsList from "@/components/professors/ProfessorsList/";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Professor",
  components: {
    ProfessorsList
  },
  methods: {
    ...mapActions(["getAllProfessors"])
  },
  computed: {
    ...mapGetters(["getAllProfessorsFromState"])
  },
  async created() {
    await this.getAllProfessors();
  }
};
</script>