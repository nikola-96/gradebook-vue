<template>
  <div>
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2" style="margin-right: 20%;">
          <!-- <label for="input-default">Default:</label> -->
        </b-col>
        <b-col sm="3">
          <b-form-input id="input-default" placeholder="Search gradebook" v-model="term"></b-form-input>
        </b-col>
        <b-button pill variant="outline-secondary" @click="searchTerm">Search</b-button>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchComponent",
  methods: {
    ...mapActions(["getFiltredGradebooks", "getIntitalLoadedGradebooks"]),
    async searchTerm() {
      await this.getFiltredGradebooks(this.term);
      this.getIntitalLoadedGradebooks();
    }
  },
  data() {
    return {
      term: ""
    };
  }
};
</script>
<style >
</style>