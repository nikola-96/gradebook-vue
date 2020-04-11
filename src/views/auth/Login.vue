<template>
  <div>
    <login-form :user="user" :handleLogin="handleLogin" />
  </div>
</template>
<script>
import LoginForm from "@/components/auth/LoginForm.vue";
import authService from "@/services/AuthService.js";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
      user: {}
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
        console.log(error);
      }
    }
  }
};
</script>