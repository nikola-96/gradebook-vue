<template>
  <b-row class="mt-2">
    <b-col sm="2">
      <label for="textarea-large"></label>
    </b-col>
    <b-col sm="10">
      <b-form-textarea
        id="textarea-large"
        size="lg"
        placeholder="Enter your comment"
        class="comment-form"
        v-model="comment.body"
      ></b-form-textarea>
      <b-button class="btn-comment" @click="handlePostComment">Add Comment</b-button>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "GradebookCommentForm",
  props: {
    postComment: {
      type: Function,
      required: true
    }
  },
  methods: {
    handlePostComment() {
      this.postComment(this.comment);
    }
  },
  data() {
    return {
      comment: {}
    };
  }
};
</script>
<style>
.comment-form {
  margin-left: 25%;
  margin-top: 10px;
  width: 750px;
}
.btn-comment {
  margin-left: 45%;
  margin-top: 10px;
}
</style>