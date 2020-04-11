<template>
  <div>
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
      user: {}
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
        console.log(error);
      }
    }
  }
};
</script>