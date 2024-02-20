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
    <h2>{{ project.title }}</h2>
    <div>{{ project.title }}</div>
    <div class="d-flex gap-3">
      <p class="btn btn-primary">
        <router-link
          :to="{ name: 'projects' }"
          class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >torna alla lista</router-link
        >
      </p>
      <p class="btn btn-primary">
        <router-link
          :to="{ name: 'home' }"
          class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >torna alla pagina principale</router-link
        >
      </p>
    </div>
  </div>
</template>
