<template>
  <div>
    <ul v-if="errors">
      <li v-for="e in errors" :key="e">{{e}}</li>
    </ul>
    <div></div>
    <errors v-if="errors" />
    <register-form :user="user" :handleRegister="handleRegister" />
  </div>
</template>
<script>
import RegisterForm from "@/components/auth/RegisterForm";
import authService from "@/services/AuthService.js";
import { mapActions, mapGetters } from "vuex";
import Errors from "@/components/errors/Errors";

export default {
  name: "Register",
  components: {
    RegisterForm,
    Errors
  },
  data() {
    return {
      user: {},
      // first_name: "",
      // last_name: "",
      // password: "",
      // password_confirmation: "",
      // terms: "",
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
        this.errors.first_name = error.response.data.errors.first_name;
        this.errors.last_name = error.response.data.errors.last_name;
        this.errors.password = error.response.data.errors.password;
        this.errors.password_confirmation =
          error.response.data.errors.password_confirmation;
        this.errors.terms = error.response.data.errors.terms_conditions;
        console.log(this.errors);
      }
    }
  }
};
</script>