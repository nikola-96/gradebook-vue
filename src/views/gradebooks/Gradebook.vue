<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <gradebook-list :gradebooks="getAllGradebooksFromState" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import GradebookList from "@/components/gradebooks/GradebookList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Gradebook",
  components: {
    GradebookList
  },
  methods: {
    ...mapActions(["getAllGradebooks"])
  },
  computed: {
    ...mapGetters(["getAllGradebooksFromState"])
  },
  async created() {
    await this.getAllGradebooks();
  }
};
</script>