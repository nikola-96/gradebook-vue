<template>
  <div>
    <div
      class="alert alert-danger"
      v-for="(validationError, fieldName) in errors"
      :key="`validation-errors-${fieldName}`"
    >{{ ` ${validationError[0]}` }}</div>

    <register-form :user="user" :handleRegister="handleRegister" />
  </div>
</template>
<script>
import RegisterForm from "@/components/auth/RegisterForm";
import authService from "@/services/AuthService.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",
  components: {
    RegisterForm
  },
  data() {
    return {
      user: {},
      errors: {}
    };
  },
  methods: {
    ...mapActions(["changeUserStatus"]),
    async handleRegister(user) {
      try {
        await authService.register(user);
        this.changeUserStatus(true);
        this.$router.push("/gradebooks");
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errors = {};
            this.errors = Object.assign({}, {}, error.response.data.errors);
          }
        }
      }
    }
  }
};
</script>
<style >
.alert {
  margin-top: 50px;
}
</style>