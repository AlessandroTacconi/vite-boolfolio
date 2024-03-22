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
    <h1 class="proj">My projects</h1>

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
              class="btn btn-dark btn-sm my-3"
              v-show="responseData.results?.prev_page_url"
              @click="prevPage"
            >
              <i class="fa-regular fa-hand-point-left"></i>
            </button>
          </li>

          <li>
            <button
              class="btn btn-dark btn-sm my-"
              v-show="responseData.results?.next_page_url"
              @click="nextPage"
            >
              <i class="fa-regular fa-hand-point-right"></i>
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
<style scoped>
pre {
  font-size: 4px;
}

.proj {
  font-size: 70px;
  /* font-family: amagro; */
  text-transform: uppercase;
  border: 3px solid black;
  padding: 5px;
  text-align: center;
  margin-top: 15px;
}
</style>
