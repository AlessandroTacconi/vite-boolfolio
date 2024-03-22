<script>
import axios from 'axios';
export default {
  name: 'ProjectDetail',
  data() {
    return {
      loading: false,
      project: {},
      Url: 'http://127.0.0.1:8000',
      apiUrl: {
        projects: '/api/projects',
      },
    };
  },
  methods: {
    getProject() {
      this.loading = true;
      axios
        .get(this.Url + this.apiUrl.projects + '/' + this.$route.params.slug)
        .then((response) => {
          this.project = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>
<template>
  <div class="container">
    <div class="my-3" v-if="loading">
      caricamento in corso...
      <pre class="my-3">
───────────████████
──────────███▄███████
──────────███████████
──────────██████
──────────█████████
█───────███████
██────████████████
███──██████████──█
─█████████████
────████████
─────███──██
─────██────█
─────██────██
    </pre
      >
    </div>
    <div class="d-flex gap-3 mt-4">
      <p class="btn btn-dark btn-sm my-3">
        <router-link
          :to="{ name: 'projects' }"
          class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >torna alla lista</router-link
        >
      </p>
      <p class="btn btn-dark btn-sm my-3">
        <router-link
          :to="{ name: 'home' }"
          class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >torna alla home</router-link
        >
      </p>
    </div>
    <div class="d-flex justify-content-between container proj left gap-5">
      <div>
        <h1>My projects</h1>
      </div>
      <div>
        <h5>{{ project.title }}</h5>
        <p>{{ project.category.title }} - {{ project.year }}</p>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.proj {
  /* font-family: amagro; */
  text-transform: uppercase;
  border: 3px solid black;
  padding: 5px;
  text-align: start;
}

.left {
  margin-top: 25vh;
}

h1 {
  font-size: 70px;
}
</style>
