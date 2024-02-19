<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

import axios from 'axios';
export default {
  name: 'Portfolio',
  components: {
    AppMain,
    AppHeader,
  },
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
  <div class="container">
    <AppHeader />
    <h1>Portfolio</h1>
    <AppMain :projects="projects" />
  </div>
</template>
