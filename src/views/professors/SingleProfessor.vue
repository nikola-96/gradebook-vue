<template>
  <div>
    <div :v-if="getSingleProfessorFromState" class="container-content">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <div>
              <b-card no-body class="overflow-hidden" style="max-height: 440px;">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      v-if="getSingleProfessorFromState.url"
                      :src="`${getSingleProfessorFromState.url}`"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <b-card-header>
                        <h1>{{getSingleProfessorFromState.first_name}} {{getSingleProfessorFromState.last_name}}</h1>
                      </b-card-header>
                      <b-card-text>
                        <p
                          v-if="getSingleProfessorFromState.gradebook"
                        >Gradebook: {{getSingleProfessorFromState.gradebook.name}}</p>
                        <p v-else>Professor doesen't have a gradebook yet.</p>
                        <p v-if="students">Number of the students in the class: {{students}}</p>
                        <p v-else>For now there in is no students in class.</p>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>     

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SingleeProfessor",
  methods: {
    ...mapActions(["getSingleProfessor"])
  },
  computed: {
    ...mapGetters([["getSingleProfessorFromState"]])
  },
  data() {
    return {
      students: 0
    };
  },

  async created() {
    const id = this.$route.params.id;
    await this.getSingleProfessor(id);
    console.log(this.getSingleProfessorFromState);

    this.students = this.getSingleProfessorFromState.students.length;
  }
};
</script>   
<style>
.container-content {
  margin-top: 150px;
}
</style>