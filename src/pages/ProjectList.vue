<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
  name: 'ProjectList',
  data() {
    return {
      loading: false,
      currentPage: 1,
      responseData: {},
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
      this.loading = true;
      axios
        .get(this.Url + this.apiUrl.projects, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.responseData = response.data;
          // this.projects = response.data.results.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextPage() {
      this.currentPage++;
      this.getProjects();
    },
    prevPage() {
      this.currentPage--;
      this.getProjects();
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <main class="container">
    <div>Lista Progetti</div>
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
    <div class="row m-5" v-else>
      <nav class="my-3">
        <ul class="d-flex justify-content-between list-unstyled">
          <li>
            <button
              class="btn btn-warning"
              v-show="responseData.results?.prev_page_url"
              @click="prevPage"
            >
              Prev
            </button>
          </li>

          <li>
            <button
              class="btn btn-warning"
              v-show="responseData.results?.next_page_url"
              @click="nextPage"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
      <div
        class="col col-md-4 g-3"
        v-for="project in responseData.results?.data"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>
<style>
pre {
  font-size: 4px;
}
</style>
