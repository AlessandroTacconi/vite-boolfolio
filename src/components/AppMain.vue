<script>
import ProjectCard from './ProjectCard.vue';
export default {
  name: 'Main',
  props: ['projects'],
  components: {
    ProjectCard,
  },
};
</script>

<template>
  <main>
    <div class="row m-5">
      <div class="col col-md-4 g-3" v-for="project in projects">
        <ProjectCard :project="project" />
      </div>
    </div>
  </main>
</template>
