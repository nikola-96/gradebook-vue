<template>
  <div>
    <div class="container" v-if="gradebooks">
      <hr />
      <div v-for="gradebook in gradebooks" :key="gradebook.id" class="conntent-gradebook">
        <h1>
          <router-link :to="`/gradebook/${gradebook.id}`">{{ gradebook.name }}</router-link>
        </h1>
        <p v-if="gradebook.professor">
          Professor name: prof.
          <router-link
            :to="`/professor/${gradebook.professor.id}`"
          >{{ gradebook.professor.first_name }} {{gradebook.professor.last_name}}</router-link>
        </p>
        <p v-else>Gradebook doesn't have professor</p>
        <p
          v-if="gradebook.created_at"
        >Created on: {{gradebook.created_at | formatDate(gradebook.created_at)}}</p>
        <hr />
      </div>
      <b-button v-if="!getLoadButtonStatus" @click="loadGradebooks" variant="secondary">Load More</b-button>
    </div>
    <h1 v-else class="heading-else">There is no gradebooks for now!</h1>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import DateMixin from "@/mixins/DateMixin.js";
export default {
  name: "GradebookList",
  props: {
    gradebooks: {
      type: Array
    },
    loadGradebooks: {
      type: Function,
      required: true
    }
  },
  mixins: [DateMixin],
  computed: {
    ...mapGetters(["getLoadButtonStatus"])
  }
};
</script> 
<style scoped>
.conntent-gradebook {
  height: 150px;
}
.container {
  margin-bottom: 20px;
}
.heading-else {
  margin-top: 150px;
}
</style>