<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <students-form-edit
            v-if="getSingleStudentFromState.first_name"
            :student="getSingleStudentFromState"
            :handleEditAction="handleEditAction"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import StudentsFormEdit from "@/components/students/StudentsFormEdit.vue";
import { mapActions, mapGetters } from "vuex";
import studentService from "@/services/StudentService";
export default {
  components: {
    StudentsFormEdit
  },
  methods: {
    ...mapActions(["getSingleStudent", "setStudentToNull"]),
    async handleEditAction(student, id) {
      const response = await studentService.updateStudent(student, id);
      this.setStudentToNull();
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapGetters(["getSingleStudentFromState"])
  },
  async created() {
    const id = this.$route.params.id;
    await this.getSingleStudent(id);
  }
};
</script>