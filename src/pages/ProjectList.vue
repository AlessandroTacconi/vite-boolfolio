<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      projects: [],
      Url: 'http://127.0.0.1:8000',
      apiUrl: {
        projects: '/api/projects',
      },
    };
  },
  components: {
    ProjectCard,
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
  <div>Lista Progetti</div>
  <main>
    <div class="row m-5">
      <div class="col col-md-4 g-3" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>
