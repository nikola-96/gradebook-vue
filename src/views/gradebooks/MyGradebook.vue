<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <my-gradebook-card
            v-if="getMyGradebookFromState.gradebook"
            :professor="getMyGradebookFromState"
          />
          <h1 v-else>You don't have your gradebook</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MyGradebookCard from "@/components/gradebooks/MyGradebookCard.vue";

export default {
  name: "MyGradebook",
  components: {
    MyGradebookCard
  },
  methods: {
    ...mapActions(["getMyGradebook"])
  },
  computed: {
    ...mapGetters(["getMyGradebookFromState"])
  },
  async created() {
    await this.getMyGradebook();
  }
};
</script>