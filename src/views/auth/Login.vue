<template>
  <div>
    <div v-if="errors" class="errors">
      <errors :errors="errors" />
    </div>
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
    LoginForm,
    Errors
  },
  data() {
    return {
      user: {},
      errors: []
    };
  },
  methods: {
    ...mapActions(["changeUserStatus"]),
    async handleLogin(user) {
      try {
        await authService.login(user.email, user.password);
        this.changeUserStatus(true);
        this.$router.push("/gradebooks");
      } catch (error) {
        this.errors = error.response.data;
      }
    }
  }
};
</script>
<style scoped>
.errors {
  margin-top: 150px;
}
</style>