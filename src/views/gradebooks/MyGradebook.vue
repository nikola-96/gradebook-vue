<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="container">
            <div>
              <my-gradebook-card
                v-if="getMyGradebookFromState.gradebook"
                :professor="getMyGradebookFromState"
                :deleteGradebook="deleteGradebook"
              />
              <h1 v-else class="heading-else">You don't have gradebook yet.</h1>
            </div>
            <div class="comments" v-if="getMyGradebookFromState.gradebook">
              <div
                class="alert alert-danger"
                v-for="(validationError, fieldName) in errors"
                :key="`validation-errors-${fieldName}`"
              >{{ ` ${validationError[0]}` }}</div>
              <gradebook-comments
                :comments="getCommentsFromState"
                :handleDeleteComment="handleDeleteComment"
              />
              <gradebook-comment-form class="comment-form" :postComment="postComment" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import MyGradebookCard from "@/components/gradebooks/MyGradebookCard.vue";
import GradebookComments from "@/components/gradebooks/GradebookComments.vue";
import GradebookCommentForm from "@/components/gradebooks/GradebookCommentForm";
import commentService from "@/services/CommentService";
import gradebookService from "@/services/GradebookService";

export default {
  name: "MyGradebook",
  components: {
    MyGradebookCard,
    GradebookComments,
    GradebookCommentForm
  },
  methods: {
    ...mapActions([
      "getMyGradebook",
      "getComments",
      "setMyGradebookToUndifined"
    ]),
    async postComment(comment) {
      comment.gradebook_id = this.getMyGradebookFromState.gradebook.id;
      try {
        await commentService.postComment(comment);
        await this.getComments(this.getMyGradebookFromState.gradebook.id);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errors = {};
            this.errors = Object.assign({}, {}, error.response.data.errors);
          }
        }
      }
    },
    async handleDeleteComment(id) {
      if (confirm("Are you sure?")) {
        await commentService.delete(id);
        await this.getComments(this.getMyGradebookFromState.gradebook.id);
      }
    },
    async deleteGradebook(id) {
      if (confirm("Are you sure?")) {
        await gradebookService.delete(id);
        this.setMyGradebookToUndifined();
        this.$router.push("/gradebooks");
      }
    }
  },
  computed: {
    ...mapGetters(["getMyGradebookFromState", "getCommentsFromState"])
  },
  async created() {
    try {
      await this.getMyGradebook();
      if (this.getMyGradebookFromState.gradebook) {
        await this.getComments(this.getMyGradebookFromState.gradebook.id);
      }
    } catch (error) {}
  },
  data() {
    return {
      comment: {},
      errors: {}
    };
  }
};
</script>
<style >
.container {
  display: flex;
  flex-direction: column;
}
.comments {
  margin-bottom: 25px;
}
.heading-else {
  margin-top: 150px;
}
</style>