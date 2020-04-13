<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h1>The Gradebooks List</h1>
          <hr />
          <search-gradebook />
          <gradebook-list :gradebooks="getLoadedGradebooks" :loadGradebooks="handleLoader" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import GradebookList from "@/components/gradebooks/GradebookList.vue";
import SearchGradebook from "@/components/gradebooks/SearchGradebook.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Gradebook",
  components: {
    GradebookList,
    SearchGradebook
  },
  methods: {
    ...mapActions([
      "getAllGradebooks",
      "handleLoadingGradebooks",
      "getIntitalLoadedGradebooks",
      "handleLoadButtonStatus"
    ]),

    handleLoader() {
      console.log("uso sam u upit");
      console.log(this.counter());

      if (this.counter() == 0) {
        this.handleLoadButtonStatus(true);

        return;
      }
      if (this.getLoader <= this.counter()) {
        this.handleLoadingGradebooks({
          start: this.getLoadedGradebooks.length,
          end: this.getLoader + this.getLoadedGradebooks.length
        });
        if (this.counter() == 0) {
          this.handleLoadButtonStatus(true);
        }

        return;
      }
      if (this.getLoader > this.counter()) {
        this.handleLoadingGradebooks({
          start: this.getLoadedGradebooks.length,
          end: this.getLoadedGradebooks.length + this.counter()
        });

        this.handleLoadButtonStatus(true);
      }
    },
    counter() {
      return (
        this.getAllGradebooksFromState.length - this.getLoadedGradebooks.length
      );
    }
  },
  computed: {
    ...mapGetters([
      "getAllGradebooksFromState",
      "getLoadedGradebooks",
      "getLoader"
    ])
  },
  async created() {
    await this.getAllGradebooks();
    this.getIntitalLoadedGradebooks();
    this.handleLoadButtonStatus(false);
  }
};
</script>