<template>
  <div>
    <div>
      <p>{{ getSingleProfessorFromState.first_name}}</p>
      <p>{{getSingleProfessorFromState.gradebook.name }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleeProfessor",
  methods: {
    ...mapActions(["getSingleProessor"])
  },
  computed: {
    ...mapGetters([["getSingleProfessorFromState"]])
  },

  async created() {
    const id = this.$route.params.id;
    await this.getSingleProessor(id);
  }
};
</script>   