<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h1>All Professors</h1>
          <hr />
          <search-professor :handleLoader="handleLoader" :counter="counter" />
          <hr />
          <professors-list :professors="getLoadedProfessors" :loadProfessors="handleLoader" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProfessorsList from "@/components/professors/ProfessorsList/";
import SearchProfessor from "@/components/professors/SearchProfessor";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Professor",
  components: {
    ProfessorsList,
    SearchProfessor
  },
  methods: {
    ...mapActions([
      "getAllProfessors",
      "getIntitalLoadedProfessors",
      "handleLoadButtonStatus",
      "handleLoadingProfessors"
    ]),
    handleLoader() {
      if (this.counter() == 0) {
        this.handleLoadButtonStatus(true);

        return;
      }
      if (this.getLoader <= this.counter()) {
        this.handleLoadingProfessors({
          start: this.getLoadedProfessors.length,
          end: this.getLoader + this.getLoadedProfessors.length
        });
        if (this.counter() == 0) {
          this.handleLoadButtonStatus(true);
        }
        return;
      }
      if (this.getLoader > this.counter()) {
        this.handleLoadingProfessors({
          start: this.getLoadedProfessors.length,
          end: this.getLoadedProfessors.length + this.counter()
        });
        this.handleLoadButtonStatus(true);
      }
    },
    counter() {
      return (
        this.getAllProfessorsFromState.length - this.getLoadedProfessors.length
      );
    }
  },

  computed: {
    ...mapGetters([
      "getAllProfessorsFromState",
      "getLoadedProfessors",
      "getLoader"
    ])
  },
  async created() {
    await this.getAllProfessors();
    this.getIntitalLoadedProfessors();
    this.handleLoadButtonStatus(false);
  }
};
</script>