<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <single-gradebook-comp
            v-if="getSingleGradebookFromState"
            :gradebook="getSingleGradebookFromState"
            :deleteGradebook="deleteGradebook"
          />
          <gradebook-comments
            :comments="getCommentsFromState"
            :handleDeleteComment="handleDeleteComment"
          />
          <div
            class="alert alert-danger"
            v-for="(validationError, fieldName) in errors"
            :key="`validation-errors-${fieldName}`"
          >{{ ` ${validationError[0]}` }}</div>

          <gradebook-comment-form class="comment-form" :postComment="postComment" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import SingleGradebookComp from "@/components/gradebooks/SingleGradebookComp";
import { mapActions, mapGetters } from "vuex";
import GradebookComments from "@/components/gradebooks/GradebookComments.vue";
import GradebookCommentForm from "@/components/gradebooks/GradebookCommentForm";
import commentService from "@/services/CommentService";
import gradebookService from "@/services/GradebookService";

export default {
  name: "SingleGradebook",
  components: {
    SingleGradebookComp,
    GradebookComments,
    GradebookCommentForm
  },
  methods: {
    ...mapActions(["getSingleGradebook", "getComments"]),
    async postComment(comment) {
      comment.gradebook_id = this.id;
      try {
        await commentService.postComment(comment);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errors = {};
            this.errors = Object.assign({}, {}, error.response.data.errors);
          }
        }
      }
      await this.getComments(this.id);
    },
    async handleDeleteComment(id) {
      if (confirm("Are you sure?")) {
        await commentService.delete(id);
        await this.getComments(this.id);
      }
    },
    async deleteGradebook(id) {
      if (confirm("Are you sure?")) {
        await gradebookService.delete(id);
        this.$router.push("/gradebooks");
      }
    }
  },
  computed: {
    ...mapGetters(["getSingleGradebookFromState", "getCommentsFromState"])
  },
  async created() {
    this.id = this.$route.params.id;
    await this.getSingleGradebook(this.id);
    await this.getComments(this.id);
  },
  data() {
    return {
      id: 0,
      errors: {}
    };
  }
};
</script>