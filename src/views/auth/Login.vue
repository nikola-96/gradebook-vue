<template>
  <div>
    <div
      class="alert alert-danger"
      v-for="(validationError, fieldName) in errors"
      :key="`validation-errors-${fieldName}`"
    >{{ ` ${validationError[0]}` }}</div>

    <login-form :user="user" :handleLogin="handleLogin" />
  </div>
</template>
<script>
import LoginForm from "@/components/auth/LoginForm.vue";
import authService from "@/services/AuthService.js";
import { mapActions, mapGetters } from "vuex";
import Errors from "@/components/errors/Errors";

export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
      user: {},
      errors: {}
    };
  },
  methods: {
    ...mapActions(["changeUserStatus", "setingErrors"]),
    async handleLogin(user) {
      try {
        await authService.login(user.email, user.password);
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
<style scoped>
.alert {
  margin-top: 50px;
}
</style>