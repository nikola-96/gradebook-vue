<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="errors">
            <ul style="list-style-type:none;">
              <li v-for="(error, k) in errors" :key="k" class="errors-text">
                <strong>{{error}}</strong>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  props: {
    errors: {
      type: Object,
      required: false
    }
  }
};
</script>
<style>
.errors-text {
  color: red;
}
</style>