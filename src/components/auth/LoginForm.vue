<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <form @submit.prevent="onSubmit">
          <div class="container">
            <div class="row">
              <div class="col-md-offset-4 col-md-4" style="  margin-left: 30%;">
                <div class="form-login">
                  <h4>Please Login.</h4>
                  <input
                    type="email"
                    id="email"
                    class="form-control input-sm chat-input"
                    placeholder="Email"
                    v-model="user.email"
                  />
                  <br />
                  <input
                    type="password"
                    id="userPassword"
                    class="form-control input-sm chat-input"
                    placeholder="password"
                    v-model="user.password"
                  />
                  <br />
                  <div class="wrapper">
                    <span class="group-btn">
                      <b-button type="submit" variant="outline-primary">Login</b-button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "LoginForm",
  props: {
    user: {
      type: Object,
      required: true
    },
    handleLogin: {
      type: Function,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.handleLogin(this.user);
    }
  }
};
</script>
<style scoped>
body {
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto, arial, sans-serif;
}

.container {
  padding: 25px;
}

.form-login {
  background-color: #ededed;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 15px;
  border-color: #d2d2d2;
  border-width: 5px;
  box-shadow: 0 1px 0 #cfcfcf;
}

h4 {
  border: 0 solid #fff;
  border-bottom-width: 1px;
  padding-bottom: 10px;
  text-align: center;
}

.form-control {
  border-radius: 10px;
}

.wrapper {
  text-align: center;
}
</style>