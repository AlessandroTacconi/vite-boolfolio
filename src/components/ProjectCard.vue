<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
  },
  computed: {
    ProjectContent() {
      return this.project.description?.substring(0, 50) + '...';
    },
    ProjectTitle() {
      return this.project.title?.substring(0, 50) + '...';
    },
  },
};
</script>

<template>
  <router-link :to="{ name: 'project-detail', params: { slug: project.slug } }">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title mb-3">{{ ProjectTitle }}</h4>

        <p class="card-text">
          {{ ProjectContent }}
        </p>
        <p class="card-subtitle mb-2 text-body-secondary year">
          {{ project.year }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.card {
  border: 3px solid black;
  height: 200px;
}

.card-body {
  position: relative;
}

.year {
  position: absolute;
  bottom: 0px;
  right: 10px;
}
</style>
