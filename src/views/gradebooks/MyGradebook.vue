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
              />
              <h1 v-else>You don't have your gradebook</h1>
            </div>
            <div class="comments">
              <p>
                <strong>Comments:</strong>
              </p>
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

export default {
  name: "MyGradebook",
  components: {
    MyGradebookCard,
    GradebookComments,
    GradebookCommentForm
  },
  methods: {
    ...mapActions(["getMyGradebook", "getComments"]),
    async postComment(comment) {
      comment.gradebook_id = this.getMyGradebookFromState.gradebook.id;
      try {
        await commentService.postComment(comment);
      } catch (error) {
        console.log(error);
      }
      await this.getComments(this.getMyGradebookFromState.gradebook.id);
    },
    async handleDeleteComment(id) {
      if (confirm("Are you sure?")) {
        await commentService.delete(id);
        await this.getComments(this.getMyGradebookFromState.gradebook.id);
      }
    }
  },
  computed: {
    ...mapGetters(["getMyGradebookFromState", "getCommentsFromState"])
  },
  async created() {
    await this.getMyGradebook();
    await this.getComments(this.getMyGradebookFromState.gradebook.id);
  },
  data() {
    return {
      comment: {}
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
</style>