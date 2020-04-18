<template>
  <div v-if="comments">
    <p>
      <strong>Comments:</strong>
    </p>
    <b-card align="center" v-for="comment in comments" :key="comment.id">
      <b-card-text>
        <p>
          <strong>{{comment.user.first_name}} {{comment.user.last_name}}</strong>
        </p>
        <hr />
        <p>{{comment.body}}</p>
        <hr />
        <b-button
          v-if="comment.isAuth"
          squared
          variant="outline-danger"
          @click="deleteComment(comment.id)"
        >Delete</b-button>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "GradebookComments",
  props: {
    comments: {
      type: Array,
      required: true
    },
    handleDeleteComment: {
      type: Function,
      required: true
    }
  },
  methods: {
    deleteComment(id) {
      this.handleDeleteComment(id);
    }
  }
};
</script>