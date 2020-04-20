<template>
  <div>
    <div class="form">
      <h1 class="hedaing">Create new professor.</h1>
      <b-jumbotron>
        <div class="proba">
          <div class="wraper-two">
            <b-form-group
              label-cols="4"
              label-cols-lg="5"
              label-for="input-default"
              label="Enter name"
            >
              <b-form-input v-model="professor.first_name" id="input-default"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols="4"
              label-cols-lg="5"
              label-for="input-default"
              label="Enter last name"
            >
              <b-form-input v-model="professor.last_name" id="input-default1"></b-form-input>
            </b-form-group>
            <div v-if="addImage">
              <div class="form-group" v-for="(input,k) in inputs" :key="k">
                <b-form-group
                  label-cols="4"
                  label-cols-lg="5"
                  label-for="input-default"
                  label="Add image url"
                >
                  <b-form-input type="text" v-model="input.name" />
                  <span>
                    <b-button
                      class="minus"
                      variant="outline-dark"
                      @click="remove(k)"
                      v-show="k || ( !k && inputs.length > 1)"
                    >-</b-button>
                    <b-button variant="outline-dark" @click="add(k)" v-show="k == inputs.length-1">+</b-button>
                  </span>
                </b-form-group>
              </div>
            </div>
          </div>
          <div>
            <b-form-group
              id="input-name"
              label="Gradebook name:"
              label-for="name"
              v-for="image in images"
              :key="image.indexOf"
            >
              <b-form-input
                class="input-filed"
                id="name"
                type="text"
                required
                :v-model="image"
                placeholder="Enter name of gradebook"
              ></b-form-input>
            </b-form-group>
          </div>

          <b-form-select required v-model="professor.gradebook_id" class="mb-4" v-if="gradebooks">
            <b-form-select-option :value="null" disabled>Please select gradebook</b-form-select-option>
            <b-form-select-option
              v-for="gradebook in gradebooks"
              :key="gradebook.id"
              :value="gradebook.id"
            >{{gradebook.name}}</b-form-select-option>
          </b-form-select>
          <br />

          <b-button variant="secondary" @click="postProfessor">Submit</b-button>
          <b-button class="btn-image" variant="primary" @click="show">Add Image</b-button>
        </div>
        <b-button class="btn-cancel" variant="danger" to="/professors">Cancel</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfessorForm",
  props: {
    gradebooks: {
      type: Array,
      required: true
    },
    handlePostProffesor: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      professor: {},
      name: "",
      addImage: false,
      images: [],
      inputs: [
        {
          name: ""
        }
      ],
      imageUrl: []
    };
  },
  methods: {
    show() {
      this.addImage = true;
    },
    postProfessor() {
      this.inputs.forEach(input => {
        this.imageUrl.push(input.name);
      });
      this.professor.imageUrl = this.imageUrl;
      this.handlePostProffesor(this.professor);
      this.imageUrl = [];
    },
    add(index) {
      this.inputs.push({ name: "" });
    },
    remove(index) {
      this.inputs.splice(index, 1);
    }
  },
  created() {}
};
</script>
<style scoped>
.form {
  margin-top: 150px;
}
.minus {
  margin-right: 5px;
}
.btn-image {
  margin-left: 8px;
}
.mb-4 {
  width: 390px;
}
.wraper-two {
  margin-right: 30%;
}
.heading {
  margin-bottom: 30px;
}
.btn-cancel {
  margin-top: 8px;
}

/* .proba {
  flex-direction: column;
  justify-content: center;
} */
</style>