<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
          <b-nav-item to="/gradebooks">Gradebooks</b-nav-item>
          <b-nav-item to="/professors">All Profesors</b-nav-item>
          <b-nav-item to="/gradebook/create">Add Gradebook</b-nav-item>
          <b-nav-item to="/my-gradebook">My Gradebook</b-nav-item>
          <!-- <b-nav-item to="/professors/create">Add Professor</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="getUserStatus">
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import authService from "@/services/AuthService.js";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(["changeUserStatus"]),
    handleLogout() {
      authService.logout();
      this.changeUserStatus(false);
      this.$router.push("/login");
      // this.$router.reload("/login");
    }
  },
  computed: {
    ...mapGetters(["getUserStatus"])
  },
  created() {
    this.changeUserStatus(authService.isAuthenticated());
  }
};
</script>