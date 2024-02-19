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
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h6 class="card-title">{{ project.title }}</h6>
      <p class="card-subtitle mb-2 text-body-secondary">
        {{ project.year }}
      </p>
      <p class="card-text">
        {{ ProjectContent }}
      </p>
    </div>
  </div>
</template>
