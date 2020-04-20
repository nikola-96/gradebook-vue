<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div
            class="alert alert-danger"
            v-for="(validationError, fieldName) in errors"
            :key="`validation-errors-${fieldName}`"
          >{{ ` ${validationError[0]}` }}</div>
          <students-form :student="student" :postStudent="postStudent" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import StudentsForm from "@/components/students/StudentsForm";
import studentService from "@/services/StudentService";

export default {
  name: "CreateStudents",
  components: {
    StudentsForm
  },
  data() {
    return {
      student: {},
      errors: {}
    };
  },
  methods: {
    async postStudent(student) {
      try {
        student.gradebook_id = this.$route.params.id;
        await studentService.post(student);
        this.$router.go(-1);
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = {};
          this.errors = Object.assign({}, {}, error.response.data.errors);
        }
      }
    }
  },
  created() {
    const id = this.$route.params.id;
    this.student.id = id;
  }
};
</script>