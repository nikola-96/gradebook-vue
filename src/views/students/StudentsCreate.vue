<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
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
      student: {}
    };
  },
  methods: {
    async postStudent(student) {
      await studentService.post(student);
    }
  },
  created() {
    const id = this.$route.params.id;
    this.student.id = id;
  }
};
</script>