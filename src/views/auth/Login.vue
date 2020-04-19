<template>
  <div>
    <div class="alert alert-danger" v-if="errors">{{ ` ${errors}` }}</div>

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
      errors: ""
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
          if (error.response.status === 401) {
            this.errors = error.response.data.error;
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