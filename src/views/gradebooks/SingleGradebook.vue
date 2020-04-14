<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <single-gradebook-comp
            v-if="getSingleGradebookFromState"
            :gradebook="getSingleGradebookFromState"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SingleGradebookComp from "@/components/gradebooks/SingleGradebookComp";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SingleGradebook",
  components: {
    SingleGradebookComp
  },
  methods: {
    ...mapActions(["getSingleGradebook"])
  },
  computed: {
    ...mapGetters(["getSingleGradebookFromState"])
  },
  async created() {
    const id = this.$route.params.id;
    await this.getSingleGradebook(id);
  }
};
</script>