<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div class="container">
          <div class="row">
            <div class="col-md-offset-5 col-md-5" style="  margin-left: 25%;">
              <form @submit.prevent="onSubmit">
                <div class="form-login">
                  <h4>Please Register.</h4>
                  <input
                    type="text"
                    id="first_name"
                    class="form-control input-sm chat-input"
                    placeholder="First Name"
                    v-model="user.first_name"
                  />
                  <br />
                  <input
                    type="text"
                    id="last_name"
                    class="form-control input-sm chat-input"
                    placeholder="Last Name"
                    v-model="user.last_name"
                  />
                  <br />
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
                    id="password"
                    class="form-control input-sm chat-input"
                    placeholder="Password"
                    v-model="user.password"
                  />
                  <br />
                  <input
                    type="password"
                    id="password_confirmation"
                    class="form-control input-sm chat-input"
                    placeholder="Confirm Password"
                    v-model="user.password_confirmation"
                  />
                  <br />
                  <b-form-checkbox
                    id="terms_conditions"
                    name="terms_conditions"
                    value="1"
                    unchecked-value="0"
                    v-model="user.terms_conditions"
                  >I accept the terms and use</b-form-checkbox>

                  <div class="wrapper">
                    <span class="group-btn">
                      <b-button type="submit" variant="outline-primary">Register</b-button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "RegisterForm",
  props: {
    user: {
      type: Object,
      required: true
    },
    handleRegister: {
      type: Function,
      required: true
    }
  },
  methods: {
    onSubmit() {
      this.handleRegister(this.user);
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
  padding: 45px;
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