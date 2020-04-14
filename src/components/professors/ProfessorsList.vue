<template>
  <div class="container">
    <div v-for="professor in professors" :key="professor.id" class="image-container">
      <b-card no-body class="overflow-hidden" style="max-height: 280px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              v-if="professor.url"
              :src="`${professor.url}`"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body>
              <b-card-text>
                <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
                <p v-if="professor.gradebook">{{ professor.gradebook.name }}</p>
                <p v-else>Professor is avalible</p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <b-button
      class="btn-loader"
      v-if="!getLoadButtonStatus"
      @click="loadProfessors"
      variant="secondary"
    >Load More</b-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProfessorsList",
  props: {
    professors: {
      type: Array,
      required: true
    },
    loadProfessors: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getLoadButtonStatus"])
  }
};
</script>
<style scoped>
.image-container {
  margin-top: 30px;
}
.container {
  margin-bottom: 20px;
}
.btn-loader {
  margin-top: 20px;
}
</style>