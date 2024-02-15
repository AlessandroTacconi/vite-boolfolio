<script>
import axios from 'axios';
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [],
      Url: 'http://127.0.0.1:8000',
      apiUrl: {
        projects: '/api/projects',
      },
    };
  },
  methods: {
    getProjects() {
      axios
        .get(this.Url + this.apiUrl.projects)
        .then((response) => {
          this.projects = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>
<template>
  <h1>Portfolio</h1>
  <div class="row m-5">
    <div class="col col-md-3 g-5" v-for="project in projects">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">{{ project.title }}</h6>
          <p class="card-subtitle mb-2 text-body-secondary">
            {{ project.year }}
          </p>
          <p class="card-text">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
