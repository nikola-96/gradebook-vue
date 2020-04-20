<template>
  <div>
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2" style="margin-right: 20%;"></b-col>
        <b-col sm="3">
          <b-form-input id="input-default" placeholder="Search professor" v-model="term"></b-form-input>
        </b-col>
        <b-button pill variant="outline-secondary" @click="searchTerm">Search</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SearchProfessor",
  props: {
    handleLoader: {
      type: Function,
      required: true
    },
    counter: {
      type: Function,
      required: false
    }
  },
  methods: {
    ...mapActions([
      "getIntitalLoadedProfessors",
      "getFiltredProfessors",
      "handleLoadButtonStatus"
    ]),
    async searchTerm() {
      await this.getFiltredProfessors(this.term);
      this.getIntitalLoadedProfessors();
      if (this.counter() == 0 || this.counter() >= 10) {
        this.handleLoadButtonStatus(true);
      } else {
        this.handleLoadButtonStatus(false);
      }
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